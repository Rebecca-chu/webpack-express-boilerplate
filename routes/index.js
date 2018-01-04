import express from 'express';
import path from 'path';

const dailyApp = express.Router();

dailyApp.use(express.static(path.join(__dirname, '/../dist')));

export default dailyApp;
