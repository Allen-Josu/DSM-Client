import SideBar from "../components/SideBar"
import StudentProfile from "../components/StudentProfile";
import Breadcrump from "../components/ui/Breadcrump";

function StudentDetails() {
  return (
    <>
      <div className="app-background">
        <SideBar />
        <div className="app-content" style={{ overflowY: 'auto' }}>

          {/* BreadCrump */}
          <Breadcrump current={["Dashboard", "Student", "Student-Details"]} />

          {/* Heading */}
          <div className="d-flex align-items-center mt-4 justify-content-between">
            <h2 style={{ letterSpacing: "5px" }}>Student Details </h2>
            <p className="fs-3 me-5">Admission No <span style={{ color: "grey" }}>1001</span></p>
          </div>

          {/* Profile */}
          <div className="mt-5">
            <StudentProfile />
          </div>

        </div>
      </div>
    </>
  )
}

export default StudentDetails