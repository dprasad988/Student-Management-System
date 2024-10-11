import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { getStudent } from '../Api/registerStudentApi';

const StudentTable = () => {

  const [students, setStudents] = useState([]);

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

  console.log(students);
  
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
    </div>
  );
};

export default StudentTable;
