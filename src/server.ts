const express = require("express");
import axios from "axios";

const app = express();
let nonce = 0;
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
	console.log(`Received a ${req.method} request on ${req.url} with payload: `, req.body);
	next();
});

// We're just spoofing a nonce here as we're not set up to retrieve it from the node just yet.
app.get("/nonce/:id", (req, res) => {
	const id = req.params.id;
	nonce++;
	res.json({ nonce });
});


// This will submit any payload to the node tx submission endpoint.
app.post("/", async (req, res) => {
	try {
		const payload = req.body;
		// Here we print out the finished payload object - we can scoop this and submit it manually or run the rest of this function and it'll be submitted to the node
		console.log(payload);
		const base_url = "http://127.0.0.1:26657/broadcast_tx_commit";
		// request.payload.nonce = Math.random()
		const payloadString = Buffer.from(JSON.stringify(payload)).toString("hex");
		await axios.get(`${base_url}?tx="${payloadString}"`);
	} catch (err) {
		console.log(err);
	}
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
