/* istanbul ignore file */
import express from "express";
import { uploadFileController } from "../controllers/uploadFileController";
import { fileUploadMiddleWare } from "../helpers/uploadFile";

const uploadRoute = express.Router();

uploadRoute.post("/", fileUploadMiddleWare, uploadFileController);

export default uploadRoute;
