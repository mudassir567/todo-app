const express = require("express");
port = process.env.port || 8085;
const  todosRoute= require('./todo_route')
const app = express();

const cors = require("cors");

require('./db');

 app.use(cors());

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//addtweet = require("./controlllers/Tweets");
// user = require("./controlllers/User");

app.use("/todos",todosRoute );


app.get("/", (req, res) => {
  res.send("todo list");
  
});



app.listen(port, () => {
  console.log(`the server runs on ${port}`);
});
