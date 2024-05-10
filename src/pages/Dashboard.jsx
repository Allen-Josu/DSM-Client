import SideBar from "../components/SideBar"
import "../style/Dashboard.css"

function Dashboard() {
    return (
        <>
            <div className="app-background">
                <SideBar />
                <div className="app-content">
                    {/* Dashboard Heading */}
                    <div className="d-flex align-items-center justify-content-between">
                        <h2>Dashboard</h2>
                        <div className="d-flex  gap-2 w-50" >
                            <input type="text" className="form-control rounded-5" style={{ background: "#dde6ed", letterSpacing: "3px" }} placeholder="Enter Student ID or Name" />
                            <button className="btn-success btn px-5 d-flex align-items-center gap-3">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard