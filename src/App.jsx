import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';
import StudentDetails from './pages/StudentDetails';
import Reports from './pages/Reports';
import Training from './pages/Training';
import Fees from './pages/Fees';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/student' element={<Student />} />
        <Route path='/student-details' element={<StudentDetails />} />
        <Route path='/fees' element={<Fees />} />
        <Route path="/training" element={<Training />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </>
  )
}

export default App
