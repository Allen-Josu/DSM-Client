/* eslint-disable react/prop-types */
import { Box, Paper } from "@mui/material"
import { Typography } from "antd"
import { useState } from "react";
import { Modal } from 'antd';
import Table from 'react-bootstrap/Table';

function TrainingCard({ training }) {

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

    function formatDate(dob) {
        const date = new Date(dob);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <>
            <Box component={Paper} elevation={16} className=" p-4 mt-5 rounded-4 pb-5" onClick={showModal} style={{ cursor: " pointer", }}>
                <p className="fs-5" >T No <span style={{ color: "grey" }}>{training.training_ID}</span></p>
                <div className="row mt-4  ">
                    <div className="col-md-4 d-flex gap-2 flex-column">
                        <Typography>Trainer</Typography>
                        <Typography>Vehicle</Typography>
                        <Typography>Total Student</Typography>
                    </div>
                    <div className="col-md-7 d-flex gap-2 flex-column ">
                        <Typography>{training.trainer}</Typography>
                        <Typography>{training.vehicle}</Typography>
                        <Typography>{training.students.length}</Typography>
                    </div>
                </div>
            </Box>

            <Modal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
                <div className="mt-4 d-flex justify-content-between align-items-center w-100">
                    <p className="fs-5">Bill no <span style={{ color: "grey" }}>{training.training_ID}</span></p>
                    <p className="fs-5">Date <span style={{ color: "grey" }}>{formatDate(training.date)}</span></p>
                </div>
                <Box component={Paper} elevation={4} className="row mt-2 p-3 rounded-2 ">
                    <div className="col-md-4 d-flex gap-2 flex-column">
                        <Typography>Trainer</Typography>
                        <Typography>Vehicle</Typography>
                    </div>
                    <div className="col-md-7 d-flex gap-2 flex-column ">
                        <Typography>{training.trainer}</Typography>
                        <Typography >{training.vehicle}</Typography>
                    </div>
                </Box>


                <div className="mt-4">
                    <div style={{ maxHeight: "250px", overflowY: "auto", scrollBehavior: "smooth" }}>
                        <Table striped bordered hover >
                            <thead className="text-center">
                                <tr>
                                    <th>Sl No</th>
                                    <th>Student Id</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody className="text-center"  >
                                {
                                    training.students.map((student, key) => (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td>{student.sid}</td>
                                            <td>{student.username}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Modal >
        </>
    )
}

export default TrainingCard