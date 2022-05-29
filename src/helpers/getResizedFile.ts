import path from "path";
import fs from "fs";
import sharp from "sharp";

export async function getFileResized(fileName: string, resizeWidth: number|undefined) {
  const filePath = path.join(__dirname, "../../uploads", fileName);
  const splittedFileName = fileName.split(".");
  const fileExtension = splittedFileName[splittedFileName.length - 1];
  const imageBuffer = fs.readFileSync(filePath);

  const buffer = await sharp(imageBuffer).resize(resizeWidth).toBuffer();

  return {
    buffer,
    fileExtension,
  };
}
