const express = require("express");
const multer = require("multer");


const routerUpload = express.Router();
const upload = multer({dest: "./upload"})


routerUpload.use(express.json());
routerUpload.use(express.urlencoded({extended: true}));


//-------------------------------------------------
routerUpload.get("/", (req, res)=>{
  console.log();
  res.json({
    "message": "Welcome to Upload"
  });
});


//--------------------------------------------------
routerUpload.post("/", upload.single("upfile"),(req, res, next)=>{
  const archivo = req.file;
  res.json({
    "name" : archivo.originalname,
    "type": archivo.mimetype,
    "size": archivo.size
  });
  next();
});

//--------------------------------------------------
routerUpload.put("/", (req, res)=>{

});

//-------------------------------------------------
routerUpload.delete("/", (req, res)=>{

});

//-------------------------------------------------
module.exports = routerUpload;