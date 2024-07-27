const express = require("express");
const app = express(); // generates a new running express app

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);
