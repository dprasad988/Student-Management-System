import axios from 'axios';

export const registerStudent = async (studentData) => {
  try {
    const response = await axios.post("/student", studentData);
    console.log(studentData);
    return response.data;
  } catch (error) {
    console.error('Error registering student:', error);
    throw error;
  }
};

export const getStudent = async () => {
  try {
    const response = await axios.get("/student");
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error;
  }
}
