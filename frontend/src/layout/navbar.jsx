function Navbar() {
    const navStyle = {
      height: "70px",
      background: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    };
  
    return (
      <div style={navStyle}>
        <h2>AI-First CRM Dashboard</h2>
  
        <div>
          👤 Admin
        </div>
      </div>
    );
  }
  
  export default Navbar;