const router = require("express").Router();

router.get("/notes", function(req, res) {
   store.getNotes().then(function(notes) {
      return res.json(notes);
   }).catch(function(error) {
      return;
   })
})
