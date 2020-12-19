const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your Notes...';
};

const addNote = (note) => {
  const notes = loadNotes();

  const duplicateNote = notes.filter(function (singleNote) {
    return singleNote.title == note.title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: note.title,
      body: note.body,
    });

    saveNotes(notes);

    console.log(chalk.green('New Note Added'));
  } else {
    console.log(chalk.red('Title Taken'));
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('data.json', JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const notes = JSON.parse(fs.readFileSync('data.json').toString());
    return notes;
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  // console.log(title);
  const notes = loadNotes();
  const newNotes = notes.filter((note) => {
    if (note.title == title) return false;
    return true;
  });

  if (notes.length == newNotes.length)
    console.log(chalk.green('No Note Removed'));
  else console.log(chalk.red('Note Removed'));
  saveNotes(newNotes);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('Your Notes...'));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const searchedNote = notes.find((note) => {
    // console.log(chalk.inverse.red(note.title));
    // if (note.title === title);
    return note.title === title;
  });
  if (searchedNote != undefined) {
    console.log(chalk.inverse(searchedNote.title));
    console.log(searchedNote.body);
  } else console.log(chalk.red('Note not found'));
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
