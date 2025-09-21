# auth_dependency.py
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from firebase_admin import auth

bearer_scheme = HTTPBearer()

async def get_current_user(token: HTTPAuthorizationCredentials = Depends(bearer_scheme)):
    """Dependency function to verify Firebase ID token and return user data."""
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Bearer token not provided",
        )
    try:
        # This is where we ask Firebase to verify the token
        decoded_token = auth.verify_id_token(token.credentials)
        return decoded_token
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Invalid authentication credentials: {e}",
        )