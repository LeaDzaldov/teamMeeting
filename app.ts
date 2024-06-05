// const express = require('express');
// const app = express();
// const cors = require('cors');
// const { MongoClient } = require('mongodb');
// app.use(function (req, res, next) {
//     console.log('Someone entered to help in time: ', Date.now() +'url' +req.url);
//     next();
//   });
//   const url = 'mongodb://localhost:27017/';
// const client = new MongoClient(url);
// const dbName = 'myProject';
// async function main() {
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const business = db.collection('business');
//   const meeting = db.collection('meeting');
//   const service = db.collection('service');
//   const users = db.collection('users');
// }

// db.business.insert("name"="greg", "description"=`מסעדת ריקוטה הינה מסעדה חלבית בירושלים המציגה בפניכם חוויה איטלקית באווירה פסטורלית,
//  אל מול נוף ההרים של ירושלים.
//   מסעדת ריקוטה מתאימה למשפחות ולמטיילים המחפשים אחר מסעדות חלביות בירושלים. 
   
//   מגוון מנות חלביות ייחודיות כגון: פסטות, פיצות איטלקיות , פוקצ'ות חמות ועוד מגוון רחב של אוכל חלבי משובח.` 
//   ,"address"="קרית המדע 3, ירושלים", "phone" = "02-587-0222","hours"="10:00-23:00")
//   db.meeting.insert("time","location,")
// import mongoose from "mongoose";
// mongoose.set("strictQuery", false);
// import dotenv from 'dotenv';
// dotenv.config()
// const DATABASE_URL = process.env.DATABASE_URL
// const mongoDB = DATABASE_URL;

// main().catch((err) => console.log(err));
// async function main() {
//     await mongoose.connect(mongoDB || '');
// }

import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
const port = 3000
const app = express();

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
}).on('error', function (err) { console.log("Error occurred, server can't start", err); })

