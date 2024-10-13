import React, { useState } from "react";
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
  Bookmark,
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
  const location = useLocation();

  const toggleDrawer = () => setOpen(!open);

  const isActive = (path) => location.pathname === path;

  return (
    <MuiDrawer
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        overflow: "hidden", // Prevent overflow issues
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : `calc(${theme.spacing(7)} + 1px)`,
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.enteringScreen
              : theme.transitions.duration.leavingScreen,
          }),
          overflow: "hidden", // Avoid scrollbar
        },
      }}
    >
      <List>
        {menuItems.map(({ path, icon: Icon, label }) => (
          <ListItem
            key={path}
            button
            component={Link}
            to={path}
            sx={{
              display: "flex",
              gap: "10px",
              padding: "8px",
              backgroundColor: isActive(path)
                ? theme.palette.primary.light
                : "transparent",
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
              color: isActive(path)
                ? theme.palette.primary.main
                : theme.palette.grey[700],
              whiteSpace: "nowrap", // Prevent text overflow
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "auto",
                color: isActive(path)
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
                  color: isActive(path)
                    ? theme.palette.primary.main
                    : theme.palette.grey[700],
                }}
              />
            )}
          </ListItem>
        ))}
      </List>

      {/* Spacer to push the toggle button to the bottom */}
      <Box sx={{ flexGrow: 1 }} />

      {/* Toggle Drawer Button */}
      <Box sx={{ textAlign: "center", py: 2 }}>
        <IconButton
          onClick={toggleDrawer}
          sx={{
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
            color: theme.palette.grey[700],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {open ? (
            <ChevronLeft sx={{ fontSize: 30 }} />
          ) : (
            <ChevronRight sx={{ fontSize: 30 }} />
          )}
        </IconButton>
      </Box>
    </MuiDrawer>
  );
};

const menuItems = [
  { path: "/search", icon: Search, label: "Search" },
  { path: "/collection", icon: Collections, label: "Collections" },
  { path: "/profile", icon: Person, label: "Profile" },
  { path: "/saved-searches", icon: Bookmark, label: "Saved" },
  { path: "/logout", icon: ExitToApp, label: "Logout" },
];

export default Sidebar;
