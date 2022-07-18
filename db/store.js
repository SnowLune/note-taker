const util = require("util");
const fs = require("fs");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFIle);

const uuid = require("uuid/v1");

// Store class
class Store {
   read() {
      return readFile("db/db.json", "utf8");
   }

   write(note) {
      return writeFile("db/db.json", JSON.stringify(note));
   }

   getNotes() {
      return this.read().then(
         function(notes) {
            var parsedNotes = [].concat(JSON.parse(notes))
            return parsedNotes;
         }
      )
   }
}

createNote(note) {
   var {title, text} = note;

   var newNote = { title, text, id: uuid() };

   return this.getNotes()
      .then(
         function(notes) {
            return [...notes, newNote];
         }
      )
      .then(
         function(updatedNotes) {
            return this.write(updatedNotes)
         }
      )
      .then(
         function() {
            return newNote
         }
      )
}

