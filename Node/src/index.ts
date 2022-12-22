import { hey } from './helper.js';

import yo from './helper.cjs';
import scriptForDB from './db/db.js';

// import connectToDB from './db/db.ts';
// connectToDB();
import express from 'express';
const PORT = 3001;
const app = express();
import cors from "cors";

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.get('/main_window', async (req,res) => {
  console.log('run db actions etc... for page', req.body);
  const data = await scriptForDB();
  // console.log("finale",typeof data, data);
  res.json(data);
});

app.listen(`${PORT}`, () => { console.log('listening to the sweet sounds of port', PORT)});
console.log(hey);
console.log(yo);

// scriptForDB();
