const db = require("./database/bdconection.js");
const server =  require("./server/appServer.js");

server.init();
db.init();