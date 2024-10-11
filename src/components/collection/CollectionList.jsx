import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
  Box,
} from "@mui/material";
import { Download, MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function CollectionList() {
  // Dummy data for collection
  const collections = [
    {
      id: 1,
      listName: "All profiles",
      profiles: 1,
      lastUpdated: "11 Oct 2024",
      shared: false,
    },
    {
      id: 2,
      listName: "React Developer List",
      profiles: 1,
      lastUpdated: "11 Oct 2024",
      shared: true,
    },
  ];

  return (
    <TableContainer>
      <Table aria-label="Collection List Table">
        <TableHead>
          <TableRow>
            <TableCell>List Name</TableCell>
            <TableCell>Profiles</TableCell>
            <TableCell>Last Updated</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {collections.map((collection) => (
            <TableRow key={collection.id}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Link to="#" style={{ marginRight: 8 }}>
                    {collection.listName}
                  </Link>
                  {/* Display chain link icon if the list is shared */}
                  {collection.shared && (
                    <span
                      role="img"
                      aria-label="shared"
                      style={{ fontSize: "16px" }}
                    >
                      🔗
                    </span>
                  )}
                </Box>
              </TableCell>
              <TableCell>{collection.profiles}</TableCell>
              <TableCell>{collection.lastUpdated}</TableCell>
              <TableCell align="center">
                <IconButton>
                  <Download />
                </IconButton>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
