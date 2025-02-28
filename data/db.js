// getting-started.js
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.DB_URL
// const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

main().then(()=>{
       console.log("connected");
  })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongoURL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = main;