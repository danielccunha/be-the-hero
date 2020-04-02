"use strict";

const chalk = require("chalk");

const app = require("./app");
const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Listening on port ${chalk.green(port)}`));
