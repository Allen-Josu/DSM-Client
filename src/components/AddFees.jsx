import { BiPlus } from "react-icons/bi"
import { useState } from "react";
import { Modal } from 'antd';
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';


function AddFees() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
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
                    <form action="" >
                        <TextField label="Student ID" className="w-100" variant="outlined" />
                    </form>
                </Box>
            </Modal >

        </>
    )
}

export default AddFees