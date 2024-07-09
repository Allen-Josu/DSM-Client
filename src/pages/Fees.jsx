import { useEffect, useState } from "react"
import AddFees from "../components/AddFees"
import FeesCard from "../components/FeesCard"
import Breadcrump from "../components/ui/Breadcrump"
import SearchBar from "../components/ui/SearchBar"
import { get_all_student_details } from "../services/allAPI"

function Fees() {
    const [studentData, setStudentData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const response = await get_all_student_details()
            if (199 < response.status < 300) {
                setStudentData(response.data)
            }
        }
        fetchData()
    }, [])

    return (
        <>

            <Breadcrump current={["Dashboard", "Fees"]} />
            <div className="d-flex align-items-center justify-content-between mt-5">
                <h2 style={{ letterSpacing: "5px" }}>Fees </h2>
                <div className="d-flex  gap-2 w-50" >
                    <SearchBar place="Bill No" />
                </div>
                <div className="me-5">
                    <AddFees />
                </div>
            </div>

            <div className="mt-5" style={{ display: "grid", gridTemplateColumns: "auto auto auto", gridGap: "1.5rem" }}>
                {
                    studentData?.slice(0, 6).map((student, key) => (
                        <FeesCard student={student} key={key} />
                    ))
                }
            </div>
        </>
    )
}

export default Fees