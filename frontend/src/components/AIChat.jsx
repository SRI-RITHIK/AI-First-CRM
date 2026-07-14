import { useState } from "react";
import axios from "axios";

function AIChat({ setFormData }) {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAI = async () => {

    if (!message.trim()) return;

    setLoading(true);

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/ai/extract",
        {
          message: message
        }
      );

      setFormData(response.data);

    } catch (error) {
      console.error(error);
      alert("AI Generation Failed");
    }

    setLoading(false);
  };

  return (
    <div className="card">

      <h2>🤖 AI Assistant</h2>

      <div className="chat-box">

        <p>
          Describe your interaction with the doctor.
        </p>

      </div>

      <textarea
        rows="8"
        placeholder="Example:
Met Dr. Rithi today at CBE Hospital.
Discussed diabetes medicine.
Shared brochure."
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />

      <button
        onClick={generateAI}
      >

        {loading ? "Generating..." : "Generate AI Summary"}

      </button>

    </div>
  );
}

export default AIChat;