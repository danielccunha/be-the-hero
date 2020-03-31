"use strict";

const chalk = require("chalk");
const express = require("express");

const app = express();
const port = process.env.PORT || 3333;

app.get("/", (req, res) => res.json({ foo: "bar" }));

app.listen(port, () => console.log(`Listening on port ${chalk.green(port)}`));
