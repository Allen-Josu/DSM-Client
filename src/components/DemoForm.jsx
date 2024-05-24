import { DatePicker, Form, Input, InputNumber, Radio, } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;

function DemoForm() {

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

        if (name == "address") {
            setStudentData({ ...studentData, address: value })
        }
        if (name == "email") {
            setStudentData({ ...studentData, email: value })
        }
        if (name == "mobile") {
            setStudentData({ ...studentData, mobile: value })
        }
        if (name == "amount_paid") {
            setStudentData({ ...studentData, amount_paid: value })
        }
        if (name == "course_fees") {
            setStudentData({ ...studentData, course_fees: value })
        }
        if (name == "gender") {
            setStudentData({ ...studentData, gender: value })
        }
    }



    // To get the DOB and calculate the age of Student at the time of Admission
    const Dates = (e) => {
        console.log(e);
        var day = e.$D
        var month = e.$M + 1
        var year = e.$y

        if (day < 10) {
            day = `0${day}`
        }
        if (month < 10) {
            month = `0${month}`
        }

        const currDate = new Date()
        const curr_year = currDate.getFullYear()
        const curr_month = currDate.getMonth() + 1
        const curr_day = currDate.getDate()

        if (curr_year >= year) {
            var age = curr_year - year
            if (curr_month < month) {
                age += 1
            }
            else if (curr_month == month) {
                if (day > curr_day) {
                    age += 1
                }
            }
        }

        const DOB = `${year}-${month}-${day}`
        setStudentData({ ...studentData, dob: DOB })

        if (age < 18) {
            alert("Age should be greater than 18 to register for the class")
        }
        else {
            setStudentData({ ...studentData, age: age })
        }
    }


    return (
        <>
            <Form
                style={{
                    marginTop: 50,
                }}
                className='d-flex gap-5 px-5'
            >
                <div className='d-flex flex-column justify-content-start w-50'>
                    <Form.Item label="Name" name="name" style={{ marginLeft: "50px" }} rules={[
                        {
                            required: true,
                        },
                    ]}>
                        <Input name="name" value={"" || studentData.name} rules={[{ required: true }]} onChange={(e) => { Validate(e) }} />
                    </Form.Item>
                    <Form.Item label="Mothers Name" >
                        <Input name="mothers_name" value={"" || studentData.mothers_name} onChange={(e) => { Validate(e) }} />
                    </Form.Item>
                    <Form.Item label="Gender" className='d-flex' style={{ marginLeft: "43px" }}>
                        <Radio.Group name="gender" value={"" || studentData.gender} onChange={(e) => { Validate(e) }} className='d-flex gap-3' style={{ marginLeft: "10px" }}>
                            <Radio value="Male"> Male </Radio>
                            <Radio value="Female"> Female </Radio>
                            <Radio value="Other"> Other </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Mobile" style={{ marginLeft: "43px" }}>
                        <Input name="mobile" value={"" || studentData.mobile} onChange={(e) => { Validate(e) }} />
                    </Form.Item>
                </div>

                <div className='d-flex flex-column justify-content-start w-50'>
                    <Form.Item label="Fathers Name" >
                        <Input name="fathers_name" value={"" || studentData.fathers_name} onChange={(e) => { Validate(e) }} />
                    </Form.Item>
                    <div className='d-flex gap-3' style={{ marginLeft: "45px" }}>
                        <Form.Item label="DOB" className='d-flex' >
                            <DatePicker onChange={(e) => { Dates(e) }} placeholder={`${studentData.dob}`} />
                        </Form.Item>
                        <Form.Item label="Age" className='d-flex '  >
                            <InputNumber value={"" || studentData.age} disabled />
                        </Form.Item>
                    </div>
                    <Form.Item label="Email" style={{ marginLeft: "43px" }}>
                        <Input name="email" value={"" || studentData.email} onChange={(e) => { Validate(e) }} />
                    </Form.Item>
                    <Form.Item label="Address" style={{ marginLeft: "33px" }}>
                        <TextArea rows={5} value={"" || studentData.address} name="address" onChange={(e) => { Validate(e) }} style={{ resize: "none" }} />
                    </Form.Item>
                </div>
            </Form>
        </>
    )
}

export default DemoForm