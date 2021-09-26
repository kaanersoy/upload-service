import express from 'express';
import multer from 'multer';
import path from 'path';
import { nanoid } from 'nanoid';
import { uploadFileDest, UPLOAD_FILE_FIELD } from '../constants';

const uploadRoute = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    const splittedFileName = file.originalname.split('.');
    const fileExtension = splittedFileName[splittedFileName.length - 1];
    const id = nanoid(30);

    const uniqueFileName = `${id}.${fileExtension}`;
    cb(null, uniqueFileName);
  },
});
const upload = multer({ dest: path.join('./', uploadFileDest), storage });

uploadRoute.post('/', upload.single(UPLOAD_FILE_FIELD), (req, res) => {
  const { file } = req;
  if (!file) {
    return res.status(400).send({ status: 'failed', message: `Your upload file field must be named: ${UPLOAD_FILE_FIELD}` });
  }
  return res.send({
    status: 'success',
    message: 'Upload is succesfull!',
    fileName: file.filename,
  });
});

export default uploadRoute;
