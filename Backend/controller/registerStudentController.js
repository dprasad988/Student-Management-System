import db from "../db.js"

export const registerStudent = (req, res) => {
  const { name, age, contact, gurName, gurContact, gurAddress } = req.body;

  const query = `INSERT INTO students (name, age, contact, gur_name, gur_contact, gur_address)
                 VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(query, [name, age, contact, gurName, gurContact, gurAddress], (err, result) => {
    if (err) {
      console.error('Error inserting student:', err);
      return res.status(500).json({ message: 'Error registering student' });
    }
    res.status(201).json({ message: 'Student registered successfully', studentId: result.insertId });
  });
};
