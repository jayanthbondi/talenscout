import {
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
  Box,
  Typography,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"; // Import the rounded

const MultiSelect = ({ options, selectedValues, setSelectedValues }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedValues(typeof value === "string" ? value.split(",") : value);
  };

  const handleDelete = (value) => {
    setSelectedValues((prev) => prev.filter((item) => item !== value));
  };

  const availableOptions = options.filter(
    (option) => !selectedValues.includes(option.value)
  ); // Filter out selected options

  return (
    <Select
      multiple
      value={selectedValues}
      IconComponent={KeyboardArrowDownRoundedIcon}
      sx={{
        "& .MuiSelect-icon": {
          fontSize: "1.2rem", // Adjust icon size (change as per need)
        },
      }}
      onChange={handleChange}
      input={<OutlinedInput />}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return (
            <Typography variant="placeholderText">Select options</Typography>
          );
        }
        return (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={options.find((option) => option.value === value).label}
                size="small"
                onMouseDown={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
                onDelete={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleDelete(value);
                }}
              />
            ))}
          </Box>
        );
      }}
      displayEmpty
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 300, // Adjust this value as needed
            overflowY: "scroll",
          },
        },
      }}
    >
      {availableOptions.length > 0 ? (
        availableOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))
      ) : (
        <MenuItem disabled>No options available</MenuItem>
      )}
    </Select>
  );
};

export default MultiSelect;
