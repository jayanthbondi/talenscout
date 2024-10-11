const jobTitles = ["Software Engineer", "Data Scientist", "Product Manager"];

const industries = [
  "Defense & Space",
  "Computer Hardware",
  "Computer Software",
  "Computer Networking",
  "Internet",
  "Semiconductors",
  "Telecommunications",
  // Add all supported industries...
];

const companySizes = [
  { label: "1-10", value: "1_10" },
  { label: "11-50", value: "11_50" },
  { label: "51-200", value: "51_200" },
  { label: "201-500", value: "201_500" },
  { label: "501-1000", value: "501_1000" },
  { label: "1001-5000", value: "1001_5000" },
  { label: "5001-10000", value: "5001_10000" },
  { label: "10001+", value: "10001" },
];

const excludeLists = [
  { label: "Shortlisted", value: "shortlisted" },
  { label: "Rejected", value: "rejected" },
  { label: "Favorites", value: "favorites" },
];

const genderOptions = ["Male", "Female", "Other"];

const yearsOfExperience = [
  { label: "Less than 1 year", value: "0_1" },
  { label: "1-2 years", value: "1_2" },
  { label: "3-5 years", value: "3_5" },
  { label: "6-10 years", value: "6_10" },
  { label: "More than 10 years", value: "10" },
];

const yearsInCurrentRole = [
  { label: "Less than 2 years", value: "0_2" },
  { label: "2-4 years", value: "2_4" },
  { label: "4-6 years", value: "4_6" },
  { label: "6-8 years", value: "6_8" },
  { label: "8-10 years", value: "8_10" },
  { label: "More than 10 years", value: "10" },
];

const locations = [
  { label: "Sydney, Australia", value: "Sydney, Australia" },
  { label: "New York, United States", value: "New York, United States" },
  // Add more locations...
];

const educationLevels = [
  { label: "Bachelor's Degree", value: "Bachelor's Degree" },
  { label: "Master's Degree", value: "Master's Degree" },
  { label: "Doctorate Degree", value: "Doctorate Degree" },
];

const currentPastOptions = [
  { label: "Current", value: "current" },
  { label: "Current or Past", value: "currentOrPast" },
  { label: "Past", value: "past" },
];

export {
  jobTitles,
  industries,
  companySizes,
  excludeLists,
  genderOptions,
  yearsOfExperience,
  yearsInCurrentRole,
  locations,
  educationLevels,
  currentPastOptions,
};
