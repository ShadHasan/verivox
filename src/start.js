const express = require("express");
const bodyParser = require("body-parser");
const products = require("./client/fetch");
const { calculate } = require("./lib/calculateConsumptionCost");

const app = express();
const port = 8888;

app.use(express.json());

app.get("/comparetariff", (req, res) => {
	const result = calculate(req.body, products);
	res.set("Content-Type", "application/json");
	res.set("Accept", "application/json");
	res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`)
});
