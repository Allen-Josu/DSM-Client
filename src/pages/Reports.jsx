import SideBar from "../components/SideBar"
// import Breadcrump from "../components/ui/Breadcrump"

function Reports() {
    return (
        <>
            <div className="app-background">
                <SideBar />
                <div className="app-content">

                    {/* Breadcrump
                    <Breadcrump current={["Reports"]}/> */}

                    <div className="d-flex align-items-center mt-5 justify-content-between">
                        <h2 style={{ letterSpacing: "5px" }}>Reports </h2>
                        <h3 className="me-4"> <span style={{ color: "grey" }}>11 May 2024</span></h3>
                    </div>





                </div>
            </div>
        </>
    )
}

export default Reports