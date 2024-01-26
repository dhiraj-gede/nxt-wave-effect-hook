import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import MuiAppBar from "@mui/material/AppBar";
import { useTheme } from "@emotion/react";
import SideBarLeft from "../SideBarLeft";

const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));
const navItems = ["Home", "About", "Contact"];

export default function NavBar({
  open,
  window,
  isClosing,
  handleDrawerClose,
  handleDrawerTransitionEnd,
}) {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      <AppBar position="fixed" color="secondary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,
    }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" }, mr: 2 }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Box sx={{ sm: { paddingLeft: "14rem" }, xs: { paddingLeft: 0 } }}>
              React Effect Hook Course
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <SideBarLeft
        handleDrawerOpen={handleDrawerToggle}
        open={open}
        isClosing={isClosing}
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleDrawerToggle={handleDrawerToggle}
      />
    </React.Fragment>
  );
}
