// const fs = require('fs');
const notes = require('./notes');

const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    const note = {
      title: argv.title,
      body: argv.body,
    };
    notes.addNote(note);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'read',
  describe: 'Reading a note',
  builder: {
    title: {
      demandOption: true,
      describe: 'Note Title',
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'List Notes',
  handler() {
    notes.listNotes();
  },
});

yargs.parse();
// console.log(yargs.argv);
