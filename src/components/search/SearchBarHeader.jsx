import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Button } from "@mui/material";

export default function SearchBarHeader() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "0px 10px",
        // borderBottom: "1px solid #e0e0e0",
      }}
    >
      {/* Tabs Section */}
      <Box sx={{ alignSelf: "flex-end" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="search tabs"
          TabIndicatorProps={{
            style: {
              backgroundColor: "primary.main", // Set the indicator color
              height: "2px", // Indicator thickness
            },
          }}
        >
          <Tab
            label="People"
            sx={{
              textTransform: "none",
              color: selectedTab === 0 ? "primary.main" : "#9e9e9e", // Active vs Inactive
              fontWeight: selectedTab === 0 ? "bold" : "normal",
            }}
          />
          {/* <Tab
            label="Companies"
            sx={{
              textTransform: "none",
              color: selectedTab === 1 ? "primary.main" : "#9e9e9e", // Active vs Inactive
              fontWeight: selectedTab === 1 ? "bold" : "normal",
            }}
          /> */}
          {/* color: "primary.main", */}
        </Tabs>
      </Box>

      {/* Clear All Section */}
      <Typography
        sx={{
          color: "primary.main", // Light grey for "Clear all"
          cursor: "pointer",
          fontWeight: "normal",
          fontSize: "small",
        }}
        onClick={() => {
          console.log("Clear all clicked");
        }}
      >
        Clear all
      </Typography>
    </Box>
  );
}
