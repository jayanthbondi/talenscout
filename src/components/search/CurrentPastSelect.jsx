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
            fontSize: "1rem", // Adjust icon size (change as per need)
          },
          //   "& .MuiOutlinedInput-input": {
          //     fontSize: "10px",
          //   },
        }}
        size="small"
        // fontSize="2px"
        // variant="caption"
        // component="span"
      >
        {currentPastOptions.map((option) => (
          <MenuItem key={option.value} fontSize="5px" value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrentPastSelect;
