Admin Dashboard (prototype)
===========================

Quick scaffold for a private admin dashboard to manage portfolio content and prepare RAG data.

Setup (backend)
---------------

1. Create `.env` with:

   MONGO_URI=your_mongo_uri
   JWT_SECRET=supersecret
   OPENAI_API_KEY=...

2. Install dependencies in `server/`:

   npm init -y
   npm i express mongoose cors dotenv bcrypt jsonwebtoken multer axios

3. Run:

   node index.js

API endpoints (examples)
------------------------

- POST `/api/auth/login` — { email, password } => { token }
- GET `/api/admin/about` — public read
- POST `/api/admin/about` — update (requires Bearer token)
- CRUD `/api/admin/projects`, `/api/admin/certificates`, `/api/admin/experience`
- POST `/api/admin/resume` — replace resume file
- GET `/api/admin/export/rag` — export normalized JSON for embeddings

RAG prompt template (system)
----------------------------

You are an AI assistant representing a high-performing Full-Stack & Agentic AI Engineer named Temkin Abdulmelik. Use only the provided content. Be professional, concise, and recruiter-friendly. Do not fabricate facts. If data is missing, clearly state you don't have that information.

Frontend admin
--------------
Look at `components/admin/*` for a minimal React admin UI and `components/chat/ChatWidget.tsx` for a read-only RAG chat widget.
