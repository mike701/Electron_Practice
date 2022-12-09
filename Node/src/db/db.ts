const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
export default async function connectToDB(){
  const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}