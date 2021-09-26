import multer from 'multer';
import { nanoid } from 'nanoid';
import path from 'path';
import { uploadFileDest } from '../constants';

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
export default multer({ dest: path.join('./', uploadFileDest), storage });
