const { Sequelize } = require('sequelize');
require('dotenv').config();

const conn = process.env.DB_STRING; // Assuming DB_STRING holds your PostgreSQL connection string

const sequelize = new Sequelize(conn, {
  logging: false // Optional: Disable Sequelize logging
});

// Define your user model using Sequelize
const User = sequelize.define('User', {
  username: Sequelize.STRING,
  hash: Sequelize.STRING,
  salt: Sequelize.STRING
});

// Other models using Sequelize...

// Export the Sequelize instance
module.exports = sequelize;
