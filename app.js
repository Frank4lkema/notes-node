console.log('Starting app.js');

const fs = require('fs');;
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// console.log(process.argv);

const argv = yargs.argv;
var command = argv._[0];



// console.log('Command',command);
// console.log('Yargs', argv)

if(command === 'add'){
  // console.log('adding new note');
    var note = notes.addNote(argv.title, argv.body);
    if (note === undefined){
      console.log("Sorry this title is already in use");
    } else {
      console.log("Yeah the title is saved to the database!");
      notes.logNote(note);
       }
} else if (command === 'list'){
    notes.getAll();
} else if (command === 'read'){
    var note = notes.getNote(argv.title);

    if (note){
      notes.logNote(note);
    } else {
      console.log("Note is note Found");
    }
} else if (command ===  'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message =noteRemoved ? "Note was removed" : "Note not found!";
    console.log(message);
} else {
  console.log('niet herkent');
}

