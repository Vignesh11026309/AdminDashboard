import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import WebIcon from "@mui/icons-material/Web";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SpaIcon from '@mui/icons-material/Spa';
import Collapse from "@mui/material/Collapse";
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';

const drawerWidth = 300;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const icons = [<WebIcon />,<ListIcon />,<AutoAwesomeMosaicIcon />,<ChatIcon />];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 
  const drawer = (
    <div style={{background:'#448AFF', height:'-webkit-fill-available '}}>
      <List style={{marginTop:'6.5px'}}>
      <ListItemButton style={{fontSize:'24px'}}>
      <SpaIcon style={{margin:'0 32px 0 0'}}/> <span>Admin</span>
      </ListItemButton>
</List>
<Divider/>

      <List>
        <ListItemButton onClick={handleDrawerToggle}>
          <ListItemText primary="PAGES" />
          {mobileOpen ? <ExpandMoreIcon /> : <KeyboardArrowLeftIcon />}{" "}
        </ListItemButton>
        <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {["Dashboard", "Fixed Chart", "Grid", "Chat"].map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                   <ListItemIcon>
            {icons[index % icons.length]} 
          </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        <ListItemButton>
          <ListItemText primary="CHARTS" />
          {mobileOpen ? <ExpandMoreIcon /> : <KeyboardArrowLeftIcon />}{" "}
         
        </ListItemButton>
        
      </List>
      <Divider />
      <List>
        <ListItemButton>
          <ListItemText primary="TABLES" />
          {mobileOpen ? <ExpandMoreIcon /> : <KeyboardArrowLeftIcon />}{" "}
        </ListItemButton>
       
      </List>
      <Divider />
      <List>
        <ListItemButton >
          <ListItemText primary="CALENDAR" />
          {mobileOpen ? <ExpandMoreIcon /> : <KeyboardArrowLeftIcon />}{" "}
        </ListItemButton>
        
      </List>
      <Divider />
      <List>
        <ListItemButton >
          <ListItemText primary="HEADERS" />
          {mobileOpen ? <ExpandMoreIcon /> : <KeyboardArrowLeftIcon />}{" "}
        </ListItemButton>
        
      </List>
      <Divider />
      <List>
        <ListItemButton>
          <ListItemText primary="ACCOUNT" />
          {mobileOpen ? <ExpandMoreIcon /> : <KeyboardArrowLeftIcon />}{" "}
        </ListItemButton>
        <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
        </Collapse>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      ></AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
