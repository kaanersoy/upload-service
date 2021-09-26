/* istanbul ignore file */
import express from 'express';
import { UPLOAD_FILE_FIELD } from '../constants';
import { uploadFileController } from '../controllers/uploadFileController';
import uploadFile from '../helpers/uploadFile';

const uploadRoute = express.Router();

uploadRoute.post('/', uploadFile.single(UPLOAD_FILE_FIELD), uploadFileController);

export default uploadRoute;
