import express from "express";
import { registerStudent } from "../controller/registerStudentController.js";

const router = express.Router();

router.post("/", registerStudent);


export default router;
