import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Select,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  ListItemText,
  FormControlLabel,
  DialogContentText,
} from "@mui/material";
import {
  ArrowDropDown,
  ArrowLeft,
  ArrowRight,
  Save,
  Download,
  Close,
} from "@mui/icons-material";

export default function SearchResultHeader() {
  const [selectedProfiles, setSelectedProfiles] = useState(0);
  const [page, setPage] = useState(1);
  const totalProfiles = 23017;
  const profilesPerPage = 25;

  // Handlers for menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalProfiles / profilesPerPage)) {
      setPage(newPage);
    }
  };

  // State for dialog visibility
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      //   borderBottom="1px solid #e0e0e0"
      py={1}
      px={1}
    >
      {/* Left Section */}
      <Box display="flex" alignItems="center" gap={1}>
        {/* Checkbox with dropdown */}
        <Checkbox sx={{ margin: "0px" }} />
        <IconButton onClick={handleClick}>
          <ArrowDropDown />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Select all</MenuItem>
          <MenuItem onClick={handleClose}>Select none</MenuItem>
        </Menu>

        {/* Selected text */}
        <Typography>{selectedProfiles} selected</Typography>

        {/* Save Button */}
        <Button
          variant="contained"
          size="small"
          startIcon={<Save />}
          onClick={handleDialogOpen}
          sx={{ padding: "8px" }}
        >
          Save
        </Button>

        {/* Export button */}
        <Button
          variant="outlined"
          startIcon={<Download />}
          sx={{ padding: "8px" }}
        >
          Export
        </Button>
      </Box>

      {/* Right Section - Pagination */}
      <Box display="flex" alignItems="center" gap={1}>
        <Typography>{`1 - ${profilesPerPage} of ${totalProfiles.toLocaleString()} profiles`}</Typography>

        <IconButton
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          <ArrowLeft />
        </IconButton>

        <FormControl variant="outlined" size="small">
          <Select
            value={page}
            onChange={(e) => handlePageChange(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Page selector" }}
          >
            {Array.from(
              { length: Math.ceil(totalProfiles / profilesPerPage) },
              (_, i) => i + 1
            ).map((pg) => (
              <MenuItem key={pg} value={pg}>
                {pg}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <IconButton
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= Math.ceil(totalProfiles / profilesPerPage)}
        >
          <ArrowRight />
        </IconButton>
      </Box>

      {/* Save Dialog Popup */}
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          Bulk Save Profiles
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
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
          {/* Number of Profiles */}
          {/* <TextField
            margin="dense"
            id="numProfiles"
            label="Number of Profiles"
            type="number"
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          /> */}

          {/* List selection */}
          <FormControl fullWidth margin="dense">
            <Select displayEmpty defaultValue="">
              <MenuItem value="" disabled>
                Select or create new list
              </MenuItem>
              <MenuItem value="list1">List 1</MenuItem>
              <MenuItem value="list2">List 2</MenuItem>
            </Select>
          </FormControl>

          {/* Checkbox Options */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Save Personal Emails"
            />
            <FormControlLabel control={<Checkbox />} label="Save Work Emails" />
            <FormControlLabel
              control={<Checkbox />}
              label="Save Phone Numbers"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
