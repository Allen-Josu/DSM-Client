import StudentCard from "../components/StudentCard";
import NewStudent from "../components/NewStudent";
import Breadcrump from "../components/ui/Breadcrump";
import SearchBar from "../components/ui/SearchBar";



function Student() {

    return (
        <>
            {/* Breadcrump */}
            <Breadcrump current={["Dashboard", "Student"]} />

            {/* Heading */}
            <div className="d-flex align-items-center mt-5 justify-content-between">
                <h2 style={{ letterSpacing: "5px" }}>Student </h2>
                <div className="d-flex  gap-2 w-50" >
                    <SearchBar place="Student ID or Name" />
                </div>
                <div className="me-5">
                    <NewStudent />
                </div>
            </div>

            {/* Student Card */}
            <div className="mt-5 w-100" >
                <StudentCard />
                <StudentCard />
            </div>
        </>
    )
}

export default Student