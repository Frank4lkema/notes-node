
const fs = require('fs');;
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const titleOptions = {
      describe: 'Title of Note',
      demand: true,
      alias: 't'
    };

const bodyOptions = {
   describe: 'Body of the note',
    demand:true,
    alias: 'b'
};

const argv = yargs
  .command('add','Add a new note',{
    title: titleOptions,
    body:bodyOptions
  })
  .command('list','List all Notes')
  .command('read', 'Read a note',{
    title: titleOptions
  })
  .command('remove','remove note from the list',{
    title:titleOptions
  })
  .help()
  .argv;
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
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note)=> notes.logNote(note));
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

