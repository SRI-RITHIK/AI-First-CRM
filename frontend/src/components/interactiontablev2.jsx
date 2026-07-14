import axios from "axios";

function InteractionTableV2({ interactions }) {

  const deleteInteraction = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this interaction?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://127.0.0.1:8000/interactions/${id}`
      );

      alert("Interaction Deleted");

      // Refresh the page to reload the interaction list
      window.location.reload();

    } catch (error) {

      console.error("Delete Error:", error);

      alert("Delete Failed");

    }

  };

  return (
    <div className="card">

      <h2>Interaction History</h2>

      <table>

        <thead>
          <tr>
            <th>HCP Name</th>
            <th>Hospital</th>
            <th>Speciality</th>
            <th>Type</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {interactions.length === 0 ? (

            <tr>
              <td colSpan="6">
                No interactions found.
              </td>
            </tr>

          ) : (

            interactions.map((interaction) => (

              <tr key={interaction.id}>

                <td>{interaction.hcp_name}</td>
                <td>{interaction.hospital}</td>
                <td>{interaction.speciality}</td>
                <td>{interaction.interaction_type}</td>
                <td>{interaction.interaction_date}</td>

                <td>
                  <button
                    onClick={() => deleteInteraction(interaction.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default InteractionTableV2;