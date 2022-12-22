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
import { pipeline } from "vasync";

export default function scriptForDB() {
  let pipedFuncs = run();
  console.log(pipedFuncs)
  return pipedFuncs;
}

async function run() {    
  let data = [];
  await pipeline({
      args: data,
      funcs: [
        function createDB(arg, done) {
          exec('psql -d social -f ./src/db/db.sql',(err) => {
            if (err) {
              done("error creating db and populating with data", err);
              return;
            } else {
              done()
            }
          });
        },
        function populateDBWithSeedData(arg, done) {
          exec('psql -d social -f ./src/db/seed.sql', (err) => {
            if (err) {
              done("error creating db", err);
              return;
            }
            done();
          });
        },

        function findAllUsers(arg, done) {
          exec('psql -d social -c "SELECT * FROM users"', (err, stdout) => {
            if (err) {
              done("error creating db and populating with users data", err);
              return;
            }
            arg.data = [...arg.data, stdout];
            done();
          });
        },
        function findAllPosts(arg, done) {
          exec('psql -d social -c "SELECT * FROM posts"', (err, stdout) => {
            if (err) {
             done("error creating db and populating with posts data", err);
              return;
            }
            arg.data = [...arg,data,stdout];
            done(null, arg.data);
          });
        }
      ]
    }, (err, success) => {
      if (err) console.error(err);
      else if (success) {
        console.log(success);
        return success;
      }
  });
}