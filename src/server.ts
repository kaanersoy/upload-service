import express from 'express';
import dotenv from 'dotenv';
import uploadRoute from './routes/uploadRoute';

function init() {
  dotenv.config();

  const app = express();

  app.use('/upload', uploadRoute);

  app.use('/client', express.static('client'));

  const port = process.env.PORT || 3000;

  app.listen(port, () => console.log(`App is running on: http://localhost:${port}`));
}

init();
