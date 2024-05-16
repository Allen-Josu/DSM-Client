import { Box, Paper } from "@mui/material"
import { Typography } from "antd"
import { useState } from "react";
import { Modal } from 'antd';
import { Table } from 'antd';

function TrainingCard() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: 'Sl No',
            dataIndex: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'ID',
            dataIndex: 'sid',
        },
    ];

    const data = [
        {
            name: "Allen",
            sid: "1001",
            key: "1"
        },
        {
            name: "Anwin",
            sid: "1002",
            key: "2"

        },
        {
            name: "Aaron",
            sid: "1003",
            key: "3"
        },
    ];



    return (
        <>
            <Box component={Paper} elevation={16} className=" p-4 mt-5 rounded-4 pb-5" onClick={showModal} style={{ cursor: " pointer", }}>
                <p className="fs-5" >T No <span style={{ color: "grey" }}>T24/1001</span></p>
                <div className="row mt-4  ">
                    <div className="col-md-4 d-flex gap-2 flex-column">
                        <Typography>Trainer</Typography>
                        <Typography>Vehicle</Typography>
                        <Typography>Classes</Typography>
                    </div>
                    <div className="col-md-7 d-flex gap-2 flex-column ">
                        <Typography>Kiran</Typography>
                        <Typography>KL 32 M 9339 (Celerio)</Typography>
                        <Typography>21</Typography>
                    </div>
                </div>
            </Box>

            <Modal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  >
                <div className="mt-4 d-flex justify-content-between align-items-center w-100">
                    <p className="fs-5">Bill no <span style={{ color: "grey" }}>24/1001</span></p>
                    <p className="fs-5">Date <span style={{ color: "grey" }}>14-05-2024</span></p>
                </div>
                <Box component={Paper} elevation={4} className="row mt-2 p-3 rounded-2 ">
                    <div className="col-md-4 d-flex gap-2 flex-column">
                        <Typography>Trainer</Typography>
                        <Typography>Vehicle</Typography>
                    </div>
                    <div className="col-md-7 d-flex gap-2 flex-column ">
                        <Typography>Kiran</Typography>
                        <Typography >KL 32 M 9339 (Celerio)</Typography>
                    </div>
                </Box>


                <div className="mt-4">
                    <Table
                        columns={columns}
                        dataSource={data}
                        size="small"
                        scroll={{
                            y: 240,
                        }}
                    />
                </div>

            </Modal >
        </>
    )
}

export default TrainingCard