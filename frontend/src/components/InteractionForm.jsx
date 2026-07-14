import { useState } from "react";

function InteractionForm({ onAdd }) {
  const [hcpName, setHcpName] = useState("");
  const [hospital, setHospital] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [interactionType, setInteractionType] = useState("");
  const [interactionDate, setInteractionDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInteraction = {
      hcp_name: hcpName,
      hospital: hospital,
      speciality: speciality,
      interaction_type: interactionType,
      interaction_date: interactionDate,
      notes: notes,
    };

    await onAdd(newInteraction);

    setHcpName("");
    setHospital("");
    setSpeciality("");
    setInteractionType("");
    setInteractionDate("");
    setNotes("");
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    padding: "24px",
    maxWidth: "900px",
    margin: "0 auto 24px auto",
  };

  const formStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px 20px",
  };

  const groupStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const fullWidthStyle = {
    ...groupStyle,
    gridColumn: "1 / -1",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <h2>New Interaction</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={groupStyle}>
          <label>HCP Name</label>
          <input
            style={inputStyle}
            value={hcpName}
            onChange={(e) => setHcpName(e.target.value)}
          />
        </div>

        <div style={groupStyle}>
          <label>Hospital</label>
          <input
            style={inputStyle}
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          />
        </div>

        <div style={groupStyle}>
          <label>Speciality</label>
          <input
            style={inputStyle}
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
          />
        </div>

        <div style={groupStyle}>
          <label>Interaction Type</label>
          <select
            style={inputStyle}
            value={interactionType}
            onChange={(e) => setInteractionType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="In-person">In-person</option>
            <option value="Virtual">Virtual</option>
            <option value="Phone">Phone</option>
          </select>
        </div>

        <div style={groupStyle}>
          <label>Interaction Date</label>
          <input
            type="date"
            style={inputStyle}
            value={interactionDate}
            onChange={(e) => setInteractionDate(e.target.value)}
          />
        </div>

        <div style={fullWidthStyle}>
          <label>Notes</label>
          <textarea
            rows="4"
            style={inputStyle}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div style={fullWidthStyle}>
          <button type="submit" style={buttonStyle}>
            Save Interaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default InteractionForm;