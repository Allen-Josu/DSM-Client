import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Radio, Select, Steps, theme } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import FormItem from 'antd/es/form/FormItem';
import dayjs from 'dayjs';
import { upload_new_fees, upload_new_student } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

const steps = [
    {
        title: 'Personal Details',
    },
    {
        title: 'Course Details',
    },
    {
        title: 'Fee Details',
    },
    {
        title: 'Preview',
    },
];


function StudentForm() {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const [studentData, setStudentData] = useState({
        sid: "1001",
        username: "",
        mothers_name: "",
        fathers_name: "",
        address: "",
        dob: "",
        mobile: "",
        email: "",
        gender: "",
        course_selected: "",
        total_class: "",
        fees_paid: "",
        age: ""
    })
    const [feesDetails, setFeesDetails] = useState({
        sid: "1001",
        fees_purpose: "Course Fees",
        fees_paid: "",
        bill_no: "TH/1001"
    })

    const navigate = useNavigate()

    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    const isStepValid = () => {
        switch (current) {
            case 0:
                return studentData.username && studentData.mothers_name && studentData.fathers_name &&
                    studentData.address && studentData.dob && studentData.mobile && studentData.email && studentData.gender;
            case 1:
                return studentData.course_selected && studentData.total_class;
            case 2:
                return studentData.fees_paid;
            default:
                return true;
        }
    }

    const next = () => {
        if (isStepValid()) {
            setCurrent(current + 1);
        }
        else {
            alert("Please Fill all the fields")
        }
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const handleChange = (e) => {
        const { name, value } = e.target
        setStudentData({ ...studentData, [name]: value })
        if (name == "fees_paid") {
            setFeesDetails({ ...feesDetails, fees_paid: value })
        }
    }

    // function to get date of birth
    const handleDateChange = (date, dateString) => {
        const age = calculateAge(date);
        setStudentData({ ...studentData, dob: dateString, age });
    };

    // function to calculate age based on date of birth
    const calculateAge = (date) => {
        const today = dayjs();
        const birthDate = dayjs(date);
        let age = today.year() - birthDate.year();
        const monthDiff = today.month() - birthDate.month();
        if (monthDiff < 0 || (monthDiff === 0 && today.date() < birthDate.date())) {
            age--;
        }
        return age;
    };

    // function to submit the form
    const handleSubmit = async (e) => {
        e.preventDefault()
        const student_response = await upload_new_student(studentData)
        if (200 <= student_response.status < 300) {
            const response = await upload_new_fees(feesDetails)
            console.log(response);
            if (199 < response.status < 300) {
                alert("Student Registered Successfully")
                handleReset()
                navigate("/student-details")
            }
            else {
                console.log("Fees no uploaded");
            }
        }
        else {
            console.log("student not uploaded");
        }
    }

    // function to reset the form
    const handleReset = () => {
        setStudentData({
            username: "",
            mothers_name: "",
            fathers_name: "",
            address: "",
            dob: "",
            mobile: "",
            email: "",
            gender: "",
            course_selected: "",
            total_class: "",
            fees_paid: "",
            age: ""
        })
    }

    return (
        <React.Fragment>
            <Steps current={current} items={items} />
            <div style={contentStyle}>
                <div >
                    <Form
                        style={{
                            marginTop: 50,
                        }}
                        className='d-flex gap-5 px-5 '
                        disabled={
                            current == 3 ? true : false
                        }
                    >
                        {
                            current == 0 &&

                            <div className="row w-100">
                                <div className="col-md-6">
                                    <Form.Item label="Name" style={{ marginLeft: "50px" }} >
                                        <Input name="username" value={"" || studentData.username} onChange={handleChange} />
                                    </Form.Item>
                                    <Form.Item label="Mothers Name" >
                                        <Input name="mothers_name" value={"" || studentData.mothers_name} onChange={handleChange} />
                                    </Form.Item>
                                    <Form.Item label="Gender" className='d-flex' style={{ marginLeft: "43px" }}>
                                        <Radio.Group name="gender" className='d-flex gap-3' value={"" || studentData.gender} onChange={handleChange} style={{ marginLeft: "10px" }}>
                                            <Radio value="Male"> Male </Radio>
                                            <Radio value="Female"> Female </Radio>
                                            <Radio value="Other"> Other </Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item label="Mobile" style={{ marginLeft: "43px" }}>
                                        <Input name="mobile" value={"" || studentData.mobile} onChange={handleChange} />
                                    </Form.Item>
                                </div>
                                <div className="col-md-6">
                                    <Form.Item label="Fathers Name" >
                                        <Input name="fathers_name" value={studentData.fathers_name || ""} onChange={handleChange} />
                                    </Form.Item>
                                    <div className='d-flex gap-3' style={{ marginLeft: "45px" }}>
                                        <Form.Item label="DOB" className='d-flex' >
                                            <DatePicker onChange={handleDateChange} placeholder={"" || studentData.dob} />
                                        </Form.Item>
                                        <Form.Item label="Age" className='d-flex '  >
                                            <InputNumber disabled value={"" || studentData.age} />
                                        </Form.Item>
                                    </div>
                                    <Form.Item label="Email" style={{ marginLeft: "43px" }} name="email" >
                                        <Input name="email" value={"" || studentData.email} onChange={handleChange} />
                                    </Form.Item>
                                    <Form.Item label="Address" style={{ marginLeft: "33px" }}>
                                        <TextArea rows={5} name="address" value={"" || studentData.address} style={{ resize: "none" }} onChange={handleChange} />
                                    </Form.Item>
                                </div>
                            </div>
                        }

                        {
                            current == 1 &&
                            <div className='d-flex gap-5 px-5 w-100'>
                                <div className='d-flex flex-column justify-content-start w-50'>
                                    <Form.Item label="Course Name" >
                                        <Select key="course" value={"" || studentData.course_selected} onChange={(value) => setStudentData({ ...studentData, course_selected: value })} >
                                            <Select.Option className="text-center" value="Two Wheelers">Two Wheelers</Select.Option>
                                            <Select.Option className="text-center" value="Four Wheelers">Four Wheelers</Select.Option>
                                            <Select.Option className="text-center" value="Two and Four Wheelers">Two and Four Wheelers</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                                <div className='d-flex flex-column justify-content-start w-50'>
                                    <Form.Item label="Class Prefered">
                                        <Select value={"" || studentData.total_class} onChange={(value) => setStudentData({ ...studentData, total_class: value })} >
                                            <Select.Option className="text-center" value="01">01</Select.Option>
                                            <Select.Option className="text-center" value="04">04</Select.Option>
                                            <Select.Option className="text-center" value="10">10</Select.Option>
                                            <Select.Option className="text-center" value="20">20</Select.Option>
                                            <Select.Option className="text-center" value="40">40</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>
                        }

                        {
                            current == 2 &&
                            <div className='d-flex  px-5 justify-content-center w-100 '>
                                <div className='d-flex gap-5'>
                                    <div className='w-50'>
                                        <FormItem label="Course Fees">
                                            <Input disabled value="10000" style={{ color: "green" }} />
                                        </FormItem>
                                    </div>
                                    <div className='w-50'>
                                        <FormItem label="Amount">
                                            <Input name="fees_paid" value={"" || studentData.fees_paid} onChange={handleChange} />
                                        </FormItem>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            current == 3 &&
                            <div className='d-flex w-100 gap-5'>
                                <div className='d-flex flex-column justify-content-start w-50'>
                                    <Form.Item label="Name" style={{ marginLeft: "50px" }}>
                                        <Input name="username" value={studentData.username} />
                                    </Form.Item>
                                    <Form.Item label="Mothers Name" >
                                        <Input name="mothers_name" value={studentData.mothers_name} />
                                    </Form.Item>
                                    <Form.Item label="Gender" className='d-flex' style={{ marginLeft: "43px" }}>
                                        <Input value={studentData.gender} />
                                    </Form.Item>
                                    <Form.Item label="Mobile" style={{ marginLeft: "43px" }}>
                                        <Input name="mobile" value={studentData.mobile} />
                                    </Form.Item>
                                    <Form.Item label="Address" style={{ marginLeft: "33px" }}>
                                        <TextArea rows={5} name="address" style={{ resize: "none" }} value={studentData.address} />
                                    </Form.Item>
                                </div>
                                <div className='d-flex flex-column justify-content-start w-50'>
                                    <Form.Item label="Student ID" style={{ marginLeft: "24px" }}>
                                        <Input value={studentData.sid} />
                                    </Form.Item>
                                    <Form.Item label="Fathers Name" style={{ marginLeft: "10px" }}>
                                        <Input name="fathers_name" value={studentData.fathers_name} />
                                    </Form.Item>
                                    <div className='d-flex gap-3' style={{ marginLeft: "59px" }}>
                                        <Form.Item label="DOB" className='d-flex' >
                                            <Input value={studentData.dob} />
                                        </Form.Item>
                                        <Form.Item label="Age" className='d-flex '  >
                                            <InputNumber value={studentData.age} />
                                        </Form.Item>
                                    </div>
                                    <Form.Item label="Email" style={{ marginLeft: "57px" }}>
                                        <Input value={studentData.email} />
                                    </Form.Item>
                                    <Form.Item label="Course" style={{ marginLeft: "53px" }}>
                                        <Input value={studentData.course_selected} />
                                    </Form.Item>
                                    <Form.Item label="Class Preference">
                                        <Input value={studentData.total_class} />
                                    </Form.Item>
                                    <div className="d-flex gap-3">
                                        <FormItem label="Course Fees" style={{ marginLeft: "28px" }}>
                                            <Input value="10000" style={{ color: "green" }} />
                                        </FormItem>
                                        <FormItem label="Amount">
                                            <Input value={studentData.fees_paid} />
                                        </FormItem>
                                    </div>
                                </div>
                            </div>
                        }
                    </Form>
                </div>
            </div>



            <div
                style={{
                    marginTop: 24,
                }}
            >
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={handleSubmit}>
                        {/* loading iconPosition="end" */}
                        Submit
                    </Button>
                )}
            </div>
        </React.Fragment>
    )
}

export default StudentForm