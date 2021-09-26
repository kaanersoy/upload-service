export const uploadFileDest = '/uploads';
export const UPLOAD_FILE_FIELD = 'file';

const host = process.env.HOST;

export const corsList = [
  // Add a cors whitelist for bad people :P
  host,
];

export const successfulUploadMessage = 'Upload is succesfull!';
