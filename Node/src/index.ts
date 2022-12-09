import { hey } from './helper.js';

import yo from './helper.cjs';

import { read } from 'fs';

import connectToDB from './db/db.js';

console.log(hey);
console.log(yo);
connectToDB();