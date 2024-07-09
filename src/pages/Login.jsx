import { Box, Button, Paper, TextField } from "@mui/material"
import "../style/Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { get_login_details } from "../services/allAPI";

function Login() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate()

    // Validation of Form 
    const Validate = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    //On Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password } = data


        const response = await get_login_details(username, password);

        if (response.status >= 200 && response.status < 300) {
            const access = response.data.access;
            if (access === "admin") {
                navigate("/student");
                alert("Welcome Admin");
            } else if (access === "employee") {
                navigate("/student");
                alert("Welcome Employee");
            }
        } else {
            alert("Invalid username or password");
            console.log(response);
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center login" >
                <Box component={Paper} elevation={5} className="w-25 d-flex rounded-3 py-4 justify-content-center align-items-center flex-column" >
                    <h3 style={{ letterSpacing: "5px" }}>Welcome Back</h3>
                    <form className="w-100 px-4" onSubmit={(e) => handleSubmit(e)}>
                        <TextField className="w-100 mt-3" name="username" label="Username" variant="outlined" onChange={Validate} />
                        <TextField className="w-100 mt-3" name="password" type="password" label="Password" variant="outlined" onChange={Validate} />
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