import axios from "axios";

function InteractionFormV2({
  formData,
  setFormData,
  loadInteractions
}) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const saveInteraction = async () => {

    try {

      await axios.post(
        "http://127.0.0.1:8000/interactions/",
        formData
      );
      
      await loadInteractions();
      
      alert("Interaction Saved");
      
      setFormData({
        hcp_name: "",
        hospital: "",
        speciality: "",
        interaction_type: "",
        interaction_date: "",
        notes: ""
      });

    } catch (err) {

      console.error(err);

      alert("Save Failed");

    }

  };

  return (

    <div className="card">

      <h2>Log HCP Interaction</h2>

      <input
        name="hcp_name"
        placeholder="HCP Name"
        value={formData.hcp_name}
        onChange={handleChange}
      />

      <input
        name="hospital"
        placeholder="Hospital"
        value={formData.hospital}
        onChange={handleChange}
      />

      <input
        name="speciality"
        placeholder="Speciality"
        value={formData.speciality}
        onChange={handleChange}
      />

      <select
        name="interaction_type"
        value={formData.interaction_type}
        onChange={handleChange}
      >
        <option value="">Select Type</option>
        <option value="Meeting">Meeting</option>
        <option value="Phone">Phone</option>
        <option value="Virtual">Virtual</option>
        <option value="Discussion">Discussion</option>
      </select>

      <input
        type="date"
        name="interaction_date"
        value={formData.interaction_date}
        onChange={handleChange}
      />

      <textarea
        rows="6"
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <button onClick={saveInteraction}>
        Save Interaction
      </button>

    </div>

  );
}

export default InteractionFormV2;