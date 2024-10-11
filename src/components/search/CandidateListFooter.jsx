import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function CandidateListFooter() {
  const totalProfiles = 533;
  const profilesPerPage = 25;
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalProfiles / profilesPerPage)) {
      setPage(newPage);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={2}
      py={1}
      //   borderTop="1px solid #e0e0e0"
    >
      {/* Left Section */}
      <Typography>{`1 - ${profilesPerPage} of ${totalProfiles} profiles`}</Typography>

      {/* Right Section - Pagination */}
      <Box display="flex" alignItems="center" gap={1}>
        {/* Previous Page Button */}
        <IconButton
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          size="small"
        >
          <ArrowLeft />
        </IconButton>

        {/* Page Selector */}
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

        {/* Next Page Button */}
        <IconButton
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= Math.ceil(totalProfiles / profilesPerPage)}
          size="small"
        >
          <ArrowRight />
        </IconButton>
      </Box>
    </Box>
  );
}
