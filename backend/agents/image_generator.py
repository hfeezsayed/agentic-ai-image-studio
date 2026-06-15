from crewai import Agent


def create_image_generator_agent():
    return Agent(
        role="AI Image Generation Specialist",
        goal="""
        Prepare the final image generation prompt
        using enhanced prompt and selected style.
        """,
        backstory="""
        You are responsible for preparing the final
        production-ready prompt that will be sent to
        the image generation model.
        """,
        verbose=True,
    )
