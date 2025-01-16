const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json({ message: "This is home page" });
});

app.get("/library", (req, res) => {
  res.json({ message: "Get All the Library" });
});

app.get("/library/:id", (req, res) => {
  res.json({ message: `Get Library with ID ${req.params.id}` });
});

app.post("/library/", (req, res) => {
  res.json({ message: `Create new Library` });
});

app.put("/users/:id", (req, res) => {
  res.json({ message: `Update Library with ID ${req.params.id}` });
});

app.delete("/users/:id", (req, res) => {
  res.json({ message: `Delete Library with ID ${req.params.id}` });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});