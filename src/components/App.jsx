import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);
  function addNote(newnote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newnote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deleteNote}
            title={noteItems.title}
            content={noteItems.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;