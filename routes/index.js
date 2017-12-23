import express from 'express';
const dailyApp = express.Router();

dailyApp.route('/')
  .get((req, res) => {
    res.send('Hello World!');
  });

export default dailyApp;
