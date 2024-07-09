/* eslint-disable react/prop-types */
import { Box, Paper } from "@mui/material"
import { Typography } from "antd"
import { useState } from "react";
import { Modal } from 'antd';


function FeesCard({ student }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Box component={Paper} elevation={16} className=" p-4 mt-5 rounded-4 " onClick={showModal} style={{ cursor: " pointer", }}>
                <p className="fs-5" >Bill No <span style={{ color: "grey" }}>24/1001</span></p>
                <div className="row mt-4  ">
                    <div className="col-md-4 d-flex gap-2 flex-column">
                        <Typography>Name</Typography>
                        <Typography>Course</Typography>
                        <Typography>Amount Paid</Typography>
                        <Typography>Balance</Typography>
                    </div>
                    <div className="col-md-7 d-flex gap-2 flex-column ">
                        <Typography>{student.username}</Typography>
                        <Typography>{student.course_selected}</Typography>
                        <Typography>{student.fees_paid}</Typography>
                        <Typography className="text-danger">{10000 - student.fees_paid}</Typography>
                    </div>
                </div>
            </Box>


            <Modal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer >
                <h4 className="text-center">Fees Details</h4>
                <div className="mt-4 d-flex justify-content-between align-items-center w-100">
                    <p className="fs-5">Bill no <span style={{ color: "grey" }}>24/1001</span></p>
                    <p className="fs-5">Date <span style={{ color: "grey" }}>14-05-2024</span></p>
                </div>
                <Box component={Paper} className="row mt-2 p-3 rounded-2 ">
                    <div className="col-md-4 d-flex gap-2 flex-column">
                        <Typography>Name</Typography>
                        <Typography>Student ID</Typography>
                        <Typography>Course</Typography>
                        <Typography>Mobile No</Typography>
                        <Typography>Amount Paid</Typography>
                        <Typography>Balance</Typography>
                    </div>
                    <div className="col-md-7 d-flex gap-2 flex-column ">
                        <Typography>{student.username}</Typography>
                        <Typography ><a href={`/student-details/${student.sid}`} >{student.sid}</a></Typography>
                        <Typography>{student.course_selected}</Typography>
                        <Typography>{student.mobile}</Typography>
                        <Typography>{student.fees_paid}</Typography>
                        <Typography className="text-danger">{10000 - student.fees_paid}</Typography>
                    </div>
                </Box>

                <div className="d-flex justify-content-end gap-3 mt-4">
                    <button className="btn px-3 btn-secondary"  >Print </button>
                    <button className="btn px-3 btn-success" onClick={handleOk}>Ok</button>
                </div>
            </Modal >
        </>
    )
}

export default FeesCard