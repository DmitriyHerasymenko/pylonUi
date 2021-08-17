import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '40%',
        marginTop: '15%'
    },

}));