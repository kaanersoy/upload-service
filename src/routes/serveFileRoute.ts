/* istanbul ignore file */
import express from 'express';
import { serveFileControllerWithResize } from '../controllers/serveFileController';

const serveFileRouter = express.Router();

serveFileRouter.get('/:fileName', serveFileControllerWithResize);

export default serveFileRouter;
