import { Route, Routes } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';
import Student from './pages/Student';
import StudentDetails from './pages/StudentDetails';
import Reports from './pages/Reports';
import Training from './pages/Training';
import Fees from './pages/Fees';
import SideBar from './components/SideBar';
import Login from './pages/Login';
import NewStudent from "./components/NewStudent"
import Categories from './pages/Categories';
import Profile from './pages/Profile';

function App() {



  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>




      <div className="app-background">
        <SideBar isAdmin />
        <div className="app-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/student' element={<Student />} />
            <Route path='/student-details' element={<StudentDetails />} />
            <Route path="/register-student" element={<NewStudent />} />
            <Route path="/training" element={<Training />} />
            <Route path='/fees' element={<Fees />} />
            <Route path="/categories" element={<Categories />} />
            <Route path='/reports' element={<Reports />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
