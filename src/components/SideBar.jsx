import { BiBookAlt, BiHome, BiLogOut, BiPlus, BiReceipt, BiSolidGraduation, BiStats, BiTask } from 'react-icons/bi';
import "../style/Sidebar.css"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SideBar() {
  // Should change this value to global value
  const [isAdmin, setIsAdmin] = useState(false)

  const navigate = useNavigate()

  const Logout = () => {
    setIsAdmin(true)
    navigate("/")
  }
  const Login = () => {
    setIsAdmin(false)
    navigate("/")
  }
  return (
    <>
      <div className="menu">
        <div className="logo">
          <BiBookAlt className='logo-icon' />
          <h2>DrivePro</h2>
        </div>
        <div className="menu-list p-3">
          <a href="/dashboard" className="item">
            <BiHome className='icon' /> Dashboard
          </a>
          <Link to="/student" className="item">
            <BiSolidGraduation className='icon' /> Student
          </Link>

          {
            isAdmin &&
            <Link to="/training" className="item">
              <BiTask className='icon' /> Training
            </Link>
          }

          <Link to="/fees" className="item">
            <BiReceipt className='icon' /> Fees
          </Link>

          {
            isAdmin &&
            <Link to="" className="item">
              <BiPlus className='icon' /> Employees
            </Link>
          }
          {
            isAdmin &&
            <Link to="/reports" className="item">
              <BiStats className='icon' /> Report
            </Link>
          }
          <Link onClick={Logout} className="item">
            <BiLogOut className='icon' /> Logout
          </Link>
          {
            isAdmin &&
            <Link onClick={Login} className="item">
              <BiLogOut className='icon' /> Login
            </Link>
          }
        </div>
      </div>
    </>
  )
}

export default SideBar