# AI-First CRM – Healthcare Professional Interaction Assistant

## Project Overview

AI-First CRM is a Healthcare Professional (HCP) Interaction Management System that uses Artificial Intelligence to convert natural language conversations into structured CRM records.

The application allows medical representatives or healthcare professionals to quickly log doctor interactions using AI, reducing manual data entry and improving productivity.

---

## Features

### AI Features

- AI-powered natural language processing
- Automatic extraction of:
  - HCP Name
  - Hospital
  - Speciality
  - Interaction Type
  - Interaction Date
  - Notes
- Automatic form filling from AI response
- Groq Llama 3.3 70B integration

---

### CRM Features

- Create new HCP interactions
- View interaction history
- Delete interactions
- Store interaction data in PostgreSQL
- Automatic refresh after saving or deleting

---

## Technology Stack

### Frontend

- React.js
- Axios
- CSS

### Backend

- FastAPI
- SQLAlchemy
- Pydantic
- Python

### Database

- PostgreSQL

### AI Model

- Groq API
- Llama 3.3 70B Versatile

---

## Project Architecture

User

↓

React Frontend

↓

Axios API Calls

↓

FastAPI Backend

↓

Groq AI (Llama 3.3 70B)

↓

Structured JSON

↓

PostgreSQL Database

↓

Interaction History

---

## Project Structure

```
AI-First-CRM
│
├── backend
│   ├── app
│   │   ├── ai
│   │   ├── api
│   │   ├── database
│   │   ├── models
│   │   ├── schemas
│   │   ├── services
│   │   └── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## API Endpoints

### AI

POST

```
/ai/extract
```

Extracts structured interaction information from natural language.

---

### Interactions

Create Interaction

```
POST /interactions/
```

Retrieve All Interactions

```
GET /interactions/
```

Delete Interaction

```
DELETE /interactions/{id}
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/AI-First-CRM.git
```

---

### 2. Backend Setup

Navigate to backend folder

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate environment

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

Start backend

```bash
uvicorn app.main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

### 3. Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Start development server

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

## Workflow

1. Enter a natural language interaction in the AI Chat.
2. AI extracts structured data.
3. CRM form is automatically filled.
4. Save the interaction.
5. Interaction is stored in PostgreSQL.
6. Interaction appears in the history table.
7. Users can delete interactions when required.

---

## Sample AI Input

```
Today I met Dr. Rajesh Kumar at Apollo Hospital.

He is a Cardiologist.

We discussed our new diabetes medicine and I shared product brochures.
```

The AI automatically extracts:

- HCP Name
- Hospital
- Speciality
- Interaction Type
- Date
- Notes

---

## Future Enhancements

- AI-based interaction update
- AI-based interaction deletion
- User authentication
- Role-based access control
- Dashboard analytics
- Search and filtering
- Export reports
- Voice input support
- Follow-up reminders
- Appointment scheduling

---

## Learning Outcomes

This project demonstrates:

- AI Integration using Large Language Models
- FastAPI REST API development
- PostgreSQL database management
- SQLAlchemy ORM
- React frontend development
- State management using React Hooks
- CRUD Operations
- API Integration using Axios

---

## Developed By

**SRIRITHIK S**
MailId:Sririthik139@gmail.com
alternative MailId:igrithiop@gmail.com

For support contact - igrithiop@gmail.com

AI-First CRM – Healthcare Professional Interaction Assistant

