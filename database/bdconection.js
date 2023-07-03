const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.URI;

const init = () => {
  
  mongoose.connect(URI)
    .then(()=>console.log("Database connected"))
    .catch (e => console.log(e));

};


module.exports = { init };