/* eslint-disable react/prop-types */
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Breadcrump({ current }) {
    return (
        <>
            <div className="d-flex flex-column w-100 mt-2" style={{ color: "#dde6ed" }}>
                <Stack spacing={2}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {
                            current.map((curr) => (
                                <Link underline="hover" key="1" color="inherit" href={`${curr.toLowerCase()}`} >
                                    {`${curr}`}
                                </Link>
                            ))
                        }
                    </Breadcrumbs>
                </Stack>
            </div>
        </>
    )
}

export default Breadcrump