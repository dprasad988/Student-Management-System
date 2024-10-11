import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import studentRegister from './pages/studentRegister';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<studentRegister />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
