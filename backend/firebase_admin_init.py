# firebase_admin_init.py
import firebase_admin
from firebase_admin import credentials

try:
    # This line looks for your secret key file
    cred = credentials.Certificate("serviceAccountKey.json")
    firebase_admin.initialize_app(cred)
    print("✅ Firebase Admin SDK initialized successfully.")
except Exception as e:
    print(f"🔥 Error initializing Firebase Admin SDK: {e}")