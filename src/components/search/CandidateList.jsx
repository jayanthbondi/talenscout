import {
  Card,
  Avatar,
  Typography,
  Box,
  Button,
  Grid,
  IconButton,
  Checkbox,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

// Sample candidate data
const sampleData = {
  profiles: {
    "https://linkedin.com/in/at-JqjtXv": {
      full_name: "Llewellyn Ruecker",
      title: "Research Assistant",
      headline: "Research Assistant at Legros, Smitham and Kessler",
      company: {
        name: "Legros, Smitham and Kessler",
        url: "https://www.linkedin.com/company/legros-smitham-and-kessler",
        domain: "legros.com",
      },
      location: "Faheybury, United States",
      experience: [
        "Research Assistant at Legros, Smitham and Kessler in 2014 - Present",
      ],
      education: ["Doctorate Degree at Vertapple University in 2017 - 2021"],
      skills: [
        "Research",
        "Algorithms",
        "Budget Planning",
        "Storage",
        "Requirements Gathering",
        "Coding",
      ],
      profile_picture_url:
        "https://images.contactout.com/profiles/7fe492925c1911244c7110c5ea9e66c4",
      contact_availability: {
        personal_email: true,
        work_email: true,
        phone: true,
      },
      contact_info: {
        emails: ["test@gmail.com", "email1@example.com"],
        phones: ["+123456789"],
      },
      social_profiles: {
        linkedin: "https://linkedin.com/in/at-JqjtXv",
        github: "https://github.com/at-JqjtXv",
        twitter: "https://twitter.com/at-JqjtXv",
        facebook: "https://facebook.com/at-JqjtXv",
      },
    },
    "https://linkedin.com/in/maxime-IX12tS": {
      full_name: "Maxime Bernier",
      title: "Software Engineer",
      location: "New York, United States",
      experience: [
        "Software Engineer at ABC Corp in 2018 - Present",
        "NLP Practitioner at XYZ Corp in 2015 - 2018",
      ],
      education: ["Bachelor's Degree at XYZ University in 2013 - 2017"],
      skills: ["Python", "Machine Learning", "Data Analysis"],
      profile_picture_url:
        "https://images.contactout.com/profiles/7fe492925c1911244c7110c5ea9e66c4",
      contact_availability: {
        personal_email: true,
        work_email: false,
        phone: true,
      },
      contact_info: {
        emails: ["maxime@example.com"],
        phones: ["+987654321"],
      },
      social_profiles: {
        linkedin: "https://linkedin.com/in/maxime-IX12tS",
        github: "https://github.com/maxime-IX12tS",
        twitter: null,
        facebook: null,
      },
    },
  },
};

const CandidateList = () => {
  const candidates = Object.values(sampleData.profiles).slice(0, 10); // Extracting the first 10 candidates

  return (
    <Grid container spacing={3}>
      {candidates.map((candidate, index) => (
        <Grid item xs={12} key={index}>
          <Card variant="outlined" sx={{ display: "flex", padding: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
              }}
            >
              <Checkbox />
              <Avatar
                alt={candidate.full_name}
                src={candidate.profile_picture_url}
                sx={{ width: 32, height: 32 }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", gap: "6px" }}>
                <Box sx={{ display: "flex", gap: "6px" }}>
                  <Typography variant="candidateName">
                    {candidate.full_name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: (theme) => theme.palette.icon.light,
                    }}
                  >
                    {candidate.social_profiles.linkedin && (
                      <LinkedInIcon
                        sx={{ fontSize: "1rem", cursor: "pointer" }}
                        onClick={() =>
                          window.open(
                            candidate.social_profiles.linkedin,
                            "_blank",
                            "noopener noreferrer"
                          )
                        }
                      />
                    )}
                    {candidate.social_profiles.github && (
                      <GitHubIcon
                        sx={{ fontSize: "1rem", cursor: "pointer" }}
                        onClick={() =>
                          window.open(
                            candidate.social_profiles.github,
                            "_blank",
                            "noopener noreferrer"
                          )
                        }
                      />
                    )}
                    {candidate.social_profiles.twitter && (
                      <TwitterIcon
                        sx={{ fontSize: "1rem", cursor: "pointer" }}
                        onClick={() =>
                          window.open(
                            candidate.social_profiles.twitter,
                            "_blank",
                            "noopener noreferrer"
                          )
                        }
                      />
                    )}
                    {candidate.social_profiles.facebook && (
                      <FacebookIcon
                        sx={{ fontSize: "1rem", cursor: "pointer" }}
                        onClick={() =>
                          window.open(
                            candidate.social_profiles.facebook,
                            "_blank",
                            "noopener noreferrer"
                          )
                        }
                      />
                    )}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon
                    sx={{
                      fontSize: "1rem",
                      color: (theme) => theme.palette.icon.light,
                    }}
                  />
                  <Typography variant="lightText" color="lightText">
                    {candidate.location}
                  </Typography>
                </Box>
              </Box>

              {candidate.company && (
                <Typography variant="body2" color="textSecondary">
                  {candidate.company.name} - {candidate.company.domain}
                </Typography>
              )}
              <Box>
                {candidate.experience.slice(0, 2).map((exp, i) => (
                  <Typography key={i} variant="body2">
                    {exp}
                  </Typography>
                ))}
                <Typography variant="body2" color="primary">
                  ...more
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Education: {candidate.education.join(", ")}
              </Typography>
              <Box>
                <Typography variant="body2" color="textSecondary">
                  Skills: {candidate.skills.join(", ")}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
                {candidate.contact_info.emails.map((email, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon sx={{ fontSize: 16, mr: 1 }} />
                    <Typography variant="body2" color="textSecondary">
                      {email}
                    </Typography>
                    <Button sx={{ ml: 1 }} size="small">
                      View email
                    </Button>
                  </Box>
                ))}
                {candidate.contact_info.phones.map((phone, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon sx={{ fontSize: 16, mr: 1 }} />
                    <Typography variant="body2" color="textSecondary">
                      {phone}
                    </Typography>
                    <Button sx={{ ml: 1 }} size="small">
                      Find phone
                    </Button>
                  </Box>
                ))}
              </Box>
              <Button
                variant="outlined"
                sx={{ width: "100%", textTransform: "none" }}
              >
                AI write personalized message
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CandidateList;
