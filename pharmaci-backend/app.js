var mysql = require("mysql2");
var express = require("express");
var app = express();
var cors = require("cors");
const PORT = process.env.PORT || 3000;
app.use(cors());
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Laloni1993!",
  database: "pharmaci",
});

app.get("/", function (req, res) {
  var q = "SELECT (CONCAT(prefix, root, suffix)) AS word FROM words";
  connection.query(q, function (error, results) {
    if (error) throw error;
    var word = results;
    var words = word[Math.floor(Math.random() * word.length)];
    console.log(words.word);
    res.json({ word: words.word });
  });
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
