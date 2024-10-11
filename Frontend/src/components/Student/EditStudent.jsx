import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { message } from "antd";
import { updateStudent } from "../../Api/registerStudentApi";

function EditStudent({ open, close, studentData }) {
  const [student, setStudent] = useState(studentData || {});

  useEffect(() => {
    setStudent(studentData || {});
  }, [studentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try{
        await updateStudent(student.student_id, student)
        close();
        message.success("Student updated Successfully!")
    } catch (error){
        console.error("Failed to update student")
        message.error("Failed to Student update")
    }
  };

  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle className="text-center">Edit Student</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          value={student.name || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age"
          type="number"
          name="age"
          value={student.age || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contact"
          name="contact"
          type="number"
          value={student.contact || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Guardian Name"
          name="gur_name"
          value={student.gur_name || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Guardian Contact"
          name="gur_contact"
          type="number"
          value={student.gur_contact || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Guardian Address"
          name="gur_address"
          value={student.gur_address || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditStudent;
