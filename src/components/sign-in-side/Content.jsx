// import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";

// import { SitemarkIcon } from "./CustomIcons"; // If you have custom icons

const items = [
  {
    icon: <SearchRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Powerful Search",
    description:
      "Find candidates with precision using advanced filters and real-time search capabilities.",
  },
  {
    icon: <CollectionsRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Smart Collections",
    description:
      "Organize candidates into collections to easily manage and track your hiring pipelines.",
  },
  {
    icon: <PermContactCalendarRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Seamless Contact Pull",
    description:
      "Pull contact details instantly and reuse them without exceeding your credit limits.",
  },
  {
    icon: <BookmarkRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Save and Track",
    description:
      "Save your searches and track key candidates effortlessly with bookmark functionality.",
  },
];

export default function Content() {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        alignSelf: "center",
        gap: 4,
        maxWidth: 450,
      }}
    >
      {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <SitemarkIcon />
      </Box> */}
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: "medium" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
