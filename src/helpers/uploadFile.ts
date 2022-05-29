import multer from "multer";
import { nanoid } from "nanoid";
import path from "path";
import { uploadFileDest, UPLOAD_FILE_FIELD } from "../constants";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    const splittedFileName = file.originalname.split(".");
    const fileExtension = splittedFileName[splittedFileName.length - 1];
    const id = nanoid(30);

    const uniqueFileName = `${id}.${fileExtension}`;
    cb(null, uniqueFileName);
  },
});

const fileFilter = (req, file, cb) => cb(null, file.mimetype.startsWith("image"));

export const fileUploadMiddleWare = async (req, res, next) => {
  const upload = await multer({
    dest: path.join("./", uploadFileDest),
    storage,
    fileFilter,
  }).single(UPLOAD_FILE_FIELD);

  // eslint-disable-next-line consistent-return
  upload(req, res, (err) => {
    if (err) {
      return res.send({
        success: false,
        message: "Some error occured when upload!",
      });
    }
    next();
  });
};
