const express = require("express");
const main = require("./data/db");
const app = express();
const Person = require("./models/person");
const Menu = require("./models/Menu")
const bodyParser = require("body-parser");

const personRoutes = require("./routes/PersonRoutes");
const MenuRoutes = require("./routes/MenuRoutes");
app.use(bodyParser.json());
const port = 8080;

app.get("/", (req, res) => {
  res.send(`welcome to our Hotel`);
});
// Person routes
app.use('/person',personRoutes);

// Menu routes
app.use('/menu',MenuRoutes)


app.listen(port,()=>{
  console.log("port is listening");
})