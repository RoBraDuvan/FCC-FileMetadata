const express = require ("express");
const routerUpload = require("../routes/routerUpload.js");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
const public = process.cwd() + "/public";
const views = process.cwd() + "/views/index.html";

//-------------------------------------------------
app.use("/api/fileanalyse/", routerUpload);
app.use("/public", express.static(public));

//-------------------------------------------------
app.get("/", (req, res)=>{
  res.sendFile(views);
});

//-------------------------------------------------
const init = () => {
  app.listen(PORT, () => {
    console.log(`Server init: http://localhost${PORT}`)
  })
};

//-------------------------------------------------
module.exports = {init};