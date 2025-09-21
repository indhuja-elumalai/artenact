
from fastapi import FastAPI, Depends, status, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import firebase_admin_init
import database

from auth_dependency import get_current_user
import ai_services

class UserSchema(BaseModel):
    name: str | None = None
    craft_type: str | None = None
    bio: str | None = None

class StoryRequest(BaseModel):
    """Defines the expected JSON body for the story refinement request."""
    raw_text: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def root():
    """A simple welcome message for the root URL."""
    return {"message": "Welcome to the Artenact API! 🎨"}

@app.get("/api/profile")
async def get_user_profile(user_data: dict = Depends(get_current_user)):
    """Protected Route: Fetches the logged-in user's profile from MongoDB."""
    uid = user_data["uid"]
    profile = await database.user_collection.find_one({"firebase_uid": uid})
    if profile:
        profile.pop("_id", None)
        return {"user": profile}
    raise HTTPException(status_code=404, detail="Profile not found.")

@app.post("/api/profile", status_code=status.HTTP_201_CREATED)
async def create_or_update_profile(payload: UserSchema, user_data: dict = Depends(get_current_user)):
    """Protected Route: Creates or updates a user's profile in MongoDB."""
    uid = user_data["uid"]
    email = user_data.get("email")
    user_doc = {"firebase_uid": uid, "email": email, **payload.dict(exclude_unset=True)}
    await database.user_collection.update_one({"firebase_uid": uid}, {"$set": user_doc}, upsert=True)
    return {"message": "Profile synced successfully", "user_data": user_doc}



@app.post("/api/story/refine")
async def refine_story_from_text(
    request: StoryRequest,
    user_data: dict = Depends(get_current_user)
):
    """
    Protected Route:
    1. Receives raw text from the artisan.
    2. Generates a beautiful story using Gemini.
    3. Saves the story to the user's profile bio.
    """
    uid = user_data["uid"]
    
    try:
        final_story = await ai_services.generate_story_from_text(request.raw_text)

        await database.user_collection.update_one(
            {"firebase_uid": uid},
            {"$set": {"bio": final_story, "last_story_source": request.raw_text}},
            upsert=True 
        )

        return {
            "message": "Story refined and saved successfully!",
            "original_text": request.raw_text,
            "refined_story": final_story,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate story: {str(e)}")

