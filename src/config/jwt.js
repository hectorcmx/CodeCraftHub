const { JWT_SECRET, JWT_EXPIRATION } = require('./env');

module.exports = {
    secret: JWT_SECRET,
    expiration: JWT_EXPIRATION,
};