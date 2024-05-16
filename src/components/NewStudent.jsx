import Breadcrump from './ui/Breadcrump';
import { Divider } from "@mui/material";


function NewStudent() {
    return (
        <>

            <Breadcrump current={["Dashboard", "Student", "Register-Student"]} />

            <div className='mt-5'>
                <h2 style={{ letterSpacing: "5px" }}>Student Registration</h2>
                <div className='mt-5'>
                    <h4 style={{ letterSpacing: "3px", color: "grey" }}>Personal Details</h4>
                    <Divider color="black" />

                    <form className='px-3 mt-5' style={{ fontSize: "25px" }}>

                    </form>

                </div>

            </div>




        </>
    )
}

export default NewStudent