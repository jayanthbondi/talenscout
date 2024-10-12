import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  MoreVert,
  Edit,
  Delete,
  Close,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function CollectionList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage, setProfilesPerPage] = useState(5);

  const collections = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    collectionName: `Collection ${index + 1}`,
    profiles: Math.floor(Math.random() * 100),
    lastUpdated: "11 Oct 2024",
    shared: Boolean(index % 2),
  }));

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentCollections = collections.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );
  const totalPages = Math.ceil(collections.length / profilesPerPage);

  const handlePageChange = (event, value) => setCurrentPage(value);
  const handleProfilesPerPageChange = (event) => {
    setProfilesPerPage(event.target.value);
    setCurrentPage(1);
  };

  const handleMoreClick = (event, collection) => {
    setAnchorEl(event.currentTarget);
    setSelectedCollection(collection);
  };

  const handleClose = () => setAnchorEl(null);

  const handleEditModalOpen = () => {
    setNewName(selectedCollection?.collectionName || "");
    setEditModalOpen(true);
    handleClose();
  };

  const handleDeleteModalOpen = (collection) => {
    setSelectedCollection(collection);
    setDeleteModalOpen(true);
    handleClose();
  };

  const handleEdit = () => setEditModalOpen(false);
  const handleDelete = () => setDeleteModalOpen(false);

  return (
    <Box>
      <TableContainer>
        <CollectionTable
          currentCollections={currentCollections}
          anchorEl={anchorEl}
          handleMoreClick={handleMoreClick}
          handleEditModalOpen={handleEditModalOpen}
          handleDeleteModalOpen={handleDeleteModalOpen}
          handleClose={handleClose}
        />
      </TableContainer>
      <PaginationSection
        currentPage={currentPage}
        totalPages={totalPages}
        profilesPerPage={profilesPerPage}
        collections={collections}
        handlePageChange={handlePageChange}
        handleProfilesPerPageChange={handleProfilesPerPageChange}
      />
      <EditModal
        open={editModalOpen}
        handleClose={() => setEditModalOpen(false)}
        newName={newName}
        setNewName={setNewName}
        handleEdit={handleEdit}
      />
      <DeleteConfirmationModal
        open={deleteModalOpen}
        handleClose={() => setDeleteModalOpen(false)}
        collectionName={selectedCollection?.collectionName}
        handleDelete={handleDelete}
      />
    </Box>
  );
}

function CollectionTable({
  currentCollections,
  anchorEl,
  handleMoreClick,
  handleEditModalOpen,
  handleDeleteModalOpen,
  handleClose,
}) {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">Collection Id</TableCell>
          <TableCell align="center">Collection Name</TableCell>
          <TableCell align="center">Profiles</TableCell>
          <TableCell align="center">Last Updated</TableCell>
          <TableCell align="center">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {currentCollections.map((collection) => (
          <TableRow key={collection.id}>
            <TableCell align="center">{collection.id}</TableCell>
            <TableCell align="center">
              <Link to="#" style={{ textDecoration: "none" }}>
                {collection.collectionName}
              </Link>
            </TableCell>
            <TableCell align="center">{collection.profiles}</TableCell>
            <TableCell align="center">{collection.lastUpdated}</TableCell>
            <TableCell align="center">
              <IconButton onClick={(e) => handleMoreClick(e, collection)}>
                <MoreVert />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                sx={{
                  "& .MuiPaper-root": {
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <List>
                  <ListItem
                    button
                    onClick={handleEditModalOpen}
                    sx={{ gap: 1, cursor: "pointer" }}
                  >
                    <ListItemIcon>
                      <Edit fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Edit" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => handleDeleteModalOpen(collection)}
                    sx={{ gap: 1, cursor: "pointer" }}
                  >
                    <ListItemIcon>
                      <Delete fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Delete" />
                  </ListItem>
                </List>
              </Popover>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function PaginationSection({
  currentPage,
  totalPages,
  profilesPerPage,
  collections,
  handlePageChange,
  handleProfilesPerPageChange,
}) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={2}
      gap={2}
    >
      <Typography>
        {currentPage * profilesPerPage - profilesPerPage + 1} -{" "}
        {Math.min(currentPage * profilesPerPage, collections.length)} of{" "}
        {collections.length} profiles
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton
          onClick={() => handlePageChange(null, currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowBack />
        </IconButton>
        <Select
          value={currentPage}
          onChange={(e) => handlePageChange(e, parseInt(e.target.value, 10))}
          size="small"
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              {i + 1}
            </MenuItem>
          ))}
        </Select>
        <IconButton
          onClick={() => handlePageChange(null, currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowForward />
        </IconButton>
      </Box>
      <Select
        value={profilesPerPage}
        onChange={handleProfilesPerPageChange}
        size="small"
      >
        {[5, 10, 15, 20].map((size) => (
          <MenuItem key={size} value={size}>
            {size} per page
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

function EditModal({ open, handleClose, newName, setNewName, handleEdit }) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        Edit Collection Name
        <IconButton
          onClick={handleClose}
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
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleEdit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function DeleteConfirmationModal({
  open,
  handleClose,
  collectionName,
  handleDelete,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Delete Collection
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        Are you sure you want to delete the collection "{collectionName}"?
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
