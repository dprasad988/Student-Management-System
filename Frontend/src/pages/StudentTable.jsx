import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button,
  colors
} from '@mui/material';
import { deleteStudent, getStudent } from '../Api/registerStudentApi';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { message } from 'antd';

const StudentTable = () => {

  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudent();
        console.log("response", response);
        
        setStudents(response || []);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudents();
  }, [setStudents]);

  const handleEdit = (student_id) =>{

  }

  const handleClickOpen = (studentId) =>{
    setSelectedStudentId(studentId)
    setOpen(true);
  }
  const handleClose = () =>{
    setOpen(false);
  }

  const handleDeleteConfirm = async () => {
    try{
      await deleteStudent(selectedStudentId);
      setOpen(false);
      setStudents(students.filter(student => student.student_id !== selectedStudentId));
      message.success("Student deleted Successfully!")
    } catch (error) {
      console.error("Failed to delete student", error)
      message.error("Failed to delete student!")
    }
  };
  
  return (
    <div>
    <h1 className='text-center mb-4'>Students Table</h1>
    <TableContainer component={Paper} className='container col-10'sx={{ border: '1px solid black' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Guardian Name</TableCell>
            <TableCell>Guardian Contact</TableCell>
            <TableCell>Guardian Address</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {students.length > 0 ? (
              students.map((student) => (
            <TableRow key={student.student_id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.contact}</TableCell>
              <TableCell>{student.gur_name}</TableCell>
              <TableCell>{student.gur_contact}</TableCell>
              <TableCell>{student.gur_address}</TableCell>
              <TableCell>
                <IconButton onClick= {() => handleEdit(student.student_id)}>
                  <EditIcon sx={{color: 'blue'}}/>
                </IconButton>
                <IconButton onClick={() => handleClickOpen(student.student_id)}>
                  <DeleteIcon sx={{color: 'red'}}/>
                </IconButton>
              </TableCell>              
            </TableRow>
          ))
        ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">No students available</TableCell>
            </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>

    {/* Confirmation Dialog */}
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to delete this student?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default StudentTable;
