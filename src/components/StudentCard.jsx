/* eslint-disable react/prop-types */
import { Box, Paper } from "@mui/material"
import { Link } from "react-router-dom"

function StudentCard({ student }) {



    return (
        <>
            <Link to={`/student-details/${student.sid}`} style={{ textDecoration: "none" }}>
                <Box component={Paper} elevation={5} className="p-3 rounded-3 my-4" style={{ background: "#dde6ed" }}>
                    <div className="d-flex gap-2 flex-column">
                        <p className="fs-5">Admission No <span style={{ color: "grey" }}>{student.admission_no}</span> </p>
                        <div className="d-flex gap-4">
                            <p>Name : <span>{student.username}</span></p>
                            <p>Mobile  : <span>{student.mobile}</span></p>
                        </div>
                        <div>
                            <p>Address : <span>{student.address}</span></p>
                        </div>
                    </div>
                </Box>
            </Link>
        </>
    )
}

export default StudentCard