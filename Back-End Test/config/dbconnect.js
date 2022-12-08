const { Client } = require("pg");

const client = new Client({
  host: "postgres-test.crnhjab34gxw.eu-west-3.rds.amazonaws.com",
  user: "postgres",
  port: 5432,
  password: "SMImaster2020",
  database: "postgres",
});

module.exports = client