import { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/crm.css";

import InteractionFormV2 from "../components/InteractionFormV2";
import AIChat from "../components/AIChat";
import InteractionTableV2 from "../components/InteractionTableV2";

function DashboardV2() {

  const [formData, setFormData] = useState({
    hcp_name: "",
    hospital: "",
    speciality: "",
    interaction_type: "",
    interaction_date: "",
    notes: "",
  });

  const [interactions, setInteractions] = useState([]);

  const loadInteractions = async () => {
    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/interactions/"
      );

      setInteractions(response.data);

    } catch (error) {

      console.error("Error loading interactions:", error);

    }
  };

  useEffect(() => {
    loadInteractions();
  }, []);

  // Debug
  console.log("loadInteractions =", loadInteractions);

  return (
    <div className="crm-container">

      <header className="crm-header">
        <h1>AI-First CRM</h1>
        <p>Healthcare Professional Interaction Assistant</p>
      </header>

      <div className="top-section">

        <div className="left-panel">
          <InteractionFormV2
            formData={formData}
            setFormData={setFormData}
            loadInteractions={loadInteractions}
          />
        </div>

        <div className="right-panel">
          <AIChat
            setFormData={setFormData}
          />
        </div>

      </div>

      <div className="bottom-section">

        <InteractionTableV2
          interactions={interactions}
        />

      </div>

    </div>
  );
}

export default DashboardV2;