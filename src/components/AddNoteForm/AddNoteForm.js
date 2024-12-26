import React, { useState } from 'react';
import './AddNoteForm.css'; // Import specific styles for AddNoteForm

function AddNoteForm({ onAddNote }) {
  const [note, setNote] = useState("");

  const handleAdd = () => {
    onAddNote(note);
    setNote(""); // Clear the input after adding
  };

  return (
    <section className="form-section">
      <input
        type="text"
        placeholder="Write something you're grateful for..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="input-field"
      />
      <button
        onClick={handleAdd}
        className="add-button"
      >
        Add to Jar
      </button>
    </section>
  );
}

export default AddNoteForm;
