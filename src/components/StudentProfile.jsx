import { Box, Divider, Paper, Typography } from "@mui/material";

function StudentProfile() {
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
                                <Typography>Blood Group</Typography>
                                <Typography>Mobile No.</Typography>
                            </div>
                            <div className="col-md-4 d-flex flex-column gap-3">
                                <Typography>Allen Joseph Joy</Typography>
                                <Typography>23</Typography>
                                <Typography>A -</Typography>
                                <Typography>85471 71373</Typography>
                            </div>
                            <div className="col-md-2 d-flex flex-column gap-3">
                                <Typography>Date of Birth</Typography>
                                <Typography>Address</Typography>
                                <Typography>Pincode</Typography>
                                <Typography>E-mail</Typography>
                            </div>
                            <div className="col-md-4 d-flex flex-column gap-3">
                                <Typography>24-10-2001</Typography>
                                <Typography>Alackaparambil, Thuravoor P O , Cherthala, Alappuzha</Typography>
                                <Typography>688532</Typography>
                                <Typography>allenalackaparambil@gmail.com</Typography>
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
                                {/* <Typography></Typography> */}
                            </div>
                            <div className="col-md-4 d-flex flex-column gap-3">
                                <Typography>MEARN Stack</Typography>
                                <Typography>20-10-2023</Typography>
                                <Typography>10000</Typography>
                                {/* <Typography>85471 71373</Typography> */}
                            </div>
                            <div className="col-md-2 d-flex flex-column gap-3">
                                <Typography>Trainer</Typography>
                                <Typography>Total Classes Attended</Typography>
                                <Typography>Passed Date</Typography>
                                {/* <Typography></Typography> */}
                            </div>
                            <div className="col-md-4 d-flex flex-column gap-3">
                                <Typography>Kiran</Typography>
                                <Typography>36</Typography>
                                <Typography>11-05-2024</Typography>
                                {/* <Typography>allenalackaparambil@gmail.com</Typography> */}
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