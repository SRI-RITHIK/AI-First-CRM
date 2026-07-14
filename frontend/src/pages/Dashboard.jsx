import { useEffect, useState } from "react";

import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";

import InteractionForm from "../components/InteractionForm";
import InteractionTable from "../components/InteractionTable";

import api from "../api/api";

function Dashboard() {
  const [interactions, setInteractions] = useState([]);

  const loadInteractions = async () => {
    try {
      const response = await api.get("/interactions/");
      setInteractions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadInteractions();
  }, []);

  const addInteraction = async (interaction) => {
    try {
      await api.post("/interactions/", interaction);
      await loadInteractions();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          background: "#f3f4f6",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div style={{ padding: "30px" }}>
          <InteractionForm onAdd={addInteraction} />

          <InteractionTable interactions={interactions} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;