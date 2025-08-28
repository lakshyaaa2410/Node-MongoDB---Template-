const express = require("express");
const DB = require("./database/db");
require("dotenv").config();

const app = express();
DB.connect();

app.listen(process.env.PORT, function (res) {
	console.log(`Server Started On Port ${process.env.PORT}`);
});
