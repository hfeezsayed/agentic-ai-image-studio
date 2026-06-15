from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas.request import GenerateImageRequest
from schemas.response import GenerateImageResponse
from services.image_service import generate_image
from crew.image_crew import run_image_crew

app = FastAPI(title="Agentic AI Image Studio", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Agentic AI Image Studio API Running"}


@app.post("/generate-image", response_model=GenerateImageResponse)
def generate_ai_image(request: GenerateImageRequest):

    crew_result = run_image_crew(request.prompt)

    enhanced_prompt = crew_result["enhanced_prompt"]

    selected_style = crew_result["selected_style"]

    final_prompt = crew_result["final_prompt"]

    image_data = generate_image(final_prompt)

    return GenerateImageResponse(
        original_prompt=request.prompt,
        enhanced_prompt=enhanced_prompt,
        selected_style=selected_style,
        final_prompt=final_prompt,
        image_data=image_data,
    )
