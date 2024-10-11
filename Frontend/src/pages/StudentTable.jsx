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
import EditStudent from '../components/Student/editStudent';

const StudentTable = () => {

  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [open, setOpen] = useState(false)
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState({})

  const fetchStudents = async () => {
    try {
      const response = await getStudent();
      setStudents(response || []);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };
  
  useEffect(() => {
    fetchStudents();
  }, []);
  

  const handleEdit = (student) =>{
    setSelectedStudent(student);
    setOpenEditDialog(true);
  }

  const handleClickOpen = (studentId) =>{
    setSelectedStudentId(studentId)
    setOpen(true);
  }
  const handleClose = () =>{
    setOpen(false);
  }
  const handleEditClose = () =>{
    setOpenEditDialog(false);
    fetchStudents();
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
    <TableContainer component={Paper} className='container col-10' sx={{ border: '1px solid black', boxShadow: 5 }}>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell sx={{color: 'red', fontSize: '18px', fontWeight: 'bold'}}>Name</TableCell>
            <TableCell sx={{color: 'red', fontSize: '18px', fontWeight: 'bold'}}>Age</TableCell>
            <TableCell sx={{color: 'red', fontSize: '18px', fontWeight: 'bold'}}>Contact</TableCell>
            <TableCell sx={{color: 'red', fontSize: '18px', fontWeight: 'bold'}}>Guardian Name</TableCell>
            <TableCell sx={{color: 'red', fontSize: '18px', fontWeight: 'bold'}}>Guardian Contact</TableCell>
            <TableCell sx={{color: 'red', fontSize: '18px', fontWeight: 'bold'}}>Guardian Address</TableCell>
            <TableCell sx={{color: 'red', fontSize: '18px', fontWeight: 'bold'}}>Action</TableCell>
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
                <IconButton onClick= {() => handleEdit(student)}>
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

    <EditStudent
      open = {openEditDialog}
      close = {handleEditClose}
      studentData = {selectedStudent}
    />

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
