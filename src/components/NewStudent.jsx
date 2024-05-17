import Breadcrump from './ui/Breadcrump';
import { Button, Checkbox, message, Steps, theme } from 'antd';
import { useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import {
    Cascader,
    ColorPicker,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';
import FormItem from 'antd/es/form/FormItem';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};





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
];


function NewStudent() {

    const { token } = theme.useToken();

    const [current, setCurrent] = useState(0);


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
                                            <Input />
                                        </Form.Item>
                                        {/* Name */}
                                        <Form.Item label="Mothers Name" >
                                            <Input />
                                        </Form.Item>
                                        {/* Gender */}
                                        <Form.Item label="Gender" className='d-flex' style={{ marginLeft: "43px" }}>
                                            <Radio.Group className='d-flex gap-3' style={{ marginLeft: "10px" }}>
                                                <Radio value="male"> Male </Radio>
                                                <Radio value="female"> Female </Radio>
                                                <Radio value="other"> Other </Radio>
                                            </Radio.Group>
                                        </Form.Item>
                                        {/* Mobile */}
                                        <Form.Item label="Mobile" style={{ marginLeft: "43px" }}>
                                            <Input />
                                        </Form.Item>
                                    </div>

                                    <div className='d-flex flex-column justify-content-start w-50'>
                                        {/* Name */}
                                        <Form.Item label="Fathers Name" >
                                            <Input />
                                        </Form.Item>
                                        {/* DOB and Age inYears */}
                                        <div className='d-flex gap-3' style={{ marginLeft: "45px" }}>
                                            <Form.Item label="DOB" className='d-flex' >
                                                <DatePicker className=" " placeholder='YYYY-MM-DD' />
                                            </Form.Item>
                                            <Form.Item label="Age" className='d-flex '  >
                                                <InputNumber disabled className='' />
                                            </Form.Item>
                                        </div>
                                        {/* Mobile */}
                                        <Form.Item label="Email" style={{ marginLeft: "43px" }}>
                                            <Input />
                                        </Form.Item>
                                        {/* Address */}
                                        <Form.Item label="Address" style={{ marginLeft: "33px" }}>
                                            <TextArea rows={6} style={{ resize: "none" }} />
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
                                            <Form.Item label="Course Name">
                                                <Select>
                                                    <Select.Option className="text-center" value="Two Wheelers">Two Wheelers</Select.Option>
                                                    <Select.Option className="text-center" value="Two Wheelers">Four Wheelers</Select.Option>
                                                    <Select.Option className="text-center" value="Two Wheelers">Two and Four Wheelers</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </div>

                                        <div className='d-flex flex-column justify-content-start w-50'>
                                            <Form.Item label="Class Prefered">
                                                <Select>
                                                    <Select.Option className="text-center" value="01">01</Select.Option>
                                                    <Select.Option className="text-center" value="04">04</Select.Option>
                                                    <Select.Option className="text-center" value="10">10</Select.Option>
                                                    <Select.Option className="text-center" value="20">20</Select.Option>
                                                    <Select.Option className="text-center" value="40">40</Select.Option>
                                                </Select>
                                            </Form.Item>
                                        </div>
                                    </div>

                                    {/* <div className='d-flex  px-5 mt-3 w-50 flex-column'>
                                        <p className="fs-5 " style={{ letterSpacing: "5px", color: "grey" }}>Documents Submitted</p>
                                        <div className='mt-3 d-flex flex-column justify-content-start'>
                                            <Form.Item label="" name="disabled" valuePropName="checked">
                                                <Checkbox>SSLC Certificate</Checkbox>
                                            </Form.Item>
                                            <Form.Item label="" name="disabled" valuePropName="checked">
                                                <Checkbox>Aadhar Card</Checkbox>
                                            </Form.Item>
                                            <Form.Item label="" name="disabled" valuePropName="checked">
                                                <Checkbox>Eye Certificate</Checkbox>
                                            </Form.Item>
                                            <Form.Item label="" name="disabled" valuePropName="checked">
                                                <Checkbox>SSLC Certificate</Checkbox>
                                            </Form.Item>
                                        </div>
                                    </div> */}

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
                                                <Input />
                                            </FormItem>
                                        </div>
                                    </div>
                                </Form>
                            </div>
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
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                Done
                            </Button>
                        )}

                    </div>
                </div>




            </div>




        </>
    )
}

export default NewStudent