import { successfullUploadMessage, UPLOAD_FILE_FIELD } from '../constants';

const uploadFileController = (req, res) => {
  const { file } = req;
  if (!file) {
    return res.status(400).send({ status: 'failed', message: `Your upload file field must be named: ${UPLOAD_FILE_FIELD}` });
  }
  return res.send({
    status: 'success',
    message: successfullUploadMessage,
    fileName: file.filename,
  });
};

export { uploadFileController };
