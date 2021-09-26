import express from 'express'
import multer from 'multer'
import path from 'path'
import dotenv from 'dotenv'
import { uploadFileDest } from './constants';


function init(){
  dotenv.config();
  
  const upload = multer({ dest: path.join('./', uploadFileDest) });
  
  const app = express();
  
  app.post('/upload', upload.single('avatar'), (req, res) => {
    console.log(req.file);
    res.send({ file: req.file, message: 'success' });
  });
  
  app.use('/client', express.static('test-client'));
  app.use('/client', express.static('../test-client'));
  
  const port = process.env.PORT || 3000;
  
  app.listen(port, () => console.log(`App is running on: http://localhost:${port}`));
}

init();

