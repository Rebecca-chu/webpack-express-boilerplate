import express from 'express';
import dailyApp from './routes';

const app = express();

app.use(dailyApp);

app.listen(3000, () => {
  console.log('Daily app is listening on port 3000!');
});
