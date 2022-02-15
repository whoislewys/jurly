import * as React from 'react';
import { 
  Typography, 
  makeStyles, 
  Box, 
  Button, 
  List, 
  Divider, 
  ListItem,
  SwipeableDrawer,
  ListItemText
} from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  drawerMenu: {
    width: 250
  }
}));

export default function DrawerMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    menu: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, "menu": open });
  };

  const list = () => (
    <Box
      className={classes.drawerMenu}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography variant="h4" className={classes.logo}>
        J
      </Typography>
      <Divider />
      <List>
        <ListItem button>
          <Link to="/">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/About">
            <ListItemText primary="About" />
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon/>
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={state["menu"]}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}