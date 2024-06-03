/* eslint-disable react/jsx-key */
import { BiPlus, BiTrash } from "react-icons/bi"
import { useState } from "react";
import { Modal, Select } from 'antd';
import { Box } from "@mui/material";
import { Form, Input } from 'antd';
import { DatePicker } from 'antd';
import Table from 'react-bootstrap/Table';
import { Button } from 'antd';

function NewTraining() {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [input, setInput] = useState("")
    const [trainingData, setTrainingData] = useState({
        training_ID: "T24/1001",
        trainer: "",
        vehicle: "",
        date: "",
        students: [
        ]
    })


    // Ant Design Form end
    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
        alert("Training Details Uploadedd Successfully")
        setTrainingData({
            training_ID: "T24/1001",
            trainer: "",
            vehicle: "",
            date: "",
            students: [
            ]
        })
    };

    const handleCancel = () => {
        setOpen(false);
        setTrainingData({
            training_ID: "T24/1001",
            trainer: "",
            vehicle: "",
            date: "",
            students: [
            ]
        })

    };

    const onChange = (date, dateString) => {
        setTrainingData({ ...trainingData, date: dateString })
    };


    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default Enter key behavior
            console.log("Enter key is Pressed");
            GetStudentDetails();
        }
    };

    const GetStudentDetails = () => {
        const student_id = input
        const student_name = "Allen Joseph Joy"
        if (student_name) {
            const new_student = { student_id, student_name }
            setTrainingData(prevData => ({
                ...prevData, students: [...prevData.students, new_student]
            }))
            setInput("")
        }
        else {
            alert("No Student Found")
        }
    }


    const DeleteStudentDetails = (id) => {
        console.log(id);
        setTrainingData(prevData => ({ ...prevData, students: prevData.students.filter(items => items.student_id !== id) }))
    }

    return (
        <>
            <button className="btn btn-success px-3 d-flex align-items-center gap-3" onClick={showModal}><BiPlus />Add</button>

            <Modal centered open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel} >
                <p className="fs-5" style={{ letterSpacing: "5px" }}>Training</p>
                <Box className="w-100 mt-3">

                    <Form.Item label="Training ID">
                        <Input disabled value={trainingData.training_ID} style={{ color: "grey" }} />
                    </Form.Item>
                    <Form.Item label="Trainer">
                        <Select placeholder="Select Trainer" onChange={(trainer) => {
                            setTrainingData({ ...trainingData, trainer })
                        }}>
                            <Select.Option value="Kiran">Kiran</Select.Option>
                            <Select.Option value="Bob">Bob</Select.Option>
                            <Select.Option value="Ranjith">Ranjith</Select.Option>
                            <Select.Option value="steve">Steve</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Vehicle">
                        <Select placeholder="Select Vehicle" onChange={(vehicle) => {
                            setTrainingData({ ...trainingData, vehicle })
                        }}>
                            <Select.Option value="KL 32 M 9339 (Celerio)">KL 32 M 9339 (Celerio)</Select.Option>
                            <Select.Option value="KL 32 M 9340 (Alto) Blue">KL 32 M 9340 (Alto) Blue</Select.Option>
                            <Select.Option value="KL 32 M 9341 (Alto) Black">KL 32 M 9341 (Alto) Black</Select.Option>
                            <Select.Option value="KL 32 M 1278 (M-80) Old">KL 32 M 1278 (M-80) Old</Select.Option>
                        </Select>
                    </Form.Item>
                    <div className="d-flex gap-2">
                        <Form.Item label="Date">
                            <DatePicker placeholder="YYYY-MM-DD" onChange={onChange} />
                        </Form.Item>
                        <Form.Item label="Student ID"  >
                            <Input placeholder="eg : 1001" onChange={handleInputChange} value={input || ""} onKeyPress={handleKeyPress} />
                        </Form.Item>
                    </div>

                    {
                        trainingData.students.length > 0 &&
                        <div style={{ maxHeight: "250px", overflowY: "auto", scrollBehavior: "smooth" }}>
                            <Table striped bordered hover >
                                <thead className="text-center">
                                    <tr>
                                        <th>Sl No</th>
                                        <th>Student Id</th>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center"  >
                                    {
                                        trainingData.students.map((items, sl_no) => (
                                            <tr>
                                                <td>{sl_no + 1}</td>
                                                <td>{items.student_id}</td>
                                                <td>{items.student_name}</td>
                                                <td className="d-flex justify-content-center"><Button danger className="d-flex align-items-center gap-2 px-3" onClick={() => { DeleteStudentDetails(items.student_id) }}><BiTrash /> Delete</Button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    }

                </Box>
            </Modal >
        </>
    )
}

export default NewTraining