import SideBar from "../components/SideBar"

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StudentCard from "../components/StudentCard";
import NewStudent from "../components/NewStudent";



function Student() {

    return (
        <>
            <div className="app-background" style={{ overflowX: "hidden" }}>
                <SideBar />
                <div className="app-content" style={{ overflowY: "auto" }} >
                    <div style={{ background: " #fff" }}>

                        {/* Breadcrump */}
                        <div className="d-flex flex-column w-100 mt-2" style={{ color: "#dde6ed" }}>
                            <Stack spacing={2}>
                                <Breadcrumbs
                                    separator={<NavigateNextIcon fontSize="small" />}
                                    aria-label="breadcrumb"
                                >
                                    <Link underline="hover" key="1" color="inherit" href="/dashboard" >
                                        Dashboard
                                    </Link>,
                                    <Typography key="3" color="text.primary">
                                        Student
                                    </Typography>,
                                </Breadcrumbs>
                            </Stack>
                        </div>


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