import { BiPlus } from "react-icons/bi";
import StudentCard from "../components/StudentCard";
import Breadcrump from "../components/ui/Breadcrump";
import SearchBar from "../components/ui/SearchBar";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { get_all_student_details } from "../services/allAPI";


function Student() {
    const [studentData, setStudentData] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get_all_student_details()
                setStudentData(response.data)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    const NewStudentPage = () => {
        navigate("/register-student")
    }

    return (
        <>
            {/* Breadcrump */}
            <Breadcrump current={["Dashboard", "Student"]} />

            {/* Heading */}
            <div className="d-flex align-items-center mt-5 justify-content-between">
                <h2 style={{ letterSpacing: "5px" }}>Student </h2>
                <div className="d-flex  gap-2 w-50" >
                    <SearchBar place="Student ID or Name" />
                </div>
                <div className="me-5">
                    <button className="btn btn-success px-3 d-flex align-items-center gap-2" onClick={NewStudentPage} ><BiPlus /> New </button>
                </div>
            </div>

            {/* Student Card */}
            <div className="mt-5 w-100" >
                {
                    studentData?.map((student, key) => (
                        <StudentCard key={key} student={student} />
                    ))
                }
            </div>
        </>
    )
}

export default Student