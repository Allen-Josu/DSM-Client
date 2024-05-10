import SideBar from "../components/SideBar"
import "../style/Dashboard.css"

function Dashboard() {
    return (
        <>
            <div className="dashboard">
                <SideBar />
                <div className="dashboard-content">
                    <h2>Dashboard</h2>
                </div>
            </div>
        </>
    )
}

export default Dashboard