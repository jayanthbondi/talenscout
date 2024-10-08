import { Select, MenuItem, FormControl } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { currentPastOptions } from "./Constants";

const CurrentPastSelect = ({ currentPastValue, setCurrentPastValue }) => {
  return (
    <FormControl size="small">
      <Select
        value={currentPastValue}
        onChange={(e) => setCurrentPastValue(e.target.value)}
        displayEmpty
        IconComponent={KeyboardArrowDownRoundedIcon}
        sx={{
          padding: "2px",
          color: "#70707B",
          border: "none", // No border
          boxShadow: "none", // No shadow
          "& fieldset": { border: "none" }, // Ensures border is removed in all states
          "& .MuiSelect-icon": {
            fontSize: "1.2rem", // Adjust icon size (change as per need)
          },
        }}
        size="small"
      >
        {currentPastOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrentPastSelect;
