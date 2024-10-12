import { Box } from "@mui/material";
import CollectionHeader from "../components/collection/CollectionHeader";
import CollectionList from "../components/collection/CollectionList";

const CollectionPage = () => {
  return (
    <Box height="100vh">
      <Box
        sx={{ height: "56px", borderBottom: "1px solid rgb(228, 228, 231)" }}
      >
        <CollectionHeader />
      </Box>
      <Box height="calc(100vh - 56px)" overflow="auto">
        <CollectionList />
      </Box>
    </Box>
  );
};

export default CollectionPage;
