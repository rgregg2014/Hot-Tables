const express = require("express");
const path = require("path");
const customers = require("./public/assets/customers");
const waitList = require("./public/assets/waitList");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/reserve", (req, res) =>
  res.sendFile(path.join(__dirname, "reserve.html"))
);

app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "tables.html"))
);

app.get("/api/tables", (req, res) => res.json(customers));

app.get("/api/waitlist", (req, res) => res.json(waitList));

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
