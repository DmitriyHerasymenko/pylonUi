import { useState } from 'react';
import  { Header} from '../Header';
import { DrawerRoutes } from './DrawerRouter';
import { useStyles } from './styles';



export const MiniDrawer = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            <Header isOpen={open} setOpen={setOpen} />
            <DrawerRoutes isOpen={open} setOpen={setOpen} />
        </div>
    );
}