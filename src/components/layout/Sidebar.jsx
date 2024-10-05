import { List, ListItem, ListItemIcon } from "@mui/material";
import {
  Search,
  Collections,
  Person,
  Bookmark,
  ExitToApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

// Todo Set the font sizes

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <List>
        <ListItem
          button
          component={Link}
          to="/search"
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ListItemIcon sx={{ minWidth: "unset" }}>
            <Search style={{ fontSize: 400 }} /> {/* Forced font size */}
          </ListItemIcon>
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/collection"
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ListItemIcon>
            <Collections sx={{ fontSize: 30 }} /> {/* Increased font size */}
          </ListItemIcon>
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/profile"
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ListItemIcon>
            <Person fontSize="medium" sx={{ fontSize: 30 }} />{" "}
            {/* Increased font size */}
          </ListItemIcon>
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/saved-searches"
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ListItemIcon>
            <Bookmark sx={{ fontSize: 30 }} /> {/* Increased font size */}
          </ListItemIcon>
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/logout"
          sx={{
            paddingLeft: 0,
            paddingRight: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ListItemIcon>
            <ExitToApp fontSize="medium" /> {/* Increased font size */}
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "50px",
    height: "100vh",
    padding: "0px",
    top: 0,
    left: 0,
    borderRight: "1px solid rgb(228 228 231)",
  },
};

export default Sidebar;
