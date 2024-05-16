import { BiPlus } from "react-icons/bi"
import { useState } from "react";
import { Modal, Select } from 'antd';
import { Box } from "@mui/material";
import { Form, Input } from 'antd';
import { DatePicker } from 'antd';

function NewTraining() {

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    //Ant Form
    // const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 2.5,
                },
                wrapperCol: {
                    span: 29,
                },
            }
            : null;

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
                    <Form
                        {...formItemLayout}
                        layout={formLayout}
                        initialValues={{
                            layout: formLayout,
                        }}
                        onValuesChange={onFormLayoutChange}
                    >

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
                                <DatePicker onChange={onChange} />
                            </Form.Item>
                            <Form.Item label="Student ID"  >
                                <Input placeholder="eg : 1001" />
                            </Form.Item>
                        </div>
                    </Form>
                </Box>
            </Modal >
        </>
    )
}

export default NewTraining