import { Divider } from '@mui/material';
import Table from 'react-bootstrap/Table';
import { BiCode, BiPlus, BiTrash } from 'react-icons/bi';
import Breadcrump from '../../components/ui/Breadcrump';
import { Button } from 'antd';




function Categories() {


    return (
        <>

            <Breadcrump current={["Dashboard", "Categories"]} />
            <div className='mt-5'>

                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h2 style={{ letterSpacing: "5px" }}>Categories</h2>
                    <Button className="me-5 d-flex gap-2 px-3 align-items-center"><BiPlus />Add</Button>
                </div>

                {/* Course Details */}
                <div className='mt-5 '>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="fs-5" style={{ letterSpacing: "5px", color: "grey" }}>Course Details</p>
                    </div>
                    <Divider color="black" />
                    <div className="mt-5 rounded-5 px-5">
                        <Table bordered hover>
                            <thead className='text-center px-2'>
                                <tr >
                                    <th>Sl No</th>
                                    <th>Course Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center px-2'>
                                <tr>
                                    <td>1</td>
                                    <td>Four Wheelers</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Two Wheelers</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center'>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Two and Four Wheelers</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center'>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                {/* Fee Category */}
                <div className='mt-5 '>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="fs-5" style={{ letterSpacing: "5px", color: "grey" }}>Fee Category</p>
                    </div>
                    <Divider color="black" />
                    <div className="mt-5 rounded-5 px-5">
                        <Table bordered hover>
                            <thead className='text-center px-2'>
                                <tr >
                                    <th>Sl No</th>
                                    <th> Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center px-2'>
                                <tr>
                                    <td>1</td>
                                    <td>Course Fee</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Trial Fee</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center'>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Additional Fee</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center'>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Re-Attempt Fee</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center'>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                {/* Staff Details */}
                <div className='mt-5 '>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="fs-5" style={{ letterSpacing: "5px", color: "grey" }}>Staff Details</p>
                    </div>
                    <Divider color="black" />
                    <div className="mt-5 rounded-5 px-5">
                        <Table bordered hover>
                            <thead className='text-center px-2'>
                                <tr >
                                    <th>Sl No</th>
                                    <th>Name</th>
                                    <th>Mob No</th>
                                    <th>Designation</th>
                                    <th>Admin Level</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center px-2'>
                                <tr>
                                    <td>1</td>
                                    <td>Kiran</td>
                                    <td>8547171373</td>
                                    <td>Instructor</td>
                                    <td>No</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Bob</td>
                                    <td>8547171373</td>
                                    <td>Instructor</td>
                                    <td>No</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Steve</td>
                                    <td>1234567899</td>
                                    <td>Instructor</td>
                                    <td>No</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>Renjith</td>
                                    <td>9456752189</td>
                                    <td>Instructor</td>
                                    <td>No</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td>Aneeta</td>
                                    <td>7546551575</td>
                                    <td>Staff</td>
                                    <td>No</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>6</td>
                                    <td>Adon</td>
                                    <td>Staff</td>
                                    <td>Instructor</td>
                                    <td>Yes</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>

                {/* Vehicle Details */}
                <div className='mt-5 '>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="fs-5" style={{ letterSpacing: "5px", color: "grey" }}>Vehicle Details</p>
                    </div>
                    <Divider color="black" />
                    <div className="mt-5 rounded-5 px-5">
                        <Table bordered hover>
                            <thead className='text-center px-2'>
                                <tr >
                                    <th>Sl No</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center px-2'>
                                <tr>
                                    <td>1</td>
                                    <td>Alto (Black) </td>
                                    <td>Four Wheeler</td>
                                    <td>KL 32 M 1234</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Alto (Blue) </td>
                                    <td>Four Wheeler</td>
                                    <td>KL 23 M 0234</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>Alto (Silver) </td>
                                    <td>Four Wheeler</td>
                                    <td>KL 33 M 2134</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>4</td>
                                    <td>M-80 Old </td>
                                    <td>Two Wheeler</td>
                                    <td>KL 32 M 234</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>5</td>
                                    <td>M-80 New </td>
                                    <td>Two Wheeler</td>
                                    <td>KL 23 M 2134</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>6</td>
                                    <td>Celerio (White) </td>
                                    <td>Four Wheeler</td>
                                    <td>KL 32 M 9339</td>
                                    <td>
                                        <div className='d-flex gap-5 justify-content-center '>
                                            <Button warning className=" d-flex gap-2 px-3 align-items-center"><BiCode /> Edit</Button>
                                            <Button danger className="d-flex align-items-center gap-2 px-3"><BiTrash /> Delete</Button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Categories