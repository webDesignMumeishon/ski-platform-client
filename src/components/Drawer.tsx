import * as React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { redirect } from "react-router-dom";

import { capitalizeFirstLetter } from "../utils/handleWords";
import navbarItems from "./const/navbar";
import userItems from "./const/user";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project
   */
  window?: () => Window;
}

function ResponsiveDrawer(props: Props) {
  const { window } = props;

  const { state, center } = useParams();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selected, setSeletected] = React.useState("report");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // This is for when refresing the page it navigates to the /path in the state
  React.useEffect(() => {
    redirect(selected);
  }, [selected]);

  const seletedDrawer = {
    "&.MuiButtonBase-root": {
      backgroundColor: "#F5F5F5",
      color: "#000",
    },
  };

  const drawer = (
    <div>
      <Toolbar />
      <p color="#243648" style={{ color: "#f7f7f88c", padding: "10px" }}>
        {capitalizeFirstLetter(center)}, {capitalizeFirstLetter(state)}
      </p>
      <Divider sx={{ backgroundColor: "#f7f7f88c" }} />
      <List>
        {navbarItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={selected === item.route ? seletedDrawer : {}}
              onClick={() => {
                console.log('Working', item.route)
                // redirect(item.route);
                setSeletected(item.route);
                handleDrawerToggle();
              }}
            >
              <ListItemIcon
                sx={selected === item.route ? {} : { color: "#FFF" }}
              >
                {item.Icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "#f7f7f88c" }} />
      <List>
        {userItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#FFF" }}>{item.Icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" }, left: "5%", top: "55px" }}
      >
        <MenuIcon />
      </IconButton>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              // These are the styles props for the hidden drawer
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#24292f",
                color: "#FFF",
                borderRight: "2px solid #f7f7f88c",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            // These re the style props for the permanent drawer in full screen sizes
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                backgroundColor: "#24292f",
                color: "#FFF",
                width: drawerWidth,
                zIndex: 0,
                borderRight: "2px solid #f7f7f88c",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            padding: "15px",
          }}
        >
          {/* This is to display the child */}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
