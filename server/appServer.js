const express = require ("express");
const routerUpload = require("../routes/routerUpload");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

//-----------------------------------------------------
app.use("/api/uploads/", routerUpload);

//-----------------------------------------------------
app.get("/", (req, res)=>{
  res.send("Hello world");
});

//-----------------------------------------------------
const init = () => {
  app.listen(PORT, ()=>{
    console.log(`Servidor iniciado ${PORT}`);
  });
};

//-----------------------------------------------------
module.exports = {init};