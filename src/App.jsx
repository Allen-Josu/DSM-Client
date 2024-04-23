import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
