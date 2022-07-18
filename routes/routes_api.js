const router = require("express").Router();
const store = require("../db/store.js");

// GET
router.get("/notes", function(req, res) {
   store.getNotes().then(function(notes) {
      return res.json(notes);
   }).catch(function(error) {
      return error;
   })
});

// POST
router.post("/notes", 
   function(request, response) {
      store.addNote(request.body)
         .then(function(note) {
            return response.json(note)
         })
         .catch(function(error) {
            return response.status
         })
   }
);
