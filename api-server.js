const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/add-count", (req, res) => {
  res.send('1');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
