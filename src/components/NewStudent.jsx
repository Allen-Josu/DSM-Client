import Breadcrump from './ui/Breadcrump';
import { Button, Steps, theme, DatePicker, Form, Input, InputNumber, Radio, Select, } from 'antd';
import { useState } from 'react';
import FormItem from 'antd/es/form/FormItem';
const { TextArea } = Input;

const steps = [
    {
        title: 'Personal Details',
    },
    {
        title: 'Course Selection',
    },
    {
        title: 'Fees',
    },
    {
        title: "Preview"
    }
];

// Student Id and Student Age is not updating in use State

function NewStudent() {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    // To store the Student Details
    const [studentData, setStudentData] = useState({
        sid: "",
        name: "",
        age: "",
        fathers_name: "",
        mothers_name: "",
        dob: "",
        gender: "",
        email: "",
        mobile: "",
        address: "",
        course_name: "",
        classes_preferred: "",
        course_fees: "",
        amount_paid: "",
    })

    // To Validate the Student Details and store the data
    const Validate = (e) => {
        const { name, value } = e.target

        if (name == "name") {
            setStudentData({ ...studentData, name: value })
        }
        if (name == "fathers_name") {
            setStudentData({ ...studentData, fathers_name: value })
        }
        if (name == "mothers_name") {
            setStudentData({ ...studentData, mothers_name: value })
        }
        if (name == "fathers_name") {
            setStudentData({ ...studentData, fathers_name: value })
        }
        if (name == "dob") {
            setStudentData({ ...studentData, dob: value })
        }
        if (name == "gender") {
            setStudentData({ ...studentData, gender: value })
        }
        if (name == "email") {
            setStudentData({ ...studentData, email: value })
        }
        if (name == "mobile") {
            setStudentData({ ...studentData, mobile: value })
        }
        if (name == "address") {
            setStudentData({ ...studentData, address: value })
        }
        if (name == "course_fees") {
            setStudentData({ ...studentData, course_fees: value })
        }
        if (name == "amount_paid") {
            setStudentData({ ...studentData, amount_paid: value })
        }
    }

    // To get Course details of the Student
    const SelectionCourse = (value) => {
        setStudentData({ ...studentData, course_name: value })
    }

    // To get The Class Preferance of a Student
    const SelectionClass = (value) => {
        setStudentData({ ...studentData, classes_preferred: value })
    }

    // To get the DOB and calculate the age of Student at the time of Admission
    const Dates = (e) => {

        e.$M += 1
        const current = new Date()
        const currYear = current.getFullYear()
        const currMonth = current.getMonth() + 1
        const currDay = current.getDate()

        let student_age = 0
        if (currYear > e.$y) {
            student_age = currYear - e.$y
            if (currMonth > e.$M) {
                student_age += 1
            }
            else if (currMonth == e.$M) {
                if (currDay > e.$D) {
                    student_age += 1
                }
            }
        }
        else {
            alert("Dob is invalid")
        }
        setStudentData({ ...studentData, age: `${student_age}` })

        if (e.$M < 10) {
            e.$M = `0${e.$M + 1}`
        }
        if (e.$D < 10) {
            e.$D = `0${e.$D}`
        }
        const date = `${e.$y}-${e.$M}-${e.$D} `
        setStudentData({ ...studentData, dob: date })
    }
    // To Reset the Student Data
    const ResetData = () => {
        setStudentData({
            sid: "",
            name: "",
            fathers_name: "",
            mothers_name: "",
            dob: "",
            gender: "",
            email: "",
            mobile: "",
            address: "",
            course_name: "",
            classes_preferred: "",
            course_fees: "",
            amount_paid: "",
            age: "",
        })
    }

    // To submit the Form
    const handleSubmit = (e) => {
        e.preventDefault()
        // To generate Student ID
        const sid = 1001
        setStudentData({ ...studentData, sid: sid })
        alert(`Student is registered with Student id ${studentData.sid}`)
        // To clear the values of already registered Student
        setStudentData({
            sid: "",
            name: "",
            fathers_name: "",
            mothers_name: "",
            dob: "",
            gender: "",
            email: "",
            mobile: "",
            address: "",
            course_name: "",
            classes_preferred: "",
            course_fees: "",
            amount_paid: "",
            age: "",
        })
    }

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    return (
        <>

            <Breadcrump current={["Dashboard", "Student", "Register-Student"]} />

            <div className='mt-5'>
                <h2 style={{ letterSpacing: "5px" }}>Student Registration</h2>

                <div className='mt-5 px-5'>
                    <Steps current={current} items={items} />

                    <div className='mt-5' style={contentStyle}>

                        {
                            current == 0 &&

                            <div >
                                <Form
                                    style={{
                                        marginTop: 50,
                                    }}
                                    className='d-flex gap-5 px-5'
                                >
                                    <div className='d-flex flex-column justify-content-start w-50'>
                                        {/* Name */}
                                        <Form.Item label="Name" style={{ marginLeft: "50px" }}>
                                            <Input name="name" value={"" || studentData.name} onChange={(e) => { Validate(e) }} />
                                        </Form.Item>
                                        {/* Name */}
                                        <Form.Item label="Mothers Name" >
                                            <Input name="mothers_name" value={"" || studentData.mothers_name} onChange={(e) => { Validate(e) }} />
                                        </Form.Item>
                                        {/* Gender */}
                                        <Form.Item label="Gender" className='d-flex' style={{ marginLeft: "43px" }}>
                                            <Radio.Group name="gender" value={"" || studentData.gender} onChange={(e) => { Validate(e) }} className='d-flex gap-3' style={{ marginLeft: "10px" }}>
                                                <Radio value="Male"> Male </Radio>
                                                <Radio value="Female"> Female </Radio>
                                                <Radio value="Other"> Other </Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                        {/* Mobile */}
                                        <Form.Item label="Mobile" style={{ marginLeft: "43px" }}>
                                            <Input name="mobile" value={"" || studentData.mobile} onChange={(e) => { Validate(e) }} />
                                        </Form.Item>
                                    </div>

                                    <div className='d-flex flex-column justify-content-start w-50'>
                                        {/* Name */}
                                        <Form.Item label="Fathers Name" >
                                            <Input name="fathers_name" value={"" || studentData.fathers_name} onChange={(e) => { Validate(e) }} />
                                        </Form.Item>
                                        <div className='d-flex gap-3' style={{ marginLeft: "45px" }}>
                                            <Form.Item label="DOB" className='d-flex' >
                                                <DatePicker onChange={(e) => { Dates(e) }} placeholder={`${studentData.dob}`} />
                                            </Form.Item>
                                            {/* Age */}
                                            <Form.Item label="Age" className='d-flex '  >
                                                <InputNumber value={"" || studentData.age} disabled />
                                            </Form.Item>
                                        </div>
                                        {/* Email */}
                                        <Form.Item label="Email" style={{ marginLeft: "43px" }}>
                                            <Input name="email" value={"" || studentData.email} onChange={(e) => { Validate(e) }} />
                                        </Form.Item>
                                        {/* Address */}
                                        <Form.Item label="Address" style={{ marginLeft: "33px" }}>
                                            <TextArea rows={5} value={"" || studentData.address} name="address" onChange={(e) => { Validate(e) }} style={{ resize: "none" }} />
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>
                        }

                        {
                            current == 1 &&
                            <div >
                                <Form
                                    style={{
                                        marginTop: 50,
                                    }}
                                >
                                    <div className='d-flex gap-5 px-5'>

                                        <div className='d-flex flex-column justify-content-start w-50'>
                                            {/* Course Select */}
                                            <Form.Item label="Course Name" >
                                                <Select key="course_name" value={"" || studentData.course_name} onChange={(e) => { SelectionCourse(e) }} >
                                                    <Select.Option className="text-center" value="Two Wheelers">Two Wheelers</Select.Option>
                                                    <Select.Option className="text-center" value="Four Wheelers">Four Wheelers</Select.Option>
                                                    <Select.Option className="text-center" value="Two and Four Wheelers">Two and Four Wheelers</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </div>

                                        <div className='d-flex flex-column justify-content-start w-50'>
                                            <Form.Item label="Class Prefered" >
                                                <Select value={"" || studentData.classes_preferred} onChange={(e) => { SelectionClass(e) }}>
                                                    <Select.Option className="text-center" value="01">01</Select.Option>
                                                    <Select.Option className="text-center" value="04">04</Select.Option>
                                                    <Select.Option className="text-center" value="10">10</Select.Option>
                                                    <Select.Option className="text-center" value="20">20</Select.Option>
                                                    <Select.Option className="text-center" value="40">40</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        }

                        {
                            current == 2 &&
                            <div className='d-flex justify-content-center'>
                                <Form
                                    style={{
                                        marginTop: 50,
                                    }}
                                >
                                    <div className='d-flex gap-5 px-5 '>
                                        <div className='w-50'>
                                            <FormItem label="Course Fees">
                                                <Input disabled value="10000" style={{ color: "green" }} />
                                            </FormItem>
                                        </div>
                                        <div className='w-50'>
                                            <FormItem label="Amount">
                                                <Input value={"" || studentData.amount_paid} name="amount_paid" onChange={(e) => { Validate(e) }} />
                                            </FormItem>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        }


                        {
                            current == 3 &&
                            <Form
                                style={{
                                    marginTop: 50,
                                }}
                                className='d-flex gap-5 px-5'
                            >
                                <div className='d-flex flex-column justify-content-start w-50'>
                                    {/* Name */}
                                    <Form.Item label="Name" style={{ marginLeft: "50px" }}>
                                        <Input name="name" value={studentData.name} disabled />
                                    </Form.Item>
                                    {/* Name */}
                                    <Form.Item label="Mothers Name" >
                                        <Input name="mothers_name" value={studentData.mothers_name} disabled />
                                    </Form.Item>
                                    {/* Gender */}
                                    <Form.Item label="Gender" className='d-flex' style={{ marginLeft: "43px" }}>
                                        <Input value={studentData.gender} disabled />
                                    </Form.Item>
                                    {/* Mobile */}
                                    <Form.Item label="Mobile" style={{ marginLeft: "43px" }}>
                                        <Input name="mobile" value={studentData.mobile} disabled />
                                    </Form.Item>
                                    {/* Address */}
                                    <Form.Item label="Address" style={{ marginLeft: "33px" }}>
                                        <TextArea rows={5} value={studentData.address} disabled name="address" style={{ resize: "none" }} />
                                    </Form.Item>
                                </div>

                                <div className='d-flex flex-column justify-content-start w-50'>
                                    {/* Name */}
                                    <Form.Item label="Fathers Name" style={{ marginLeft: "10px" }}>
                                        <Input name="fathers_name" value={studentData.fathers_name} disabled />
                                    </Form.Item>
                                    <div className='d-flex gap-3' style={{ marginLeft: "59px" }}>
                                        <Form.Item label="DOB" className='d-flex' >
                                            <Input disabled value={studentData.dob} />
                                        </Form.Item>
                                        {/* Age */}
                                        <Form.Item label="Age" className='d-flex '  >
                                            <InputNumber value={studentData.age} disabled />
                                        </Form.Item>
                                    </div>
                                    {/* Email */}
                                    <Form.Item label="Email" style={{ marginLeft: "57px" }}>
                                        <Input disabled value={studentData.email} />
                                    </Form.Item>
                                    <Form.Item label="Course" style={{ marginLeft: "53px" }}>
                                        <Input disabled value={studentData.course_name} />
                                    </Form.Item>
                                    <Form.Item label="Class Preference">
                                        <Input disabled value={studentData.classes_preferred} />
                                    </Form.Item>
                                    <div className="d-flex gap-3">
                                        <FormItem label="Course Fees" style={{ marginLeft: "28px" }}>
                                            <Input disabled value="10000" style={{ color: "green" }} />
                                        </FormItem>
                                        <FormItem label="Amount">
                                            <Input value={studentData.amount_paid} disabled />
                                        </FormItem>
                                    </div>
                                </div>
                            </Form>
                        }
                    </div>



                    <div
                        style={{
                            marginTop: 20,
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
                            <Button danger style={{ margin: '0 8px', }} onClick={ResetData}>
                                Reset
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        )}

                    </div>
                </div>
            </div >
        </>
    )
}

export default NewStudent