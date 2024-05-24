const express = require("express");
const connectdb = require("./config/db");
require("dotenv").config();

const app = express();

const port = process.env.PORT;


app.use(express.json())
app.use(express.urlencoded({extended: false}))

connectdb();

app.use("/api/husan-art", require("./routes/husan-art-route"));

app.listen(port, () => {
  console.log("server woring on " + port);
});
