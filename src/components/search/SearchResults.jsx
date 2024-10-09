import { Box } from "@mui/material";
import CandidateList from "./CandidateList";

export default function SearchResults() {
  return (
    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <div
        style={{ height: "56px", borderBottom: "1px solid rgb(228, 228, 231)" }}
      ></div>
      <Box sx={{ height: "calc(100vh - 56px)", overflowY: "scroll" }}>
        <CandidateList />
      </Box>
    </div>
  );
}
