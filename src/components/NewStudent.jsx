
import { useState } from 'react';
import { Modal } from 'antd';
import { BiPlus } from 'react-icons/bi';

function NewStudent() {
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
    return (
        <>
            <button className="btn btn-success px-3 d-flex align-items-center gap-2" onClick={showModal}><BiPlus /> New </button>

            <Modal centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className=' p-3'>
                    <h2 className="text-center" style={{ letterSpacing: "3px" }}>New Student</h2>
                </div>
            </Modal>

        </>
    )
}

export default NewStudent