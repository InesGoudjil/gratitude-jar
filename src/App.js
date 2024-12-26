import React, { useState } from 'react';
import Header from './components/Header/Header';
import AddNoteForm from './components/AddNoteForm/AddNoteForm';
import NotesDisplay from './components/NotesDisplay/NotesDisplay';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    if (note.trim()) {
      setNotes([...notes, note]);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <AddNoteForm onAddNote={addNote} />
        <NotesDisplay notes={notes} />
      </main>
    </div>
  );
}

export default App;
