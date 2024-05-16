import { Box, Paper, Typography } from "@mui/material"
import NewTraining from "../components/NewTraining"
import Breadcrump from "../components/ui/Breadcrump"
import SearchBar from "../components/ui/SearchBar"

function Training() {
    return (
        <>
            {/* Breadcrump */}
            <Breadcrump current={["Dashboard", "Training"]} />

            {/* Training Heading */}
            <div className="d-flex align-items-center justify-content-between mt-5 ">
                <h2 style={{ letterSpacing: "5px" }}>Training</h2>
                <div className="d-flex  gap-2 w-50" >
                    <SearchBar place="Training ID" />
                </div>
                <div className="d-flex me-5">
                    <NewTraining />
                </div>
            </div>

            {/* View Training */}
            <div className="mt-5 ">
                <div className="row">
                    <div className="col-md-4">
                        <Box component={Paper} elevation={16}>
                            <Typography>T ID <span style={{ color: "grey" }}>T101</span></Typography>
                        </Box>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}

export default Training