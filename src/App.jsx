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
import Categories from './pages/admin/Categories';
import Profile from './pages/Profile';
import DemoForm from './components/DemoForm';
import RegisterStudent from './pages/RegisterStudent';
// import PageNotFound from './pages/PageNotFound';

function App() {



  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={
          <div className="app-background">
            <SideBar />
            <div className="app-content">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/student' element={<Student />} />
                <Route path='/student-details/:sid' element={<StudentDetails />} />
                <Route path="/register-student" element={<RegisterStudent />} />
                <Route path="/training" element={<Training />} />
                <Route path='/fees' element={<Fees />} />
                <Route path="/categories" element={<Categories />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/demo' element={<DemoForm />} />
              </Routes>
            </div>
          </div>
        } />
      </Routes>
    </>
  )
}

export default App
