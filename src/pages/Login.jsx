import { Box, Button, Paper, TextField } from "@mui/material"
import "../style/Login.css"
function Login() {


    return (
        <>
            <div className="d-flex justify-content-center align-items-center login">
                <Box component={Paper} elevation={5} className="w-25 d-flex rounded-3 py-5 justify-content-center align-items-center flex-column" >
                    <h3>Welcome Back</h3>
                    <form className="w-100 px-4" >
                        <TextField className="w-100 mt-3" id="outlined-basic" label="Username" variant="outlined" />
                        <TextField className="w-100 mt-3" type="password" id="outlined-basic" label="Password" variant="outlined" />
                        <div className="d-flex justify-content-evenly align-items-center gap-2 mt-3 ">
                            <Button className="w-100" type="submit" variant="contained">Submit</Button>
                            <Button className="w-100" type="reset" variant="outlined" >Reset</Button>
                        </div>
                    </form>
                </Box>
            </div>
        </>
    )
}

export default Login