const fs = require('fs');


var fetchNotes = ()=>{
  try{
      var notesString = fs.readFileSync('notes-data.json')
      return JSON.parse(notesString);
  } catch(e){
    return [];
  }
};


var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };
  var duplicateNotes = notes.filter((note)=> note.title === title);


  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () =>{
  return fetchNotes();

};

var getNote = (title) =>{
  var notes = fetchNotes();
  var note = notes.filter((note)=> note.title === title);
  return note[0];
}

var removeNote = (title) => {
  // fetch the notes
  var notes = fetchNotes();
  // filter notes removing the one with title
  var newNotes = notes.filter((note)=> note.title != title);
  // save new notes array
  saveNotes(newNotes);

  return notes.length !== newNotes.length
}


var logNote = (note)=> {
  console.log(`Title: ${note.title}`);
  console.log("-----");
  console.log(`Body:${note.body}`);
}

module.exports = {
  addNote: addNote,
  getAll: getAll,
  getNote: getNote,
  removeNote: removeNote,
  logNote: logNote
};
