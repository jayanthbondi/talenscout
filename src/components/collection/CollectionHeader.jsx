import React, { useState } from "react";
import {
  Box,
  Button,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { SearchOutlined, Add, Close } from "@mui/icons-material";

export default function CollectionHeader() {
  const [activeTab, setActiveTab] = useState(0);
  const [openCreateList, setOpenCreateList] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpenCreateList = () => {
    setOpenCreateList(true);
  };

  const handleCloseCreateList = () => {
    setOpenCreateList(false);
  };

  const handleCreateList = () => {
    setOpenCreateList(false);
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      height="100%"
    >
      {/* Left Section: Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="Collection Tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "primary.main",
            height: "2px",
          },
        }}
        sx={{ alignSelf: "flex-end" }}
      >
        <Tab
          label="People Lists"
          sx={{
            textTransform: "none",
            color: activeTab === 0 ? "primary.main" : "#9e9e9e",
            fontWeight: activeTab === 0 ? "bold" : "normal",
          }}
        />
        <Tab
          label="Company Lists"
          sx={{
            textTransform: "none",
            color: activeTab === 1 ? "primary.main" : "#9e9e9e",
            fontWeight: activeTab === 1 ? "bold" : "normal",
          }}
        />
      </Tabs>

      {/* Middle Section: Search */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ gap: "20px" }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search for lists or profiles"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
          sx={{ width: 300 }}
        />

        {/* Right Section: Create List Button */}
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleOpenCreateList}
        >
          Create list
        </Button>
      </Box>

      {/* Create List Modal */}
      <Dialog
        open={openCreateList}
        onClose={handleCloseCreateList}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          Create a new list
          <IconButton
            aria-label="close"
            onClick={handleCloseCreateList}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="listName"
            type="text"
            fullWidth
            variant="outlined"
            placeholder="Enter list name"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreateList}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateList}>
            Create list
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar Alert for Success */}
      <Snackbar
        open={showSnackbar}
        // open
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          // variant="filled"
          sx={{ width: "100%" }}
        >
          List created successfully.
        </Alert>
      </Snackbar>
    </Box>
  );
}
