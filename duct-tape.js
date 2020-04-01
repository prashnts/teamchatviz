import dotenv from 'dotenv'

console.log(dotenv.config())

const pgStore = require('./server/pg-store');
pgStore
  .setup()
  .then(() => {
    const { sync } = require('./server/data')
    console.log(sync.all())
  })
  .catch(err => console.error(err));


// import { sync } from './server/data'

// console.log(sync)
