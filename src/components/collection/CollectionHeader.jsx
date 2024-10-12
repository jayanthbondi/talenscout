import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  SearchOutlined,
  Add,
  Close,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";

export default function CollectionHeader() {
  const [openCreateList, setOpenCreateList] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage, setProfilesPerPage] = useState(25);
  const totalProfiles = 23017; // Dummy total profiles count

  const totalPages = Math.ceil(totalProfiles / profilesPerPage);

  const handleOpenCreateList = () => setOpenCreateList(true);
  const handleCloseCreateList = () => setOpenCreateList(false);
  const handleCreateList = () => {
    setOpenCreateList(false);
    setShowSnackbar(true);
  };
  const handleCloseSnackbar = () => setShowSnackbar(false);

  const handlePageChange = (event) => {
    setCurrentPage(parseInt(event.target.value, 10));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleProfilesPerPageChange = (event) => {
    setProfilesPerPage(event.target.value);
    setCurrentPage(1); // Reset to page 1 when changing profiles per page
  };

  const startIndex = (currentPage - 1) * profilesPerPage + 1;
  const endIndex = Math.min(startIndex + profilesPerPage - 1, totalProfiles);

  return (
    <Box
      display="flex"
      gap={2}
      px={2}
      py={1}
      height="100%"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search for lists"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
          sx={{ width: 300 }}
        />
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleOpenCreateList}
        >
          Create list
        </Button>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>
          {startIndex} - {endIndex} of {totalProfiles} profiles
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={handlePreviousPage} disabled={currentPage === 1}>
            <ArrowBack />
          </IconButton>

          <Select
            value={currentPage}
            onChange={handlePageChange}
            size="small"
            sx={{ minWidth: 60 }}
          >
            {Array.from({ length: totalPages }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>

          <IconButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <ArrowForward />
          </IconButton>
        </Box>

        <Select
          value={profilesPerPage}
          onChange={handleProfilesPerPageChange}
          size="small"
          sx={{ minWidth: 100 }}
        >
          {[25, 50, 100].map((size) => (
            <MenuItem key={size} value={size}>
              {size} per page
            </MenuItem>
          ))}
        </Select>
      </Box>

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

      <Snackbar
        open={showSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          List created successfully
        </Alert>
      </Snackbar>
    </Box>
  );
}
