from pydantic import BaseModel


class GenerateImageResponse(BaseModel):
    original_prompt: str
    enhanced_prompt: str
    selected_style: str
    final_prompt: str
    image_data: str
