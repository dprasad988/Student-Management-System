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

export const deleteStudent = async (id) =>{
  try{
    const responce = await axios.delete(`/student/${id}`);
    return responce;
  } catch (error) {
    console.error('error deleting student', error);
    throw error;
  }
}

export const updateStudent = async (id, updatedData) =>{
  console.log(id);
  
  try{
    const responce = await axios.put(`/student/${id}`, updatedData);
    return responce;
  } catch (error) {
    console.error('error deleting student', error);
    throw error;
  }
}
