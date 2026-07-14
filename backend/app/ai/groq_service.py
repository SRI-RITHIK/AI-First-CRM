import os
import json
from datetime import datetime

from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def extract_interaction(user_input: str):

    today = datetime.now().strftime("%Y-%m-%d")

    prompt = f"""
You are an AI assistant for a Healthcare CRM.

Today's date is {today}.

Extract the following information from the user's text.

Return ONLY a valid JSON object.

Use exactly this format:

{{
    "hcp_name": "",
    "hospital": "",
    "speciality": "",
    "interaction_type": "",
    "interaction_date": "",
    "notes": ""
}}

Rules:

1. interaction_type MUST be ONLY one of:
- Meeting
- Phone
- Virtual
- Discussion

2. If the user says "today", return:
{today}

3. If the user gives a date, convert it to YYYY-MM-DD.

4. speciality should contain only the doctor's speciality.

5. notes should contain only the discussion summary.

6. Return ONLY JSON.

User Input:

{user_input}
"""

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are a JSON extraction assistant. Always return valid JSON only."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0,
        response_format={"type": "json_object"}
    )

    result = completion.choices[0].message.content

    print("Groq Response:")
    print(result)

    try:
        return json.loads(result)
    except json.JSONDecodeError:
        return {
            "hcp_name": "",
            "hospital": "",
            "speciality": "",
            "interaction_type": "",
            "interaction_date": "",
            "notes": result
        }