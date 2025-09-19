# 🌸 Artenact: The Heritage AI Platform for Indian Artisans

**"Artisans focus on crafting, AI handles storytelling, design, and selling."**

### 📌 Problem Statement

India is home to over 50 million artisans and craftsmen, custodians of priceless traditional skills and cultural heritage. However, they face immense challenges in the modern digital marketplace, including:

* **Lack of Digital Skills:** Limited knowledge of marketing and e-commerce.
* **Invisible Value:** Difficulty in conveying the rich cultural narrative behind their products, which are often devalued by cheap, mass-produced copies.
* **Marketplace Disconnect:** A widening gap between traditional art forms and digitally-native consumers.

These challenges threaten the sustainability of unique art forms and the livelihoods of their creators.

### 🚀 Solution – The "Heritage AI" Platform

Artenact is a ground-breaking AI-powered platform that acts as a digital archivist and creative collaborator for local artisans. We empower them to:

* **Digitize their craft:** Create a professional digital footprint instantly.
* **Tell their authentic story:** Weave the heritage of their craft into compelling, shareable content.
* **Sell directly to a global audience:** Connect with buyers who value authenticity and emotional connection.

Built entirely on **Google Cloud's Generative AI** (Vertex AI, Gemini, Imagen, Translation API), Artenact harmonizes traditional craftsmanship with modern consumer trends.

### ✨ Key Features (Hackathon MVP)

Our prototype focuses on the core "Heritage Capsule" and "AI Storyteller" features:

* **📝 AI Story & Content Generator:** An artisan records an audio story about their craft in their native language. Our backend uses **Google's Speech-to-Text** and **Translation API** to transcribe and translate it. **Vertex AI's Gemini Pro** then crafts polished product descriptions, emotional narratives, and social media captions with relevant hashtags.
* **🔮 Heritage Capsule:** We preserve the artisan's original audio story and pair it with the AI-generated text. This "capsule" serves as a unique, interactive digital archive that accompanies every product, giving buyers an authentic, emotional connection to the artisan and their heritage.

### 🏗️ Technical Architecture (Google Cloud)

* **Frontend:** A modern, responsive web application built with **Next.js** or **React** for a fast, mobile-first experience.
* **Backend:** A serverless API powered by **Cloud Functions** or **Cloud Run**. This ensures a scalable and cost-effective solution for handling API calls from the front-end to various GCP services.
* **AI/ML:** Our core pipeline leverages **Vertex AI's Gemini Pro** for text generation, **Speech-to-Text API** for transcription, and **Translation API** for multi-lingual support.
* **Storage:** **Google Cloud Storage (GCS)** for securely storing audio recordings and images uploaded by the artisans.
* **Database:** **Firestore** for managing artisan profiles and product data.

### 🔄 User Flow (Prototype Demo)

1.  **Artisan Records:** The artisan uses their phone to record a short audio clip in their local dialect, describing their craft.
2.  **AI Processes:** The backend automatically transcribes, translates, and generates a rich, contextual story in seconds.
3.  **Heritage Capsule is Born:** The prototype displays the new product page, showing the generated text alongside an audio player for the original story.
4.  **Instant Marketability:** The artisan can now share this professional-grade product page and its generated social captions on any platform.

### 🚀 Future Roadmap (Post-Hackathon)

Our vision extends far beyond this MVP. Future additions to the platform will include:

* **🎨 Generative Design Studio:** Use **Vertex AI's Imagen** to help artisans create professional-looking product photos and mockups from a single image.
* **🛒 Integrated E-Commerce:** One-click publishing to marketplaces like Etsy or social platforms like Instagram and Threads, with AI-driven insights on what sells.
* **📊 Trend Analytics:** An AI dashboard that suggests trending colors, patterns, and keywords to help artisans align their new creations with global consumer trends without compromising their traditional techniques.
* **🌍 Multi-lingual Reach:** Fully-automated translation of product descriptions and an AI-powered conversational assistant to help artisans communicate with buyers globally.

### 📂 Repo Structure
artenact/
├── frontend/      # Next.js app
├── backend/       # Node.js API services
├── ml/            # AI prompts, notebooks, scripts
├── infra/         # Deployment configs
└── README.md

### ⚡ Quick Start

Follow these steps to get the project running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)<your-org>/artenact.git
    cd artenact
    ```
2.  **Install dependencies:**
    ```bash
    # Install frontend dependencies
    cd frontend
    npm install
    
    # Install backend dependencies
    cd ../backend
    npm install
    ```
3.  **Set up environment variables:**
    * Create a `.env` file in both the `frontend` and `backend` directories.
    * Copy the contents from the provided `.env.example` file and fill in your GCP credentials.

4.  **Run the application:**
    ```bash
    # In one terminal, start the backend
    cd backend
    npm run dev
    
    # In a second terminal, start the frontend
    cd ../frontend
    npm run dev
    ```

### 📜 License

This project is licensed under the MIT License.

---

### 2. `.env.example`

Create this file in both the `frontend` and `backend` folders for a professional setup.

Perfect. Here are the files you need to make your repository professional and ready for the hackathon from the very beginning. Just copy and paste the content into the respective files.

1. README.md
This is the public-facing document that tells your story and sells your project. It's concise and optimized for a hackathon judge's quick scan.

Markdown

# 🌸 Artenact: The Heritage AI Platform for Indian Artisans

**"Artisans focus on crafting, AI handles storytelling, design, and selling."**

### 📌 Problem Statement

India is home to over 50 million artisans and craftsmen, custodians of priceless traditional skills and cultural heritage. However, they face immense challenges in the modern digital marketplace, including:

* **Lack of Digital Skills:** Limited knowledge of marketing and e-commerce.
* **Invisible Value:** Difficulty in conveying the rich cultural narrative behind their products, which are often devalued by cheap, mass-produced copies.
* **Marketplace Disconnect:** A widening gap between traditional art forms and digitally-native consumers.

These challenges threaten the sustainability of unique art forms and the livelihoods of their creators.

### 🚀 Solution – The "Heritage AI" Platform

Artenact is a ground-breaking AI-powered platform that acts as a digital archivist and creative collaborator for local artisans. We empower them to:

* **Digitize their craft:** Create a professional digital footprint instantly.
* **Tell their authentic story:** Weave the heritage of their craft into compelling, shareable content.
* **Sell directly to a global audience:** Connect with buyers who value authenticity and emotional connection.

Built entirely on **Google Cloud's Generative AI** (Vertex AI, Gemini, Imagen, Translation API), Artenact harmonizes traditional craftsmanship with modern consumer trends.

### ✨ Key Features (Hackathon MVP)

Our prototype focuses on the core "Heritage Capsule" and "AI Storyteller" features:

* **📝 AI Story & Content Generator:** An artisan records an audio story about their craft in their native language. Our backend uses **Google's Speech-to-Text** and **Translation API** to transcribe and translate it. **Vertex AI's Gemini Pro** then crafts polished product descriptions, emotional narratives, and social media captions with relevant hashtags.
* **🔮 Heritage Capsule:** We preserve the artisan's original audio story and pair it with the AI-generated text. This "capsule" serves as a unique, interactive digital archive that accompanies every product, giving buyers an authentic, emotional connection to the artisan and their heritage.

### 🏗️ Technical Architecture (Google Cloud)

* **Frontend:** A modern, responsive web application built with **Next.js** or **React** for a fast, mobile-first experience.
* **Backend:** A serverless API powered by **Cloud Functions** or **Cloud Run**. This ensures a scalable and cost-effective solution for handling API calls from the front-end to various GCP services.
* **AI/ML:** Our core pipeline leverages **Vertex AI's Gemini Pro** for text generation, **Speech-to-Text API** for transcription, and **Translation API** for multi-lingual support.
* **Storage:** **Google Cloud Storage (GCS)** for securely storing audio recordings and images uploaded by the artisans.
* **Database:** **Firestore** for managing artisan profiles and product data.

### 🔄 User Flow (Prototype Demo)

1.  **Artisan Records:** The artisan uses their phone to record a short audio clip in their local dialect, describing their craft.
2.  **AI Processes:** The backend automatically transcribes, translates, and generates a rich, contextual story in seconds.
3.  **Heritage Capsule is Born:** The prototype displays the new product page, showing the generated text alongside an audio player for the original story.
4.  **Instant Marketability:** The artisan can now share this professional-grade product page and its generated social captions on any platform.

### 🚀 Future Roadmap (Post-Hackathon)

Our vision extends far beyond this MVP. Future additions to the platform will include:

* **🎨 Generative Design Studio:** Use **Vertex AI's Imagen** to help artisans create professional-looking product photos and mockups from a single image.
* **🛒 Integrated E-Commerce:** One-click publishing to marketplaces like Etsy or social platforms like Instagram and Threads, with AI-driven insights on what sells.
* **📊 Trend Analytics:** An AI dashboard that suggests trending colors, patterns, and keywords to help artisans align their new creations with global consumer trends without compromising their traditional techniques.
* **🌍 Multi-lingual Reach:** Fully-automated translation of product descriptions and an AI-powered conversational assistant to help artisans communicate with buyers globally.

### 📂 Repo Structure

artenact/
├─ frontend/            # Next.js or React app
├─ backend/             # Node/Express / Fastify API
├─ ml/                  # prompts, notebooks
├─ infra/               # terraform / gcloud deployment 
├─ docs/                # docs, demo scripts
├─ design/              # mockups, logos, images
└─ README.md



### ⚡ Quick Start

Follow these steps to get the project running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/](https://github.com/)<your-org>/artenact.git
    cd artenact
    ```
2.  **Install dependencies:**
    ```bash
    # Install frontend dependencies
    cd frontend
    npm install
    
    # Install backend dependencies
    cd ../backend
    npm install
    ```
3.  **Set up environment variables:**
    * Create a `.env` file in both the `frontend` and `backend` directories.
    * Copy the contents from the provided `.env.example` file and fill in your GCP credentials.

4.  **Run the application:**
    ```bash
    # In one terminal, start the backend
    cd backend
    npm run dev
    
    # In a second terminal, start the frontend
    cd ../frontend
    npm run dev
    ```

### 📜 License

This project is licensed under the MIT License.

---

### 2. `.env.example`

Create this file in both the `frontend` and `backend` folders for a professional setup.

.env.example
This file is a template for your environment variables.
NEVER commit your actual .env file to Git.
--- GCP Configuration ---
GCP_PROJECT_ID=your-gcp-project-id
GCP_REGION=us-central1
GCS_BUCKET_NAME=your-gcs-bucket-name

--- AI API Configuration ---
Use base64 encoded service account key for production,
but for local dev, you can use the path to the key file.
To get the base64 string: cat your-key-file.json | base64
Recommended for GitHub Actions secrets.
GCP_SA_KEY_BASE64=your-base64-encoded-key

Vertex AI Model IDs
For text generation, Gemini Pro is a great choice.
VERTEX_AI_GEMINI_PRO_MODEL=gemini-pro

For image generation, Imagen is an excellent choice.
This is for a future feature, but good to include.
VERTEX_AI_IMAGEN_MODEL=imagen-on-vertex-ai

--- Backend API Configuration ---
The URL for your backend API
NEXT_PUBLIC_API_URL=http://localhost:3000

--- Authentication Configuration ---
If using Firebase Auth for a quick setup
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain

---

### 3. `CONTRIBUTING.md`

This file encourages collaboration and provides clear guidelines for anyone who wants to help.

```markdown
# 🤝 Contributing to Artenact

First off, thank you for considering contributing to our project! It's people like you who help make the open-source community an amazing place.

## We're a Hackathon Project

Please note that this repository was initially developed for a hackathon. The code may be messy and the features are a Minimum Viable Product (MVP). We welcome all kinds of contributions, no matter how small.

## How to Contribute

### 🐛 Reporting Bugs

* **Use the issue tracker:** Before opening a new issue, please check if a similar one already exists.
* **Provide details:** Include clear and concise steps to reproduce the bug. Provide screenshots or error logs if possible.
* **Include your environment:** Mention your operating system, browser, and any other relevant information.

### ✨ Suggesting Enhancements

* **Use the issue tracker:** Open an issue with the title `[Feature Request]: Your Idea`.
* **Describe your idea:** Explain the feature in detail and why you think it would be a valuable addition to the project.

### 📝 Your First Code Contribution

* **Fork the repository** and clone it to your local machine.
* **Create a new branch** for your feature or bug fix: `git checkout -b feat/my-new-feature`
* **Make your changes.** Follow the **Quick Start** section in the `README.md` to get the project running.
* **Commit your changes** with a clear and descriptive message.
* **Push to your fork** and submit a pull request (PR) to the `main` branch of this repository.

### 📢 Pull Request Process

* Ensure your code follows the project's structure and style.
* Provide a clear and descriptive PR title and summary.
* Link to the related issue in the PR description.
* Be prepared for feedback and constructive criticism. We're a team, and we want to help you get your contribution merged!

## Ethical Considerations and Consent

Our project works directly with human stories and cultural heritage. By contributing, you agree to uphold our core principles of **Responsible AI** and **User Empowerment**. Any data collection or feature development must be done with the explicit, informed consent of the artisans. We value transparency and want the artisans to feel empowered, not exploited.

---

### 4. `/.github/workflows/deploy.yml`

This file is a fantastic way to show a complete, production-ready workflow from the start.

```yaml
# This workflow automates the deployment of the backend API to Cloud Run
# on every push to the 'main' branch.

name: Deploy to Cloud Run

on:
  push:
    branches:
      - main

env:
  PROJECT_ID: ${{ secrets.GCP_PROJECT_ID }}
  SERVICE_NAME: artenact-backend
  IMAGE_NAME: artenact-backend-image
  GCP_REGION: us-central1

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    # Give the job the required permissions for Google Cloud
    permissions:
      contents: 'read'
      id-token: 'write'

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      # --- Set up and authenticate with GCP ---
      - name: 'Authenticate to Google Cloud'
        id: 'auth'
        uses: 'google-github-actions/auth@v1'
        with:
          credentials_json: '${{ secrets.GCP_SA_KEY_JSON }}'
      
      - name: 'Set up Cloud SDK'
        uses: 'google-github-actions/setup-gcloud@v1'

      # --- Build and push Docker image to Artifact Registry ---
      - name: 'Build and push Docker image'
        uses: 'docker/build-push-action@v5'
        with:
          context: './backend'
          push: true
          tags: '${{ env.GCP_REGION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/artenact-repo/${{ env.IMAGE_NAME }}:${{ github.sha }}'
          platforms: 'linux/amd64'
          # Add caching for faster builds in a real project
          # cache-from: type=gha, scope=build
          # cache-to: type=gha, scope=build

      # --- Deploy the image to Cloud Run ---
      - name: 'Deploy to Cloud Run'
        id: 'deploy-to-cloud-run'
        uses: 'google-github-actions/deploy-cloudrun@v1'
        with:
          service: ${{ env.SERVICE_NAME }}
          region: ${{ env.GCP_REGION }}
          image: '${{ env.GCP_REGION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/artenact-repo/${{ env.IMAGE_NAME }}:${{ github.sha }}'
          env_vars: |
            GCP_PROJECT_ID=${{ env.PROJECT_ID }}
            GCP_REGION=${{ env.GCP_REGION }}
            GCS_BUCKET_NAME=${{ secrets.GCS_BUCKET_NAME }}
            GCP_SA_KEY_BASE64=${{ secrets.GCP_SA_KEY_BASE64 }}
            VERTEX_AI_GEMINI_PRO_MODEL=${{ secrets.VERTEX_AI_GEMINI_PRO_MODEL }}

      - name: 'Show deployed URL'
        run: echo "Cloud Run URL: ${{ steps.deploy-to-cloud-run.outputs.url }}"
