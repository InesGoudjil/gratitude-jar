import React, { useState } from 'react';
import './NotesDisplay.css'; // Import specific styles for NotesDisplay

function NotesDisplay({ notes }) {
  const [expandedNote, setExpandedNote] = useState(null);

  const handleToggle = (index) => {
    setExpandedNote(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="notes-display">
      <h2 className="notes-title">Your Gratitude Notes</h2>
      {notes.length === 0 ? (
        <p className="empty-message">No notes yet, start adding some!</p>
      ) : (
        <ul className="notes-list">
          {notes.map((note, index) => (
            <li key={index} className="note-item">
              <div className="note-header">
                <p className="note-text">{note}</p>
                <button
                  className="toggle-button"
                  onClick={() => handleToggle(index)}
                >
                  {expandedNote === index ? 'Collapse' : 'Expand'}
                </button>
              </div>
              {expandedNote === index && (
                <div className="note-details">
                  This is your note: {note}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default NotesDisplay;
