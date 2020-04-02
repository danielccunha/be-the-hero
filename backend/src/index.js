"use strict";

const cors = require("cors");
const chalk = require("chalk");
const express = require("express");
const { errors } = require("celebrate");

const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(port, () => console.log(`Listening on port ${chalk.green(port)}`));
