const express = require("express");
const path = require("path");
const customers = require("./public/assets/customers");
const waitList = require("./public/assets/waitList");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/", (req, res) => res.send("Welcome to the home page"));

app.get("/resrve", (req, res) => res.send("How can I help you?"));

// app.get("/resrve", (req, res) =>
//   res.sendFile(path.join(__dirname, "resrve.html"))
// );

app.listen(PORT, () =>
  console.log(`App listening on PORT http://localhost:${PORT}`)
);
// -----------Dobbs-------------

// -----------Dobbs END------------
// -----------Rachel---------------

// -----------Rachel END---------------
// -----------Duncan----------------

// -----------Duncan END----------------
// -----------Anne------------------

// -----------Anne END------------------
