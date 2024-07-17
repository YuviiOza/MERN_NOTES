const express = require("express");
const notes = require("./Data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((note) => note._id === req.params.id);
  console.log(req.params);
  res.send(note);
});
app.listen(port, console.log(`server on ${port}`));
