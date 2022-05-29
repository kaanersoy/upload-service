import { getFileResized } from '../helpers/getResizedFile';

export async function serveFileControllerWithResize(req, res) {
  const { fileName } = req.params;
  const { resize } = req.query;
  const resizeWidth = Number(resize) || undefined;

  const { buffer, fileExtension } = await getFileResized(fileName, resizeWidth);

  res.setHeader('Content-Type', `image/${fileExtension}`).send(buffer);
}
