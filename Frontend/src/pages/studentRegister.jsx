import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Student Registration Form</h2>
          <h3 className="mt-4">Student Information</h3>

          <form onSubmit={handleSubmit} className="mt-3">

            <div className="form-group mb-3 row">
                <label htmlFor="name" className="col-sm-2">Name:</label>
                <div className="col-sm-10">
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
              <label htmlFor="age" className='col-sm-2'>Age:</label>
              <div className='col-sm-10'>
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
              <label htmlFor="contact" className='col-sm-2'>Contact:</label>
              <div className='col-sm-10'>
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

            <h3 className="mt-4">Guardian Information</h3>

            <div className="form-group mb-3">
              <label htmlFor="gurName">Guardian Name:</label>
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

            <div className="form-group mb-3">
              <label htmlFor="gurAddress">Guardian Address:</label>
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

            <div className="form-group mb-3">
              <label htmlFor="gurContact">Guardian Contact:</label>
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

            <div className="d-flex justify-content-end">
              <button type="reset" className="btn btn-secondary">Clear</button>
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
