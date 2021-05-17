const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  var result = num1 + num2;
  res.send("The Addition of First num and second num is :" + " " + result);
});

app.listen(3000, function () {
  console.log("Sever Started at http://127.0.0.1:3000");
});
