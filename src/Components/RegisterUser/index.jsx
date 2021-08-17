import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {axiosInstance} from "../../api";
import { useStyles } from "./styles";

export const RegisterUser = () => {
    const classes = useStyles();
    const [name, setName] = useState('');

    const handleName = e => setName(e.target.value);
    const postRequest = async () => {
        const resp = await axiosInstance.post("/api/user/register", { 'username': name });
        return console.log("response", resp)
    }

    return(
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-helperText"
                    label="Enter name"
                    variant="outlined"
                    onChange={handleName}
                />
                <Button
                    variant="contained" color="primary"
                    onClick={postRequest}
                    >
                    Primary
                </Button>

            </form>
        </>

    )
}