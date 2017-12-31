import express from 'express';
import dailyApp from './routes';
import { SERVER_PORT } from './constants';

const app = express();

app.use(dailyApp);

app.listen(SERVER_PORT, () => {
  console.log(`Daily app is listening on port ${SERVER_PORT}!`);
});
