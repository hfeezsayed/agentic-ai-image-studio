from crewai import Agent


def create_prompt_engineer_agent():
    return Agent(
        role="Senior Prompt Engineer",
        goal="""
        Transform simple image prompts into highly detailed,
        professional image generation prompts.
        """,
        backstory="""
        You are an expert AI Prompt Engineer specializing in
        image generation. You enhance user prompts by adding
        details related to lighting, composition, quality,
        realism, materials, camera angles, and artistic direction.
        """,
        verbose=True,
    )
