from crewai import Crew
from crewai import Task

from agents.prompt_engineer import (
    create_prompt_engineer_agent,
)

from agents.style_expert import (
    create_style_expert_agent,
)

from agents.image_generator import (
    create_image_generator_agent,
)


def run_image_crew(user_prompt: str):

    prompt_agent = create_prompt_engineer_agent()

    style_agent = create_style_expert_agent()

    image_agent = create_image_generator_agent()

    prompt_task = Task(
        description=f"""
        Enhance this image prompt.

        User Prompt:
        {user_prompt}

        Return only the enhanced prompt.
        """,
        expected_output="Detailed enhanced prompt.",
        agent=prompt_agent,
    )

    style_task = Task(
        description=f"""
        Analyze the user prompt:

        {user_prompt}

        Select ONLY one style from:

        Realistic
        Anime
        Cartoon
        3D Render
        Cinematic
        Interior Design

        Return only the style name.
        """,
        expected_output="Single style name.",
        agent=style_agent,
    )

    image_task = Task(
        description="""
        Create a final image-generation prompt.

        Combine:
        - Enhanced Prompt
        - Selected Style

        Return only the final prompt.
        """,
        expected_output="Final image generation prompt.",
        agent=image_agent,
        context=[
            prompt_task,
            style_task,
        ],
    )

    crew = Crew(
        agents=[
            prompt_agent,
            style_agent,
            image_agent,
        ],
        tasks=[
            prompt_task,
            style_task,
            image_task,
        ],
        verbose=True,
    )

    crew.kickoff()

    return {
        "enhanced_prompt": str(prompt_task.output),
        "selected_style": str(style_task.output),
        "final_prompt": str(image_task.output),
    }
