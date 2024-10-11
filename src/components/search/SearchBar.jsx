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
  seniorityLevels,
  excludeLists,
  genderOptions,
} from "./Constants";
import { useState } from "react";
import SearchBarHeader from "./SearchBarHeader";
import { SearchOutlined } from "@mui/icons-material";
import SearchBarFooter from "./SearchBarFooter";

const SearchBar = () => {
  // State for various multi-select fields
  const [selectedSeniority, setSelectedSeniority] = useState([]);
  const [selectedCompanySizes, setSelectedCompanySizes] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedExcludeList, setSelectedExcludeList] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);

  // Individual state for current/past dropdowns
  const [jobTitleCurrentPast, setJobTitleCurrentPast] = useState("current");
  const [seniorityCurrentPast, setSeniorityCurrentPast] = useState("current");
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

        {/* Seniority and Current/Past Dropdown */}
        <Box sx={{ position: "relative" }}>
          <FormControl fullWidth variant="outlined" size="small">
            <Typography sx={styles.label}>Seniority</Typography>
            <MultiSelect
              options={seniorityLevels}
              selectedValues={selectedSeniority}
              setSelectedValues={setSelectedSeniority}
              placeholder="Select seniority levels"
            />
          </FormControl>
          <Box sx={{ position: "absolute", right: "0", top: "0" }}>
            <CurrentPastSelect
              currentPastValue={seniorityCurrentPast}
              setCurrentPastValue={setSeniorityCurrentPast}
            />
          </Box>
        </Box>

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

        {/* Company Size and Current/Past Dropdown */}
        <Box sx={{ position: "relative" }}>
          <FormControl fullWidth variant="outlined" size="small">
            <Typography sx={styles.label}>Company size</Typography>
            <MultiSelect
              options={companySizes}
              selectedValues={selectedCompanySizes}
              setSelectedValues={setSelectedCompanySizes}
              placeholder="Select company size"
            />
          </FormControl>
          <Box sx={{ position: "absolute", right: "0", top: "0" }}>
            <CurrentPastSelect
              currentPastValue={companyCurrentPast}
              setCurrentPastValue={setCompanyCurrentPast}
            />
          </Box>
        </Box>

        {/* Industry (MultiSelect) */}
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

        {/* Exclude List (MultiSelect) */}
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

        {/* Gender (MultiSelect) */}
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
          <OutlinedInput placeholder="e.g. C Suite" />
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
