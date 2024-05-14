import { BiPlus } from "react-icons/bi"
import { useState } from "react";
import { Modal, Select } from 'antd';
import { Box } from "@mui/material";
import { Form, Input } from 'antd';


function AddFees() {
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
                    span: 4,
                },
                wrapperCol: {
                    span: 19,
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

    return (
        <>

            <button className="btn btn-success d-flex  align-items-center gap-2 px-3" onClick={showModal}> <BiPlus />Add</button>


            <Modal centered open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel} >
                <p className="fs-5" style={{ letterSpacing: "5px" }}>New Fees</p>
                <Box className="w-100 mt-3">
                    <Form
                        {...formItemLayout}
                        layout={formLayout}
                        initialValues={{
                            layout: formLayout,
                        }}
                        onValuesChange={onFormLayoutChange}
                    >
                        <Form.Item label="Student ID">
                            <Input placeholder="eg : 1001" />
                        </Form.Item>
                        <Form.Item label="Name">
                            <Input value="Allen Joseph Joy" disabled style={{ color: "black" }} />
                        </Form.Item>
                        <Form.Item label="Course">
                            <Input value="Four Wheelers" disabled style={{ color: "black" }} />
                        </Form.Item>
                        <Form.Item label="Fees Pending">
                            <Input value="5500" disabled style={{ color: "red" }} />
                        </Form.Item>
                        <Form.Item label="Purpose">
                            <Select>
                                <Select.Option value="Course Fees">Course Fees</Select.Option>
                                <Select.Option value="Course Fees">Additional Fees</Select.Option>
                                <Select.Option value="Course Fees">Reattempt Fees</Select.Option>
                                <Select.Option value="Course Fees">Trail Fees</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Amount">
                            <Input />
                        </Form.Item>
                    </Form>
                </Box>
            </Modal >
        </>
    )
}

export default AddFees