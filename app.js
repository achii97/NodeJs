const express = require("express");

const app = express();

const loginRouter = require("./api/student/signup");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


// apna link generate kro mongo atlas pr ja kr
mongoose.connect(
  "mongodb+srv://zkmalik:zawiarmalik@zkay.0awwz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
mongoose.connection.on("error", (err) => {
  console.log("error");
});
mongoose.connection.on("connected", (con) => {
  console.log("connected");
});
// app.use((req, res, next) => {
//   res.status(200).json({
//     message: "Working",
//   });
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/login", loginRouter);
app.use((req, res) => {
  res.status(404).json({
    error: "No such url found, Please cross check",
  });
});
module.exports = app;
