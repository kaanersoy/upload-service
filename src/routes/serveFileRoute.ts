/* istanbul ignore file */
import express from 'express';
import { serveFileController, serveFileControllerWithResize } from '../controllers/serveFileController';

const serveFileRouter = express.Router();

serveFileRouter.get('/:fileName', serveFileController);
serveFileRouter.get('/:fileName/:resizeWidth', serveFileControllerWithResize);

export default serveFileRouter;
