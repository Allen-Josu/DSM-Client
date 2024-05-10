import SideBar from "../components/SideBar"

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function StudentDetails() {
  return (
    <>
      <div className="app-background">
        <SideBar />
        <div className="app-content">
          {/* BreadCrump */}
          <div className="d-flex flex-column w-100 mt-2" style={{ color: "#dde6ed" }}>
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <Link underline="hover" key="1" color="inherit" path="/dashboard" >
                  Dashboard
                </Link>,
                <Link underline="hover" key="1" color="inherit" path="/student" >
                  Student
                </Link>,
                <Typography key="3" color="text.primary">
                  Student Details
                </Typography>,
              </Breadcrumbs>
            </Stack>
          </div>

          <div className="d-flex align-items-center mt-4 justify-content-between">
            <h2 style={{ letterSpacing: "5px" }}>Student Details </h2>
            <p className="fs-3 me-5">Admission No <span style={{ color: "grey" }}>1001</span></p>
          </div>




        </div>
      </div>
    </>
  )
}

export default StudentDetails