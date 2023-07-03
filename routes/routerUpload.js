const express = require("express");
const {} = require("../controller/ctrlUpload.js");

const routerUpload = express.Router();

routerUpload.use(express.json());
routerUpload.use(express.urlencoded({extended: true}));

//-----------------------------------------------------
routerUpload.get("/", (req, res)=>{
  res.json({
    "message": "Welcome to Upload"
  })
});

//-----------------------------------------------------
routerUpload.post("/", (req, res)=>{

});

//-----------------------------------------------------
routerUpload.put("/", (req, res)=>{

});

//-----------------------------------------------------
routerUpload.delete("/", (req, res)=>{

});

//-----------------------------------------------------
module.exports = routerUpload;