import SideBar from "../components/SideBar"
import SearchBar from "../components/ui/SearchBar"
import "../style/Dashboard.css"



function Dashboard() {
    return (
        <>
            <div className="app-background">
                <SideBar />
                <div className="app-content">
                    {/* Dashboard Heading */}
                    <div className="d-flex align-items-center justify-content-between mt-5">
                        <h2 style={{ letterSpacing: "5px" }}>Dashboard </h2>
                        <div className="d-flex  gap-2 w-50" >
                            <SearchBar place="Student ID or Name"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard