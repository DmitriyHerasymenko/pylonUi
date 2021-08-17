import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'
import {axiosInstance} from "../../api";
import { useStyles } from "./styles";

export const RegisterUser = ({ loader }) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [openInfo, setOpenInfo] = useState(['success', false])
    const [infoMsg, setInfoMsg] = useState('')
    const [error, serError] = useState(false)

    const handleName = e => setName(e.target.value);
    const handleClose = e => setOpenInfo(false);
    const postRequest = async () => {
        if (name === '') {
            serError(true)
            setInfoMsg('You must enter a name, it must be like user')
            setName('')
            setOpenInfo(['error', true])
            return
        }
        loader(true)
        const resp = await axiosInstance.post("/api/user/register", { 'username': name });
        if (resp.data.status === 200) {
            loader(false)
            setInfoMsg(resp.data.message)
            setOpenInfo(['error', true]);
            return
        }

        if (resp.data.status === 400) {
            loader(false)
            setInfoMsg(resp.data.message)
            setOpenInfo(['error', true]);
            return
        }

        if (resp.data.status === 401) {
            loader(false)
            setInfoMsg(resp.data.message)
            setOpenInfo(['error', true]);
            return
        }
        if (resp.data.status === 403) {
            loader(false)
            setInfoMsg(resp.data.message)
            setOpenInfo(['error', true]);
            return
        }
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
                <Snackbar open={openInfo[1]} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                    <Alert onClose={handleClose} severity={openInfo[0]} >
                        {infoMsg}
                    </Alert>
                </Snackbar>
            </form>
        </>

    )
}