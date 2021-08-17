import { useTheme } from '@material-ui/core/styles';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './styles';

export const DrawerRoutes = ({ isOpen, setOpen }) => {
    const classes = useStyles();
    const theme = useTheme();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <BrowserRouter>
            <Drawer
                variant='permanent'
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: isOpen,
                        [classes.drawerClose]: !isOpen,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to='/users' style={{textDecoration:'none', color: '#fff'}}>
                        <ListItem button >
                            <ListItemIcon>{<InboxIcon style={{color: '#fff'}} />}</ListItemIcon>
                            <ListItemText primary='Users' />
                        </ListItem>
                    </Link>
                    <Link to='/clients' style={{textDecoration:'none', color: '#fff'}}>
                        <ListItem button >
                            <ListItemIcon>{<InboxIcon style={{color: '#fff'}} />}</ListItemIcon>
                            <ListItemText primary='Clients' />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <Switch>
                    <Route path='/Users' render={() => <h1 style={{margin: "30% 0% 30% 0%"}}>Post</h1>} />
                    <Route path='/Clients' render={() => <h1 style={{margin: "30% 0% 30% 0%"}}>Get</h1>} />
                </Switch>
            </main>
        </BrowserRouter>
    )
}