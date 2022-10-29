const mongoose = require("mongoose");

const connectionParams = {
  useNewUrlParser: true,
  //useCreateIndex: true,
  // useFindAndModify:false,
  useUnifiedTopology: true,
};

mongoose
  .connect(
    "mongodb+srv://mudassir567:muddu123123@cluster0.empwurp.mongodb.net/test",
    connectionParams
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
