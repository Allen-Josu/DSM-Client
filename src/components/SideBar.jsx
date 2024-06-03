import { BiBookAlt, BiCategory, BiHome, BiLogOut, BiPaperPlane, BiReceipt, BiSolidGraduation, BiTask, BiUser } from 'react-icons/bi';
import "../style/Sidebar.css"
import { Link, useNavigate } from 'react-router-dom';

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

          {/* <Link to="/dashboard" className="item">
            <BiHome className='icon' /> Dashboard
          </Link> */}

          <Link to="/student" className="item">
            <BiSolidGraduation className='icon' /> Student
          </Link>

          <Link to="/training" className="item">
            <BiTask className='icon' /> Training
          </Link>

          <Link to="/fees" className="item">
            <BiReceipt className='icon' /> Fees
          </Link>

          <Link to="/categories" className="item">
            <BiCategory className='icon' /> Categories
          </Link>
          {/* 
          <Link to="/reports" className="item">
            <BiPaperPlane className='icon' /> Reports
          </Link> */}
          {/* 
          <Link to="/profile" className="item">
            <BiUser className='icon' /> Profile
          </Link> */}

          <a onClick={Logout} className="item">
            <BiLogOut className='icon' /> Logout
          </a>

        </div>
      </div>
    </>
  )
}

export default SideBar