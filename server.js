const express = require("express");
const app = express();
const path = require("path");

app.listen(3000, () => {
  console.log("3000 server start");
});

app.use(express.static(path.join(__dirname, "/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});
