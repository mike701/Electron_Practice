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

import { exec } from "child_process";

export default function scriptForDB() {
  try {
    exec('psql -d social -f ./src/db/db.sql', (err,stdout) => { 
      if (err) {
        console.error("error creating db and populating with data", err);
        return;
      }

      exec('psql -d social -f ./src/db/seed.sql', (err, stdout) => {
        if (err) {
          console.error("error creating db", err);
          return;
        }
        
        exec('psql -d social -c "SELECT * FROM users"', (err, stdout) => {
          if (err) {
            console.error("error creating db and populating with users data", err);
            return;
          }
          console.log(stdout);
          exec('psql -d social -c "SELECT * FROM posts"', (err, stdout) => {
            if (err) {
              console.error("error creating db and populating with posts data", err);
              return;
            }
          console.log(stdout);
          });
        });
      });
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}