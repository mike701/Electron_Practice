// import  { Sequelize } from 'sequelize';

// // Option 1: Passing a connection URI
// export default async function connectToDB(){
//   const sequelize = new Sequelize('postgres://user:mabebe@egmail.com:5432/cheeses_db') // Example for postgres
//   console.log("authentication attempt");
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

import { exec,spawn } from "child_process";

export default function scriptForDB() {
  try {
    exec('psql -d library -f ./src/db/db.sql', (err, stderr, stdout) => { 
      if (err) {
        console.error("error creating db and populating with data", err);
        return;
      }
      if (stderr) {
        console.error("error creating db and populating with data", stderr);
        return;
      }
      console.log(stdout);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}