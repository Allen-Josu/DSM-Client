import { BiPlus } from "react-icons/bi"
import { useState } from "react";
import { Modal, Select } from 'antd';
import { Box } from "@mui/material";
import { Form, Input } from 'antd';
import { upload_new_fees, get_student_details } from "../services/allAPI";


function AddFees() {
    const [open, setOpen] = useState(false);
    const [isStudent, setIsStudent] = useState(false)
    const [formLayout, setFormLayout] = useState('horizontal');
    const [feesDetails, setFeesDetails] = useState({
        sid: 0,
        fees_purpose: "",
        fees_paid: "",
        bill_no: ""
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


    // const generateBill = async () => {
    //     const latest_bill = 0
    //     setFeesDetails({ ...feesDetails, bill_no: latest_bill + 1 })
    // }

    // const handleKeyPress = async (event) => {
    //     if (event.key === 'Enter') {
    //         if (feesDetails.sid) {
    //             event.preventDefault();
    //             const response = await get_student_details({ sid: feesDetails.sid })
    //             console.log(response);
    //             if (response.status > 199 && response.status < 300) {
    //                 console.error('succesfull');
    //                 generateBill()
    //                 setIsStudent(true)
    //             }
    //             else {
    //                 alert("No such Student Found")
    //                 console.error('Fetched data is not in the expected format:', response);
    //             }
    //         } else {
    //             alert("Enter the student Id")
    //             console.error('Error fetching users');
    //         }
    //     }
    // };

    const generateBill = () => {
        setFeesDetails(prevFeesDetails => ({
            ...prevFeesDetails,
            bill_no: (prevFeesDetails.bill_no || 0) + 1
        }));
    };

    console.log(feesDetails.sid);

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            if (feesDetails.sid) {
                event.preventDefault();
                try {
                    const response = await get_student_details({ sid: feesDetails.sid });
                    console.log(response);

                    if (response.status >= 200 && response.status < 300) {
                        if (response.data) {
                            console.log('Successful');
                            generateBill();
                            setIsStudent(true);
                        } else {
                            alert("No student data found");
                            console.error('Fetched data is null:', response);
                        }
                    } else {
                        alert("No such student found");
                        console.error('Fetched data is not in the expected format:', response);
                    }
                } catch (error) {
                    console.error('Error fetching student details:', error);
                    alert("An error occurred while fetching student details");
                }
            } else {
                alert("Enter the student ID");
                console.error('Student ID is missing');
            }
        }
    };




    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setFeesDetails({ ...feesDetails, [name]: value })
    }

    const showModal = () => {
        setOpen(true);
    };

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

    const handleCancel = () => {
        handleReset()
        setOpen(false);
        setIsStudent(false)
    };

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