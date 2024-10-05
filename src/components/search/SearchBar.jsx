import {
  FormControl,
  OutlinedInput,
  Autocomplete,
  Button,
  Select,
  MenuItem,
  Checkbox,
  Typography,
  Box,
  TextField,
  Chip,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

// Dummy options for autocomplete and dropdowns
const jobTitles = ["Software Engineer", "Data Scientist", "Product Manager"];
const locations = ["San Francisco", "New York", "Los Angeles"];
const industries = ["Defense & Space", "Healthcare", "Finance"];
const companySizes = ["1-10", "11-50", "51-200", "201-500"];
const experienceRanges = ["1-3 years", "3-5 years", "5-10 years", "10+ years"];
const revenueRanges = [
  { min: "$Min", max: "$Max" }, // Placeholder, could be modified with actual values
];
const genderOptions = ["Male", "Female", "Other"];
const excludeLists = ["Shortlisted", "Rejected", "Favorites"];

const SearchBar = () => {
  return (
    <Box sx={styles.container}>
      {/* Name */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Name</Typography>
        <OutlinedInput placeholder="e.g. John Smith" />
      </FormControl>

      {/* Job Title */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Job title</Typography>
        <Autocomplete
          multiple
          options={jobTitles}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                key={option}
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder={
                params.InputProps.startAdornment?.length
                  ? ""
                  : "Enter job title or boolean query"
              }
              size="small"
            />
          )}
        />
        <Box sx={styles.checkboxes}>
          <FormControl>
            <Checkbox size="small" /> Include related titles
          </FormControl>
          <FormControl>
            <Checkbox size="small" /> Exclude job titles
          </FormControl>
        </Box>
      </FormControl>
      {/* Seniority */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Seniority</Typography>
        <Select defaultValue="">
          <MenuItem value="junior">Junior</MenuItem>
          <MenuItem value="mid">Mid</MenuItem>
          <MenuItem value="senior">Senior</MenuItem>
          <MenuItem value="lead">Lead</MenuItem>
        </Select>
      </FormControl>

      {/* Skills */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Skills</Typography>
        <OutlinedInput placeholder="e.g. PHP" />
      </FormControl>

      {/* Years in Current Role */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Years in current role</Typography>
        <Select defaultValue="">
          {experienceRanges.map((range, index) => (
            <MenuItem key={index} value={range}>
              {range}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Total Years of Experience */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Total years of experience</Typography>
        <Select defaultValue="">
          {experienceRanges.map((range, index) => (
            <MenuItem key={index} value={range}>
              {range}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Location */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Location</Typography>
        <Autocomplete
          fullWidth
          options={locations}
          renderInput={(params) => (
            <OutlinedInput
              {...params.InputProps}
              placeholder="e.g. Sydney, Australia"
            />
          )}
        />
        <Select defaultValue="">
          <MenuItem value="0-10">Within 10 miles</MenuItem>
          <MenuItem value="10-20">Within 20 miles</MenuItem>
          <MenuItem value="20-50">Within 50 miles</MenuItem>
        </Select>
      </FormControl>

      {/* Company */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Company</Typography>
        <OutlinedInput placeholder="e.g. Contactout" />
        <FormControl>
          <Checkbox size="small" /> Exclude companies
        </FormControl>
      </FormControl>

      {/* Company Size */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Company size</Typography>
        <Select defaultValue="">
          {companySizes.map((size, index) => (
            <MenuItem key={index} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Revenue */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Revenue</Typography>
        <Box sx={styles.revenueContainer}>
          <OutlinedInput placeholder="$Min" sx={styles.revenueInput} />
          <Typography sx={styles.toText}>to</Typography>
          <OutlinedInput placeholder="$Max" sx={styles.revenueInput} />
        </Box>
      </FormControl>

      {/* Industry */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Industry</Typography>
        <Autocomplete
          fullWidth
          options={industries}
          renderInput={(params) => (
            <OutlinedInput
              {...params.InputProps}
              placeholder="Select industry"
            />
          )}
        />
      </FormControl>

      {/* Exclude List */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Exclude list</Typography>
        <Select defaultValue="">
          {excludeLists.map((list, index) => (
            <MenuItem key={index} value={list}>
              {list}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Gender */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Gender</Typography>
        <Select defaultValue="">
          {genderOptions.map((gender, index) => (
            <MenuItem key={index} value={gender}>
              {gender}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Department */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Department</Typography>
        <OutlinedInput placeholder="e.g. C Suite" />
      </FormControl>

      {/* Keyword */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>Keyword</Typography>
        <OutlinedInput placeholder="e.g. Founder" />
      </FormControl>

      {/* School/Degree */}
      <FormControl fullWidth sx={styles.input} variant="outlined" size="small">
        <Typography sx={styles.label}>School/Degree</Typography>
        <OutlinedInput placeholder="e.g. UC Berkeley" />
      </FormControl>

      {/* Search Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={styles.searchButton}
      >
        Search
      </Button>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    height: "100vh",
    width: "320px",
    padding: "10px",
    borderRight: "1px solid rgb(228, 228, 231)",
    overflowY: "auto",
  },
  input: {
    marginBottom: "10px",
  },
  label: {
    marginBottom: "4px",
    fontWeight: "500",
    color: "rgb(63 63 70)",
  },
  searchButton: {
    marginTop: "10px",
  },
  revenueContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  revenueInput: {
    width: "45%",
  },
  toText: {
    alignSelf: "center",
  },
  checkboxes: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5px",
  },
};

export default SearchBar;
