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

app.post("/reserve", (req, res) => {
  const newCustomer = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    party: req.body.party,
    id: req.body.id,
  };
  if (customers.length >= 5) {
    res.json({ msg: "Sorry we are full, but you are on the wait list." });
    return waitList.push(newCustomer);
  } else {
    res.redirect(req.get("referer"));
    return customers.push(newCustomer);
  }
});

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
