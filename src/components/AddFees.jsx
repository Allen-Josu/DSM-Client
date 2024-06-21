import { BiPlus } from "react-icons/bi"
import { useState } from "react";
import { Modal, Select } from 'antd';
import { Box } from "@mui/material";
import { Form, Input } from 'antd';
import { get_student_details, upload_new_fees } from "../services/allAPI";


function AddFees() {
    const [open, setOpen] = useState(false);
    const [isStudent, setIsStudent] = useState(false)
    const [formLayout, setFormLayout] = useState('horizontal');
    const [feesDetails, setFeesDetails] = useState({
        sid: "",
        fees_purpose: "",
        fees_paid: "",
        bill_no: "1001"
    })

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

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        handleReset()
        setOpen(false);
        setIsStudent(false)
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setFeesDetails({ ...feesDetails, [name]: value })
    }

    //function to generate a bill no
    // const generateBill = () => {
    //     setFeesDetails(prevFeesDetails => ({
    //         ...prevFeesDetails,
    //         bill_no: (prevFeesDetails.bill_no || 0) + 1
    //     }));
    // };

    // function to check the student id when pressing enter key
    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            if (feesDetails.sid) {
                event.preventDefault();
                //Get not working
                const student = await get_student_details({ sid: feesDetails.sid })
                if (199 < student.status < 300) {
                    setIsStudent(true)
                }
                else {
                    console.log("No such student Found");
                }
            } else {
                alert("Enter the student ID");
            }
        }
    };

    // function to submit the form
    const handleOk = async () => {
        if (feesDetails.fees_paid && feesDetails.fees_purpose) {
            const fees_response = await upload_new_fees(feesDetails)
            if (200 <= fees_response < 300) {
                alert("Fees Uploaded Suceesfully")
                handleCancel()
            }
            else {
                alert("An error has been Occured")
            }
        }
        else {
            alert("Fill the form")
        }
    };

    // function to reset the form
    const handleReset = () => {
        setFeesDetails({
            sid: "",
            fees_purpose: "",
            fees_paid: "",
            bill_no: ""
        })
    }

    return (
        <>
            <button className="btn btn-success d-flex  align-items-center gap-2 px-3" onClick={showModal}> <BiPlus />Add</button>

            <Modal centered open={open}
                onOk={handleOk}
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
                            <Input placeholder="eg : 1001" name="sid" value={"" || feesDetails.sid} onChange={handleChange} onKeyPress={handleKeyPress} />
                        </Form.Item>
                        {
                            isStudent &&
                            <div>
                                <Form.Item label="Bill No">
                                    <Input value={"" || feesDetails.bill_no} disabled style={{ color: "black" }} />
                                </Form.Item>
                                <Form.Item label="Name">
                                    <Input value={"" || ""} disabled style={{ color: "black" }} />
                                </Form.Item>
                                <Form.Item label="Course">
                                    <Input value={"" || ""} disabled style={{ color: "black" }} />
                                </Form.Item>
                                <Form.Item label="Fees Pending">
                                    <Input value={"" || ""} disabled style={{ color: "red" }} />
                                </Form.Item>
                                <Form.Item label="Purpose">
                                    <Select placeholder="Select a Course" value={"" || feesDetails.fees_purpose} onChange={(value) => { setFeesDetails({ ...feesDetails, fees_purpose: value }) }}>
                                        <Select.Option value="Course Fees">Course Fees</Select.Option>
                                        <Select.Option value="Additional Fees">Additional Fees</Select.Option>
                                        <Select.Option value="Reattempt Fees">Reattempt Fees</Select.Option>
                                        <Select.Option value="Trail Fees">Trail Fees</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Amount" >
                                    <Input name="fees_paid" values={"" || feesDetails.fees_paid} onChange={handleChange} />
                                </Form.Item>
                            </div>
                        }
                    </Form>
                </Box>
            </Modal >
        </>
    )
}

export default AddFees