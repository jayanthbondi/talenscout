import {
  FormControl,
  OutlinedInput,
  Autocomplete,
  Button,
  Typography,
  Box,
  Chip,
  TextField,
} from "@mui/material";
import MultiSelect from "./MultiSelect";
import CurrentPastSelect from "./CurrentPastSelect";
import {
  jobTitles,
  industries,
  companySizes,
  excludeLists,
  genderOptions,
  yearsOfExperience,
  yearsInCurrentRole,
  locations,
  educationLevels,
} from "./Constants";
import { useState } from "react";
import SearchBarHeader from "./SearchBarHeader";
import { SearchOutlined } from "@mui/icons-material";
import SearchBarFooter from "./SearchBarFooter";

const SearchBar = () => {
  // State for various multi-select fields
  const [selectedJobTitles, setSelectedJobTitles] = useState([]);
  const [selectedCompanySizes, setSelectedCompanySizes] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedExcludeList, setSelectedExcludeList] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedYearsExperience, setSelectedYearsExperience] = useState([]);
  const [selectedYearsInCurrentRole, setSelectedYearsInCurrentRole] = useState(
    []
  );
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedEducation, setSelectedEducation] = useState([]);
  const [excludeJobTitles, setExcludeJobTitles] = useState([]);

  // Individual state for current/past dropdowns
  const [jobTitleCurrentPast, setJobTitleCurrentPast] = useState("current");
  const [companyCurrentPast, setCompanyCurrentPast] = useState("current");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgb(228, 228, 231)",
      }}
    >
      <Box
        sx={{
          height: "56px",
          borderBottom: "1px solid rgb(228, 228, 231)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SearchBarHeader />
      </Box>
      <Box sx={styles.container}>
        {/* Name */}
        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>Name</Typography>
          <OutlinedInput placeholder="e.g. John Smith" />
        </FormControl>

        {/* Job Title and Current/Past Dropdown */}
        <Box sx={{ position: "relative" }}>
          <FormControl fullWidth variant="outlined" size="small">
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
          </FormControl>
          <Box sx={{ position: "absolute", right: "0", top: "0" }}>
            <CurrentPastSelect
              currentPastValue={jobTitleCurrentPast}
              setCurrentPastValue={setJobTitleCurrentPast}
            />
          </Box>
        </Box>

        {/* Seniority (not supported) - Removed */}

        {/* Skills */}
        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>Skills</Typography>
          <OutlinedInput placeholder="e.g. PHP" />
        </FormControl>

        {/* Years in Current Role */}
        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>Years in Current Role</Typography>
          <MultiSelect
            options={yearsInCurrentRole}
            selectedValues={selectedYearsInCurrentRole}
            setSelectedValues={setSelectedYearsInCurrentRole}
            placeholder="Select years in current role"
          />
        </FormControl>

        {/* Total Years of Experience */}
        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>Total Years of Experience</Typography>
          <MultiSelect
            options={yearsOfExperience}
            selectedValues={selectedYearsExperience}
            setSelectedValues={setSelectedYearsExperience}
            placeholder="Select experience range"
          />
        </FormControl>

        {/* Location */}
        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>Location</Typography>
          <MultiSelect
            options={locations}
            selectedValues={selectedLocation}
            setSelectedValues={setSelectedLocation}
            placeholder="Select location"
          />
        </FormControl>

        {/* Company and Current/Past Dropdown */}
        <Box sx={{ position: "relative" }}>
          <FormControl fullWidth variant="outlined" size="small">
            <Typography sx={styles.label}>Company</Typography>
            <Autocomplete
              multiple
              options={["IBM", "Google", "Meta"]}
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
                  placeholder="e.g. Google"
                  size="small"
                />
              )}
            />
          </FormControl>
          <Box sx={{ position: "absolute", right: "0", top: "0" }}>
            <CurrentPastSelect
              currentPastValue={companyCurrentPast}
              setCurrentPastValue={setCompanyCurrentPast}
            />
          </Box>
        </Box>

        {/* Company Size */}
        <FormControl fullWidth variant="outlined" size="small">
          <Typography sx={styles.label}>Company size</Typography>
          <MultiSelect
            options={companySizes}
            selectedValues={selectedCompanySizes}
            setSelectedValues={setSelectedCompanySizes}
            placeholder="Select company size"
          />
        </FormControl>

        {/* Industry */}
        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>Industry</Typography>
          <MultiSelect
            options={industries}
            selectedValues={selectedIndustries}
            setSelectedValues={setSelectedIndustries}
            placeholder="Select industry"
          />
        </FormControl>

        {/* Exclude List */}
        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>Exclude list</Typography>
          <MultiSelect
            options={excludeLists}
            selectedValues={selectedExcludeList}
            setSelectedValues={setSelectedExcludeList}
            placeholder="Select exclusions"
          />
        </FormControl>

        {/* Gender */}
        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>Gender</Typography>
          <MultiSelect
            options={genderOptions}
            selectedValues={selectedGender}
            setSelectedValues={setSelectedGender}
            placeholder="Select gender"
          />
        </FormControl>

        {/* Department */}
        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>Department</Typography>
          <OutlinedInput placeholder="e.g. Sales" />
        </FormControl>

        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>Keyword</Typography>
          <OutlinedInput placeholder="e.g. Founder" />
        </FormControl>

        {/* School */}
        <FormControl
          fullWidth
          sx={styles.input}
          variant="outlined"
          size="small"
        >
          <Typography sx={styles.label}>School/Degree</Typography>
          <OutlinedInput placeholder="e.g. UC Berkely" />
        </FormControl>

        {/* Search Button */}
      </Box>
      <Box
        sx={{ padding: "15px 15px", borderTop: "1px solid rgb(228, 228, 231)" }}
      >
        <SearchBarFooter />
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    height: "calc(100vh - 100px - 66px)",
    width: "320px",
    padding: "10px",
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
    //  ,
    // marginTop: "10px",
  },
};

export default SearchBar;
