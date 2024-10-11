import React, { useState } from "react";
import {
  Button,
  Box,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  List,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";
import {
  SearchOutlined,
  Bookmark,
  Close,
  ArrowDropDown,
} from "@mui/icons-material";

export default function SearchBarFooter() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSaveSearch, setOpenSaveSearch] = useState(false);
  const [openSavedSearches, setOpenSavedSearches] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // For filtering saved searches
  const [savedSearches, setSavedSearches] = useState([
    "test",
    "example search",
  ]); // Example saved searches

  // Handle menu open/close
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Modal open/close handlers
  const handleSaveSearchOpen = () => {
    setOpenSaveSearch(true);
  };

  const handleSaveSearchClose = () => {
    setOpenSaveSearch(false);
  };

  const handleSavedSearchesOpen = () => {
    setOpenSavedSearches(true);
  };

  const handleSavedSearchesClose = () => {
    setOpenSavedSearches(false);
  };

  // Handle search term changes for filtering saved searches
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle clicking on a saved search
  const handleSavedSearchClick = (search) => {
    console.log("Selected search:", search); // Perform actions based on the selected search
    handleSavedSearchesClose(); // Close the modal after selecting
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      gap={1}
    >
      {/* Search Button */}
      <Button
        startIcon={<SearchOutlined />}
        variant="contained"
        color="primary"
        fullWidth
      >
        Search
      </Button>

      {/* Saved Searches Dropdown */}
      <Box display="flex" width="100%" justifyContent="space-between">
        <Box display="flex">
          <Button
            startIcon={<Bookmark />}
            // endIcon={<ArrowDropDown />}
            onClick={handleSavedSearchesOpen}
            // type="link"
            variant="text"
          >
            Saved searches
          </Button>
          {/* <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleSavedSearchesOpen}>
              My saved searches ({savedSearches.length})
            </MenuItem>
          </Menu> */}
        </Box>

        {/* Save Search Button */}
        <Button
          variant="outlined"
          sx={{ padding: "0px 15px", fontSize: "0.75rem" }}
          size="small"
          onClick={handleSaveSearchOpen}
        >
          Save search
        </Button>
      </Box>

      {/* Save Search Modal */}
      <Dialog
        open={openSaveSearch}
        onClose={handleSaveSearchClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          Save your search
          <IconButton
            onClick={handleSaveSearchClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            variant="outlined"
            placeholder="Enter a name for this search"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveSearchClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveSearchClose}>
            Save search
          </Button>
        </DialogActions>
      </Dialog>

      {/* Saved Searches Modal */}
      <Dialog
        open={openSavedSearches}
        onClose={handleSavedSearchesClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          My Saved Searches
          <IconButton
            onClick={handleSavedSearchesClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            variant="outlined"
            placeholder="Find saved searches"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          {/* Display filtered saved searches */}
          <List>
            {savedSearches
              .filter((search) =>
                search.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((search) => (
                <ListItem
                  button
                  key={search}
                  onClick={() => handleSavedSearchClick(search)}
                >
                  <ListItemText primary={search} />
                </ListItem>
              ))}
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
