# 🎨 Agentic AI Image Studio

An Agentic AI-powered image generation platform where multiple AI agents collaborate to enhance prompts, select visual styles, and generate high-quality AI images.

---

## 🚀 Features

### 🧠 Prompt Engineer Agent

- Enhances user prompts
- Adds details, lighting, composition, and quality instructions
- Converts simple prompts into professional image-generation prompts

### 🎨 Style Expert Agent

- Analyzes the prompt
- Selects the most suitable visual style

Supported Styles:

- Realistic
- Anime
- Cartoon
- 3D Render
- Cinematic
- Interior Design

### 🖼️ Image Generator Agent

- Combines enhanced prompt and style
- Creates the final production-ready prompt
- Generates images using OpenAI Image Generation

### 📥 User Features

- Generate AI images
- View enhanced prompts
- View selected styles
- View final prompts
- Copy generated prompts
- Download generated images

---

## 🏗️ Architecture

```text
User
 ↓
Frontend (Next.js)
 ↓
FastAPI Backend
 ↓
Prompt Engineer Agent
 ↓
Style Expert Agent
 ↓
Image Generator Agent
 ↓
OpenAI Image Model
 ↓
Generated Image
```

---

## 🛠️ Tech Stack

### Frontend

- Next.js 15
- TypeScript
- Tailwind CSS

### Backend

- FastAPI
- Python

### AI

- CrewAI
- OpenAI API

### Deployment

- Vercel
- Render

---

## 📂 Project Structure

```text
agentic-ai-image-studio/

├── backend/
│   ├── agents/
│   │   ├── prompt_engineer.py
│   │   ├── style_expert.py
│   │   └── image_generator.py
│   │
│   ├── crew/
│   │   └── image_crew.py
│   │
│   ├── services/
│   ├── schemas/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── types/
│   └── public/
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/hfeezsayed/agentic-ai-image-studio.git

cd agentic-ai-image-studio
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL_NAME=gpt-4o-mini
```

Run Backend:

```bash
uvicorn main:app --reload
```

Backend:

```text
http://localhost:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```text
http://localhost:3000
```

---

## 📸 Screenshots

Add project screenshots here after deployment.

---

## 🎯 Learning Outcomes

This project demonstrates:

- Agentic AI Architecture
- Multi-Agent Systems
- CrewAI Workflows
- Prompt Engineering
- OpenAI API Integration
- FastAPI Development
- Next.js Development
- Frontend-Backend Integration
- Production Deployment

---

## 🔮 Future Enhancements

### Version 2

- Image Critic Agent
- Regeneration Workflow
- Image Quality Scoring

### Version 3

- Interior Design Agent
- Furniture Recommendations
- Color Palette Suggestions
- Room Visualization

---

## 👨‍💻 Developed By

**Hafeez Ali**

AI Engineer | Full Stack Developer | Agentic AI Enthusiast

---
