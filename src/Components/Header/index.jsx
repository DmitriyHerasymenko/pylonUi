import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./styles";


export const Header = ({isOpen, setOpen}) => {
    const classes = useStyles();
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: isOpen,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: isOpen,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    {isOpen ? <Typography variant="h6" noWrap>
                        Test
                    </Typography> : <></>}
                </Toolbar>
            </AppBar>
        </>
    )
}