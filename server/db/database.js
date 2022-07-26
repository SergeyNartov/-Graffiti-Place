require('dotenv').config();

console.log(process.env.DB_USER);

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: 'localhost',
    dialect: 'postgres',
  }
};
