import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  Search,
  Collections,
  Person,
  Bookmark,
  ExitToApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 140;

const Sidebar = () => {
  const [open, setOpen] = useState(true); // By default expanded
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <MuiDrawer
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        ...(open && {
          width: drawerWidth,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }),
        ...(!open && {
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          overflowX: "hidden",
          width: `calc(${theme.spacing(7)} + 1px)`,
          "& .MuiDrawer-paper": {
            width: `calc(${theme.spacing(7)} + 1px)`,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
        }),
      }}
    >
      <IconButton
        onClick={toggleDrawer}
        sx={{ alignSelf: "center", marginTop: "10px" }}
      >
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      <List>
        <ListItem
          button
          component={Link}
          to="/search"
          sx={{ display: "flex", gap: "10px", padding: "8px 8px" }}
        >
          <ListItemIcon>
            <Search sx={{ fontSize: 30 }} />
          </ListItemIcon>
          {open && <ListItemText primary="Search" />}
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/collection"
          sx={{ display: "flex", gap: "10px", padding: "8px 8px" }}
        >
          <ListItemIcon>
            <Collections sx={{ fontSize: 30 }} />
          </ListItemIcon>
          {open && <ListItemText primary="Collections" />}
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/profile"
          sx={{ display: "flex", gap: "10px", padding: "8px 8px" }}
        >
          <ListItemIcon>
            <Person sx={{ fontSize: 30 }} />
          </ListItemIcon>
          {open && <ListItemText primary="Profile" />}
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/saved-searches"
          sx={{ display: "flex", gap: "10px", padding: "8px 8px" }}
        >
          <ListItemIcon>
            <Bookmark sx={{ fontSize: 30 }} />
          </ListItemIcon>
          {open && <ListItemText primary="Saved" />}
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/logout"
          sx={{ display: "flex", gap: "10px", padding: "8px 8px" }}
        >
          <ListItemIcon>
            <ExitToApp sx={{ fontSize: 30 }} />
          </ListItemIcon>
          {open && <ListItemText primary="Logout" />}
        </ListItem>
      </List>
    </MuiDrawer>
  );
};

export default Sidebar;
