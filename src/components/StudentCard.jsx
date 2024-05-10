import { Box, Paper } from "@mui/material"
import { Link } from "react-router-dom"

function StudentCard() {
    const student_id = 1001
    // const border = "3px solid black"
    // border: `${border}`
    return (
        <>
            <Link to={`/student-details`} style={{ textDecoration: "none" }}>
                <Box component={Paper} elevation={5} className="p-3 rounded-3 my-4" style={{ background: "#dde6ed" }}>
                    <div className="d-flex gap-2 flex-column">
                        <p className="fs-5">Admission No <span style={{ color: "grey" }}>{student_id}</span> </p>
                        <div className="d-flex gap-4">
                            <p>Name : <span>Allen Joseph Joy</span></p>
                            <p>Mobile  : <span> 85471 71373</span></p>
                        </div>
                        <div>
                            <p>Address : <span>Alackaparambil , Thuravoor P O , Cherthala, Alappuzha</span></p>
                            <p>Pin : <span>688532</span></p>
                        </div>

                    </div>
                </Box>
            </Link>
        </>
    )
}

export default StudentCard