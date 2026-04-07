import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage/page';
import ProjectsPage from './components/projectsPage/page';
import ResumePage from './components/resumePage/page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projectsPage" element={<ProjectsPage />} />
        <Route path="/resumePage" element={<ResumePage />} />
      </Routes>
    </Router>
  )
}

export default App

