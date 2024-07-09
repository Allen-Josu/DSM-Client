/* eslint-disable react/prop-types */
import { Box, Divider, Paper, Typography } from "@mui/material";

function StudentProfile({ studentData }) {

    function formatDate(dob) {
        const date = new Date(dob);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    return (
        <>
            <div>
                {/* Personal Details */}
                <div>
                    <h4 style={{ letterSpacing: "3px", color: "grey" }}>Personal Details</h4>
                    <Divider color="black" />
                    <Box component={Paper} elevation={6} className="mt-5 px-3 py-2 rounded-4">
                        <div className="row mt-3 p-3 ms-3 me-3">
                            <div className="col-md-2 d-flex flex-column gap-3">
                                <Typography>Name</Typography>
                                <Typography>Age</Typography>
                                <Typography>Mobile No.</Typography>
                            </div>
                            <div className="col-md-4 d-flex flex-column gap-3">
                                <Typography>{studentData?.username}</Typography>
                                <Typography>{studentData?.age}</Typography>
                                <Typography>{studentData?.mobile}</Typography>
                            </div>
                            <div className="col-md-2 d-flex flex-column gap-3">
                                <Typography>Date of Birth</Typography>
                                <Typography>E-mail</Typography>
                                <Typography>Address</Typography>
                            </div>
                            <div className="col-md-4 d-flex flex-column gap-3">
                                <Typography>{formatDate(studentData?.dob)}</Typography>
                                <Typography>{studentData?.email}</Typography>
                                <Typography>{studentData?.address}</Typography>
                            </div>
                        </div>
                    </Box>
                </div>

                {/* Course Details */}
                <div className="mt-5">
                    <h4 style={{ letterSpacing: "3px", color: "grey" }}>Course Details</h4>
                    <Divider color="black" />
                    <Box component={Paper} elevation={6} className="mt-5 px-3 py-2 rounded-4">
                        <div className="row mt-3 p-3 ms-3 me-3">
                            <div className="col-md-2 d-flex flex-column gap-3">
                                <Typography> Course Name</Typography>
                                <Typography>Admission Date</Typography>
                                <Typography>Fees Paid</Typography>
                            </div>
                            <div className="col-md-4 d-flex flex-column gap-3">
                                <Typography>{studentData?.course_selected}</Typography>
                                <Typography>{studentData?.admission_date ? studentData.admission_date : "Nil"}</Typography>
                                <Typography>{studentData?.fees_paid}</Typography>
                            </div>
                            <div className="col-md-2 d-flex flex-column gap-3">
                                <Typography>Trainer</Typography>
                                <Typography>Total Classes Attended</Typography>
                                <Typography>Passed Date</Typography>
                            </div>
                            <div className="col-md-4 d-flex flex-column gap-3">
                                <Typography>{studentData?.trainers.length > 0 ? studentData?.trainers?.map((trainer, key) => (<span key={key} style={{ paddingLeft: "5px" }}>{trainer} , </span>)) : "Nil"}</Typography>
                                <Typography>36</Typography>
                                <Typography>11-05-2024</Typography>
                            </div>
                        </div>
                    </Box>
                </div>

                {/* Reciepts */}
                <div className="mt-5 mb-5">
                    <h4 style={{ letterSpacing: "3px", color: "grey" }}>Reciepts</h4>
                    <Divider color="black" />
                    <Box component={Paper} elevation={6} className="mt-5 px-3 py-2 rounded-4">
                        <div className="row mt-3 p-3 ms-3 me-3">
                            <div className="col-md-6 d-flex flex-column gap-3">
                                <button className="btn btn-secondary" style={{ letterSpacing: "3px" }}>Declaration Statement</button>
                                <button className="btn btn-secondary" style={{ letterSpacing: "3px" }}>Print Student Details</button>

                            </div>
                            <div className="col-md-6 d-flex flex-column gap-3">
                                <button className="btn btn-secondary" style={{ letterSpacing: "3px" }}>Fees Reciepts</button>
                            </div>
                        </div>
                    </Box>
                </div>

            </div>
        </>
    )
}

export default StudentProfile