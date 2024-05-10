
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

function NewStudent() {
    return (
        <>
            <Box sx={{ height: 810, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 20, right: 27 }}
                    icon={<SpeedDialIcon />}
                >
                </SpeedDial>
            </Box>

        </>
    )
}

export default NewStudent