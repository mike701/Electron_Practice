import { sqlite3 } from "sqlite3";

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const location = '/usr/local/var/postgres/social.db';

let db: any, dbAll, dbRun;

function init() {
    const dirName = require('path').dirname(location);
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName, { recursive: true });
    }
    

  return new Promise<void>((acc, rej) => {
    db = new sqlite3.Database(location, sqlite3.OPEN_READWRITE, (err:Error) => {
      if (err) return rej(err);

      if (process.env.NODE_ENV !== 'test')
        console.log(`Using sqlite database at ${location}`);
      fs.readFile(`${__dirname}/seed.sql`, "utf8", (err: Error, query: string) => {
        if (err) return err
        else {
          const queryArray: string[] = query.split('\n');
          db.serialize(() => {
            queryArray.map((q: string, index: number) => {
              if (index  < 4) console.log("query that is currently running",q);
              db.run(q, (error: Error, result: any) => {
                if (err) return rej("error running sql query" + error);
                acc()
              });
            });
            // db.all('SELECT * FROM USERS', (err: Error, rows: any) => {
            //   if (err) console.log(err);
            //   console.log(rows);
            //   acc();
            // });
          })
        }
      });
    });
  });
}
function seed() {
  let db = new sqlite3.Database(location, sqlite3.OPEN_READWRITE, (err: Error) => {
    
    db.serialize(() => {
      db.all("SELECT * FROM USERS", (err: Error) => {
        if (err) console.log(err);
      });
    });
  });
}

async function teardown() {
    return new Promise<void>((acc: any, rej: any) => {
        db.close((err: Error) => {
            if (err) rej(err);
            else acc();
        });
    });
}

async function getItems() {
  
  return new Promise((acc, rej) => {
    let db = new sqlite3.Database(location, sqlite3.OPEN_READWRITE, (err: Error) => {
    
      db.serialize(() => {
        db.all("SELECT * FROM USERS", (err: Error, rows: { id: number, name: string, birthyear: number, friends: string }[]) => {
          console.log(rows);
          if (err) console.log(err);
          acc(rows.map((row: {id: number, name: string, birthyear: number, friends: string}) =>
            Object.assign({}, row, {
              ...row
            }),
          ));
        });
      });
    });
  });
}

async function getItem(id: number) {
    return new Promise((acc, rej) => {
        db.all('SELECT * FROM Users WHERE id=?', [id], (err: Error, rows: any) => {
            if (err) return rej(err);
            acc(
                rows.map((item: any) =>
                    Object.assign({}, item, {
                        friends: item.friends === 1,
                    }),
                )[0],
            );
        });
    });
}

async function storeItem(item: { name: string, birthyear: number, friends: string }) {
  console.log("store items", item.name, item.birthyear, item.friends);
    return new Promise<void>((acc, rej) => {
        db.run(
            'INSERT INTO Users (name, birthYear, friends) VALUES (?, ?, ?)',
            [item.name, item.birthyear, item.friends ? 1 : 0],
            (err: Error) => {
                if (err) return rej(err);
                acc();
            },
        );
    });
}

async function updateItem(id: number, item: { name: String, birthyear: Number, friends: String }) {
  console.log("update item: ", id, item.name, item.birthyear, item.friends);
  const Keys = Object.keys(item);
  const Vals = Object.values(item);

  return new Promise<void>((acc, rej) => {
      db.run(
          `UPDATE Users SET ${Keys.map((key, index)=>{return `${key} = '${Vals[index]}'${index === Keys.length-1? '':','}`}).join(' ')} WHERE id = ?`,
          [id],
          (err: Error) => {
              if (err) return rej(err);
              acc();
          },
      );
  });
} 

async function removeItem(id: number) {
  console.log("remove item");
    return new Promise<void>((acc, rej) => {
        db.run('DELETE FROM Users WHERE id = ?', [id], (err: Error) => {
            if (err) return rej(err);
            acc();
        });
    });
}

const newLocal = {
  init,
  seed,
  teardown,
  getItems,
  getItem,
  storeItem,
  updateItem,
  removeItem,
};
module.exports = newLocal;
