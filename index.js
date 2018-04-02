const express = require("express");
const app = express(); // creates a new application

app.get("/", (req, res) => { // '/' is the route portion of the router
  // watching for http request with method get
  res.send({ hi: "there" });
});

app.get("/konos", (req, res) => {
  res.send({ name: "konos" });
});


const PORT = process.env.PORT || 5000 // dynamic port binding
app.listen(PORT); // instracts node to listen for traffic in port 5000
