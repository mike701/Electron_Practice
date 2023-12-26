import { Elysia, t } from 'elysia'
const db = require('./db');
db.init();

// import connectToDB from './db/db.ts';
// connectToDB();
const PORT = 3001;
import cors from "@elysiajs/cors";

const corsOptions ={
  origin: '*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
const app = new Elysia()
  .use(cors())
  .get('/', async () => {
  console.log('Get with no other extensions');
    return 'Sorry nothing here';
  })
  .group('/users', (app) => {
    return app
      .get('/getAll', async ({ query }) => {
        console.log('run db action to GET all users');
        return await db.getItems();
      })
      .get('/id/:id', async ({ query, params: { id } }) => {
        console.log(`run db action to GET user ${id}`);
        return await db.getItem(id);
      })
      .post('/create', async({ body }) => body, {
        body: t.Object({
          name: t.String(),
          birthyear: t.Number(),
          friends: t.String()
        }),
        afterHandle: async ({ body }) => {
          return await db.storeItem(body);
        }
      })
      .put('/update/:id', async ({ body, params: { id } }) => {
          return await db.updateItem(id, { ...body as Object});
        })
      .delete('/id/:id', async ({ query, params: { id } }) => {
        console.log(`run db action to DELETE user ${id}`);
        return await db.removeItem(id);
    })
  })
  .listen(`${PORT}`, () => {
    console.log('listening to the sweet sounds of port', PORT)
  });


const gracefulShutdown = () => {
  db.teardown()
      .catch(() => {})
      .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon

export type App = typeof app
