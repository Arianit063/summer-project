const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const taskList = [];

app.post("/task", (req, res) => {
  console.log("POST");
  if (req.body !== null) {
    const task = req.body.task;
    taskList.push(task);
    res.send(taskList);
  }
});

app.get("/task", (req, res) => {
  res.send(taskList);
});
app.get("/", (req, res) => {
  res.render("./index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
