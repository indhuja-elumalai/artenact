import vertexai
from vertexai.generative_models import GenerativeModel
import os

PROJECT_ID = os.environ.get("GCLOUD_PROJECT", "artenact-dde9a")
LOCATION = "us-central1"

try:
    vertexai.init(project=PROJECT_ID, location=LOCATION)
    gemini_model = GenerativeModel("gemini-1.5-pro-preview-0409")
    print("✅ Vertex AI and Gemini Model initialized successfully.")
except Exception as e:
    print(f"🔥 Error initializing Vertex AI: {e}")
    raise

async def generate_story_from_text(raw_artisan_text: str) -> str:
    try:
        prompt = f"""
        You are a master storyteller and head curator for an exhibit at a world-renowned museum.
        Your task is to take the raw, authentic details provided by the artisan and transform them into a single, universally compelling story (around 150 words). The artisan's text might be in simple English, broken English, or a mix of languages. Your job is to elevate it into a polished, poetic narrative.

        Your narrative must follow this five-part structure:
        1. The Human Touch: Begin with the artisan.
        2. The Bridge to Tradition: Link the work to the lineage of the craft.
        3. The Soul of the Material: Describe the unique materials.
        4. The Symbol, Demystified: Explain the meaning of the central symbol or pattern.
        5. The Timeless Value: Conclude by framing the object as a piece of history.

        **Tone & Language:**
        - Evocative, poetic, and luxurious.
        - Clear and accessible.
        - Emphasize authenticity, masterful skill, and the soul of the craft.
        - **Crucially, do not invent any facts.** If the source text is short, focus on what is given and expand on its cultural meaning beautifully.

        **Artisan's Raw Text:**
        ---
        {raw_artisan_text}
        ---

        Now, write the universally compelling story.
        """
        
        response = await gemini_model.generate_content_async(prompt)
        return response.text
    except Exception as e:
        print(f"🔥 Error during story generation with Gemini: {e}")
        raise

