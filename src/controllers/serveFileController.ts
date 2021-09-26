import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

function sendFile(response, fileName: string, resizeWidth: number = 1080) {
  const filePath = path.join(__dirname, '../../uploads', fileName);
  const splittedFileName = fileName.split('.');
  const fileExtension = splittedFileName[splittedFileName.length - 1];
  fs.readFile(filePath, async (err, imageBuffer:Buffer) => {
    const resizedBuffer = await sharp(imageBuffer).resize(resizeWidth).toBuffer();
    response.setHeader('Content-Type', `image/${fileExtension}`).send(resizedBuffer);
  });
}

export function serveFileController(req, res) {
  const { fileName } = req.params;
  return sendFile(res, fileName);
}

export function serveFileControllerWithResize(req, res) {
  const { fileName, resizeWidth } = req.params;
  return sendFile(res, fileName, Number(resizeWidth));
}
