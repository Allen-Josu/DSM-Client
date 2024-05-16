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
        alert("Fees Paid Successfully")
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <>
            <button className="btn btn-success px-3 d-flex align-items-center gap-3" onClick={showModal}><BiPlus />Add</button>

            <Modal centered open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel} >
                <p className="fs-5" style={{ letterSpacing: "5px" }}>Training</p>
                <Box className="w-100 mt-3">

                        <Form.Item label="Trainer">
                            <Select placeholder="Select Trainer">
                                <Select.Option value="Course Fees">Kiran</Select.Option>
                                <Select.Option value="Course Fees">Bob</Select.Option>
                                <Select.Option value="Course Fees">Ranjith</Select.Option>
                                <Select.Option value="Course Fees">Steve</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Vehicle">
                            <Select placeholder="Select Vehicle">
                                <Select.Option value="Course Fees">KL 32 M 9339 (Celerio)</Select.Option>
                                <Select.Option value="Course Fees">KL 32 M 9340 (Alto) Blue</Select.Option>
                                <Select.Option value="Course Fees">KL 32 M 9341 (Alto) Black</Select.Option>
                                <Select.Option value="Course Fees">KL 32 M 1278 (M-80) Old</Select.Option>
                            </Select>
                        </Form.Item>
                        <div className="d-flex gap-2">
                            <Form.Item label="Date">
                                <DatePicker placeholder="YYYY-MM-DD" onChange={onChange} />
                            </Form.Item>
                            <Form.Item label="Student ID"  >
                                <Input placeholder="eg : 1001" />
                            </Form.Item>
                        </div>

                    <div>
                        <Table striped bordered hover>
                            <thead className="text-center">
                                <tr>
                                    <th>Sl No</th>
                                    <th>Student Id</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-center ">
                                <tr>
                                    <td>1</td>
                                    <td>1001</td>
                                    <td>Allen Joseph Joy</td>
                                    <td className="d-flex justify-content-center"><Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button></td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>1002</td>
                                    <td>Aaron Joseph Joy</td>
                                    <td className="d-flex justify-content-center"><Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button></td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>1003</td>
                                    <td>Anwin Joseph Joy</td>
                                    <td className="d-flex justify-content-center"><Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button></td>
                                </tr>


                            </tbody>
                        </Table>
                    </div>
                </Box>
            </Modal >
        </>
    )
}

export default NewTraining