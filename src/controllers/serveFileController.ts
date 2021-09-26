import { getFileResized } from '../helpers/getResizedFile';

export function serveFileControllerWithResize(req, res) {
  const { fileName } = req.params;
  const { resize } = req.query;
  const resizeWidth = Number(resize) || undefined;

  const { buffer, fileExtension } = getFileResized(fileName, resizeWidth);
  return res.setHeader('Content-Type', `image/${fileExtension}`).send(buffer);
}
