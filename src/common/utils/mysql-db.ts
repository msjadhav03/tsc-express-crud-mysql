import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

export const db = knex({
  client: process.env.CLIENT_NAME,
  connection: {
    host: process.env.HOST,
    port: 3306,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
  },
});
