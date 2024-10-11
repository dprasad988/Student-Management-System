import express from "express";
import { getAllStudents, registerStudent } from "../controller/registerStudentController.js";

const router = express.Router();

router.post("/", registerStudent);
router.get("/", getAllStudents);

export default router;
