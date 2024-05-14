import AddFees from "../components/AddFees"
import FeesCard from "../components/FeesCard"
import SideBar from "../components/SideBar"
import Breadcrump from "../components/ui/Breadcrump"
import SearchBar from "../components/ui/SearchBar"

function Fees() {
    return (
        <>
            <div className="app-background">
                <SideBar />
                <div className="app-content">
                    {/* Dashboard Heading */}
                    <Breadcrump current={["Dashboard", "Fees"]} />
                    <div className="d-flex align-items-center justify-content-between mt-5">
                        <h2 style={{ letterSpacing: "5px" }}>Fees </h2>
                        <div className="d-flex  gap-2 w-50" >
                            <SearchBar place="Bill No" />
                        </div>
                        <div className="me-5">
                            <AddFees />
                        </div>
                    </div>

                    <div className="mt-5" style={{ display: "grid", gridTemplateColumns: "auto auto auto", gridGap: "1.5rem" }}>
                        <FeesCard />
                        <FeesCard />
                        <FeesCard />
                        <FeesCard />
                        <FeesCard />
                        <FeesCard />
                        <FeesCard />
                        <FeesCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fees