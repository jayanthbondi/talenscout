import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer as MuiDrawer,
} from "@mui/material";
import {
  Search,
  Collections,
  Person,
  // Bookmark,
  ExitToApp,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 140;

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  const toggleDrawer = () => setOpen(!open);

  return (
    <MuiDrawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
        flexShrink: 0,
        whiteSpace: "nowrap",
        overflow: "hidden",
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.enteringScreen
              : theme.transitions.duration.leavingScreen,
          }),
          overflow: "hidden",
        },
      }}
    >
      <MenuItemsList open={open} />
      <Box sx={{ flexGrow: 1 }} />
      <DrawerToggle open={open} toggleDrawer={toggleDrawer} />
    </MuiDrawer>
  );
};

const MenuItemsList = ({ open }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <List>
      {menuItems.map(({ path, icon: Icon, label }) => (
        <ListItemLink
          key={path}
          path={path}
          icon={Icon}
          label={label}
          isActive={isActive(path)}
          open={open}
        />
      ))}
    </List>
  );
};

const ListItemLink = ({ path, icon: Icon, label, isActive, open }) => {
  const theme = useTheme();

  return (
    <ListItem
      button
      component={Link}
      to={path}
      sx={{
        display: "flex",
        gap: "10px",
        padding: "8px",
        backgroundColor: isActive ? theme.palette.primary.light : "transparent",
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
        },
        color: isActive ? theme.palette.primary.main : theme.palette.grey[700],
        whiteSpace: "nowrap",
        height: "45px",
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: "auto",
          color: isActive
            ? theme.palette.primary.main
            : theme.palette.grey[700],
        }}
      >
        <Icon sx={{ fontSize: 30 }} />
      </ListItemIcon>
      {open && (
        <ListItemText
          primary={label}
          sx={{
            color: isActive
              ? theme.palette.primary.main
              : theme.palette.grey[700],
          }}
        />
      )}
    </ListItem>
  );
};

const DrawerToggle = ({ open, toggleDrawer }) => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "center", py: 2 }}>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          backgroundColor: "transparent",
          color: theme.palette.grey[700],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        {open ? (
          <ChevronLeft sx={{ fontSize: 30 }} />
        ) : (
          <ChevronRight sx={{ fontSize: 30 }} />
        )}
      </IconButton>
    </Box>
  );
};

const menuItems = [
  { path: "/search", icon: Search, label: "Search" },
  { path: "/collection", icon: Collections, label: "Collections" },
  { path: "/profile", icon: Person, label: "Profile" },
  // { path: "/saved-searches", icon: Bookmark, label: "Saved" },
  { path: "/logout", icon: ExitToApp, label: "Logout" },
];

export default Sidebar;
