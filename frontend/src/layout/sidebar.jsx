function Sidebar() {
    const sidebarStyle = {
      width: "240px",
      height: "100vh",
      background: "#111827",
      color: "white",
      padding: "25px",
      position: "fixed",
      left: 0,
      top: 0,
      boxSizing: "border-box",
    };
  
    const logoStyle = {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "40px",
      color: "#6366f1",
    };
  
    const menuStyle = {
      listStyle: "none",
      padding: 0,
    };
  
    const itemStyle = {
      padding: "14px 10px",
      marginBottom: "10px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "0.3s",
      background: "#1f2937",
    };
  
    return (
      <div style={sidebarStyle}>
        <div style={logoStyle}>AI CRM</div>
  
        <ul style={menuStyle}>
          <li style={itemStyle}>🏠 Dashboard</li>
          <li style={itemStyle}>👨‍⚕️ Interactions</li>
          <li style={itemStyle}>📊 Analytics</li>
          <li style={itemStyle}>🤖 AI Summary</li>
          <li style={itemStyle}>⚙ Settings</li>
        </ul>
      </div>
    );
  }
  
  export default Sidebar;