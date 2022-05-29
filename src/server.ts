/* istanbul ignore file */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import uploadRoute from './routes/uploadRoute';
import serveFileRouter from './routes/serveFileRoute';
import { corsList } from './constants';

function init() {
  dotenv.config();
  const app = express();

  // Middlewares
  app.use(cors({
    origin: corsList,
  }));

  // Routes
  app.use('/upload', uploadRoute);
  app.use('/uploads', serveFileRouter);

  const port = process.env.PORT || 3000;

  app.listen(port, () => console.log(`App is running on: http://localhost:${port}`));
}

init();
