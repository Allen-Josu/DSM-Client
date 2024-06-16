import StudentForm from "../components/StudentForm"
import Breadcrump from "../components/ui/Breadcrump"

function RegisterStudent() {
    return (
        <>
            <div className="d-flex justify-content-between mt-4">
                <Breadcrump current={["Dashboard", "Student", "Register-Student"]} />
                {/* {
                    isDisabled &&
                    <Alert message="Please Fill the form Correctly" type="error" className='w-50 fs-6 px-4' style={{ letterSpacing: "1.5px" }} />
                } */}
            </div>

            <div className='mt-5'>
                <h2 style={{ letterSpacing: "5px" }}>Student Registration</h2>

                <div className='mt-5 px-5'>
                    <StudentForm />
                </div >
            </div>
        </>
    )
}

export default RegisterStudent