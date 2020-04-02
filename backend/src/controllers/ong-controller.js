"use strict";

const connection = require("../database/connection");
const { generateUniqueId } = require("../utils");

module.exports.index = async (request, response) => {
  const ongs = await connection("ongs").select("*");
  return response.json(ongs);
};

module.exports.create = async (request, response) => {
  const { name, email, phone, city, uf } = request.body;
  const id = generateUniqueId();

  await connection("ongs").insert({
    id,
    name,
    email,
    phone,
    city,
    uf
  });

  return response.json({ id });
};
