// var obj = {
//   name: 'Frank'
// }


// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);



// var personString = '{"name":"Frank", "age":26}';

// var person = JSON.parse(personString);


// console.log( typeof person);
// console.log(person)

const fs = require('fs');

var originalNote = {
  title : 'Some title',
  body : 'Some body'
};

// originalnote string

var originalNoteString = JSON.stringify(originalNote);


console.log(originalNoteString);


fs.writeFileSync('notes.json',originalNoteString);


var noteString = fs.readFileSync('notes.json');
// note

var note = JSON.parse(noteString);

console.log("this works and it breaks below?");
console.log(typeof note);
console.log(note.title);
