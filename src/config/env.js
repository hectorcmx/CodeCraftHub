require('dotenv').config();

const { DB_URI, JWT_SECRET, JWT_EXPIRATION } = process.env;

module.exports = {
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRATION,
};