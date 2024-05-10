import { BiBookAlt, BiHome, BiLogOut, BiPlus, BiSolidGraduation, BiStats, BiTask } from 'react-icons/bi';
import "../style/Sidebar.css"
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const navigate = useNavigate()

  const Logout = () => {
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
          <a href="/student" className="item">
            <BiSolidGraduation className='icon' /> Student
          </a>
          <a href="" className="item">
            <BiTask className='icon' /> Training
          </a>
          <a href="" className="item">
            <BiPlus className='icon' /> Employees
          </a>
          <a href="" className="item">
            <BiStats className='icon' /> Report
          </a>
          <a onClick={Logout} className="item">
            <BiLogOut className='icon' /> Logout
          </a>
        </div>
      </div>
    </>
  )
}

export default SideBar