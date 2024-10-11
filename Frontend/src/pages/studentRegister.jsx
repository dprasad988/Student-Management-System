import React, { useState } from 'react';
import { registerStudent } from '../Api/registerStudentApi';

function StudentRegister() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    gurName: '',
    gurContact: '',
    gurAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await registerStudent(formData);
      console.log(result);
      message.success("Student Registration Successfully!");
      setFormData({
        name: '',
        age: '',
        contact: '',
        gurName: '',
        gurContact: '',
        gurAddress: ''
      });
    } catch (error) {
      message.error("Student Registration faild!");
    }
  };

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-6 border border-3 p-4">
          <h2 className="text-center">Student Registration Form</h2>
          <h3 className="mt-4">Student Information</h3>

          <form onSubmit={handleSubmit} className="mt-3">

            <div className="form-group mb-3 row ">
                <label htmlFor="name" className="col-sm-4">Name:</label>
                <div className="col-sm-8">
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
            </div>

            <div className="form-group mb-3 row">
              <label htmlFor="age" className='col-sm-4'>Age:</label>
              <div className='col-sm-8'>
                <input
                    type="text"
                    className="form-control"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
              </div>
            </div>

            <div className="form-group mb-3 row">
              <label htmlFor="contact" className='col-sm-4'>Contact:</label>
              <div className='col-sm-8'>
                    <input
                        type="number"
                        className="form-control"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
              </div>
            </div>

            <h3 className="mt-4 mb-3">Guardian Information</h3>

            <div className="form-group mb-3 row">
              <label htmlFor="gurName" className='col-sm-4'>Guardian Name:</label>
              <div className='col-sm-8'>
                <input
                  type="text"
                  className="form-control"
                  id="gurName"
                  name="gurName"
                  value={formData.gurName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group mb-3 row">
              <label htmlFor="gurAddress" className='col-sm-4'>Guardian Address:</label>
              <div className='col-sm-8'>
                <input
                  type="text"
                  className="form-control"
                  id="gurAddress"
                  name="gurAddress"
                  value={formData.gurAddress}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group mb-3 row">
              <label htmlFor="gurContact" className='col-sm-4'>Guardian Contact:</label>
              <div className='col-sm-8'>
                <input
                  type="text"
                  className="form-control"
                  id="gurContact"
                  name="gurContact"
                  value={formData.gurContact}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="reset" className="btn btn-secondary me-2">Clear</button>
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
