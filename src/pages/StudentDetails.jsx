import { useEffect, useState } from "react";
import StudentProfile from "../components/StudentProfile";
import Breadcrump from "../components/ui/Breadcrump";
import { useParams } from 'react-router-dom';
import { get_student_sid_details } from "../services/allAPI";

function StudentDetails() {
  const { sid } = useParams();
  const [studentData, setStudentData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get_student_sid_details(sid)
        console.log(response);
        setStudentData(response.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [sid])

  return (
    <>
      {/* BreadCrump */}
      <Breadcrump current={["Dashboard", "Student", "Student-Details"]} />

      {/* Heading */}
      <div className="d-flex align-items-center mt-4 justify-content-between">
        <h2 style={{ letterSpacing: "5px" }}>Student Details </h2>
        <p className="fs-3 me-5">Admission No <span style={{ color: "grey" }}>{studentData?.admission_no}</span></p>
      </div>

      {/* Profile */}
      <div className="mt-5">
        <StudentProfile studentData={studentData} />
      </div>

    </>
  )
}

export default StudentDetails