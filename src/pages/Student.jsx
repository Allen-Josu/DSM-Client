import SideBar from "../components/SideBar"
import StudentCard from "../components/StudentCard";
import NewStudent from "../components/NewStudent";
import Breadcrump from "../components/ui/Breadcrump";



function Student() {

    return (
        <>
            <div className="app-background" style={{ overflowX: "hidden" }}>
                <SideBar />
                <div className="app-content" style={{ overflowY: "auto" }} >
                    <div style={{ background: " #fff" }}>

                        {/* Breadcrump */}
                        <Breadcrump current={["Dashboard", "Student"]} />

                        {/* Heading */}
                        <div className="d-flex align-items-center mt-5 justify-content-between">
                            <h2 style={{ letterSpacing: "5px" }}>Student </h2>
                            <div className="d-flex  gap-2 w-50" >
                                <input type="text" className="form-control rounded-5" style={{ background: "#dde6ed", letterSpacing: "3px" }} placeholder="Enter Student ID or Name" />
                                <button className="btn-success btn px-5 d-flex align-items-center gap-3">Search</button>
                            </div>
                        </div>
                    </div>

                    {/* Student Card */}
                    <div className="mt-5 w-100" >
                        <StudentCard />
                        <StudentCard />
                    </div>
                </div>
                <NewStudent />
            </div>
        </>
    )
}

export default Student