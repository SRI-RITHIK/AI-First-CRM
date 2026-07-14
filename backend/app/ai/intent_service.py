import os
import json
from datetime import datetime

from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def detect_intent(user_input: str):

    today = datetime.now().strftime("%Y-%m-%d")

    prompt = f"""
You are an AI assistant for a Healthcare CRM.

Today's date is {today}.

Your job is to identify the user's intent.

Possible intents are:

CREATE
UPDATE
DELETE
SHOW

Return ONLY valid JSON.

For CREATE:

{{
    "intent":"CREATE",
    "data":{{
        "hcp_name":"",
        "hospital":"",
        "speciality":"",
        "interaction_type":"",
        "interaction_date":"",
        "notes":""
    }}
}}

For UPDATE:

{{
    "intent":"UPDATE",
    "doctor":"",
    "updates":{{
        "hospital":"",
        "speciality":"",
        "interaction_type":"",
        "interaction_date":"",
        "notes":""
    }}
}}

For DELETE:

{{
    "intent":"DELETE",
    "doctor":""
}}

For SHOW:

{{
    "intent":"SHOW"
}}

Rules:

- Return ONLY JSON.
- No markdown.
- No explanation.
- interaction_type must be one of:
Meeting
Phone
Virtual
Discussion
- Convert dates to YYYY-MM-DD.
- If user says today use {today}.

User:

{user_input}
"""

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are a JSON API. Return only JSON."
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

    print(result)

    return json.loads(result)