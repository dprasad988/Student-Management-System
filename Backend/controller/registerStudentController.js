import db from "../db.js"

export const registerStudent = (req, res) => {
  const { name, age, contact, gurName, gurContact, gurAddress } = req.body;
  console.log(req.body);
  
  const query = `INSERT INTO students (name, age, contact, gur_name, gur_contact, gur_address)
                 VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(query, [name, age, contact, gurName, gurContact, gurAddress], (err, result) => {
    if (err) {
      console.error('Error inserting student:', err);
      return res.status(500).json({ message: 'Error registering student' });
    }
    res.status(201).json({ message: 'Student registered successfully', result });
  });
};

export const getAllStudents = async (req,  res)=> {
  const query = `SELECT * FROM students`;
  try {
    const [results] = await db.query(query);
    console.log(results);
    return res.status(200).json(results);
  } catch (error) {
    console.error('Error getting students:', error);
    return res.status(500).json({ error: 'Error getting students' });
  }
}
