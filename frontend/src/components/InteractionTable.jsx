function InteractionTable({ interactions }) {
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    padding: "24px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    borderBottom: "2px solid #ddd",
    padding: "12px",
    textAlign: "left",
    backgroundColor: "#f3f4f6",
  };

  const tdStyle = {
    borderBottom: "1px solid #eee",
    padding: "12px",
  };

  return (
    <div style={cardStyle}>
      <h2>Interaction History</h2>

      {interactions.length === 0 ? (
        <p>No interactions found.</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>HCP Name</th>
              <th style={thStyle}>Hospital</th>
              <th style={thStyle}>Speciality</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Notes</th>
            </tr>
          </thead>

          <tbody>
            {interactions.map((interaction) => (
              <tr key={interaction.id}>
                <td style={tdStyle}>{interaction.hcp_name}</td>
                <td style={tdStyle}>{interaction.hospital}</td>
                <td style={tdStyle}>{interaction.speciality}</td>
                <td style={tdStyle}>{interaction.interaction_type}</td>
                <td style={tdStyle}>{interaction.interaction_date}</td>
                <td style={tdStyle}>{interaction.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default InteractionTable;