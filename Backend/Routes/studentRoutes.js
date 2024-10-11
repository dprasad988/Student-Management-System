import express from "express";
import { deleteStudent, getAllStudents, registerStudent } from "../controller/registerStudentController.js";

const router = express.Router();

router.post("/", registerStudent);
router.get("/", getAllStudents);
router.delete("/:id", deleteStudent);


export default router;
