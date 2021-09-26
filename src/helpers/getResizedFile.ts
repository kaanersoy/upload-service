import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

export function getFileResized(fileName: string, resizeWidth: number = 1080) {
  const filePath = path.join(__dirname, '../../uploads', fileName);
  const splittedFileName = fileName.split('.');
  const fileExtension = splittedFileName[splittedFileName.length - 1];
  const imageBuffer = fs.readFileSync(filePath);

  return {
    buffer: sharp(imageBuffer).resize(resizeWidth).toBuffer(),
    fileExtension,
  };
}
