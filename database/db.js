const mongoose = require("mongoose");

async function connect() {
	try {
		await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
		console.log("Database Connected Successfully");
	} catch (err) {
		console.log("Error Connecting To Database");
	}
}

module.exports = { connect };
