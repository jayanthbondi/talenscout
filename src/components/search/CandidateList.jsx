import {
  Card,
  Avatar,
  Typography,
  Box,
  Button,
  Grid,
  Checkbox,
  Link,
  Divider,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code"; // Use CodeIcon for skills
import { useState } from "react";

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
        "Assistant at XYZ in 2013 - 2014",
        "Test Practitioner at XYZ Corp in 2015 - 2018",
      ],
      education: ["Doctorate Degree at Vertapple University in 2017 - 2021"],
      skills: ["Research", "Algorithms", "Budget Planning"],
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
        "Test Practitioner at XYZ Corp in 2015 - 2018",
      ],
      education: [
        "Bachelor's Degree at XYZ University in 2013 - 2017",
        "Bachelor's Degree at XYZ University in 2013 - 2017",
      ],
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
    <Grid container>
      {candidates.map((candidate, index) => (
        <Grid item xs={12} key={index}>
          <CandidateCard candidate={candidate} />
        </Grid>
      ))}
    </Grid>
  );
};

const CandidateCard = ({ candidate }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <Card
      variant="outlined"
      sx={(theme) => ({
        display: "flex",
        padding: 2,
        border: "none",
        borderRadius: 0,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      {/* Left Side: Avatar and Checkbox */}
      <Box sx={{ display: "flex", gap: "10px" }}>
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
        <Box sx={{}}>
          <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <Typography variant="candidateName">
                {candidate.full_name}
              </Typography>
              <Divider
                orientation="vertical"
                sx={(theme) => ({
                  height: "16px",
                  color: `${theme.palette.divider}`,
                })}
              />
              <SocialProfiles socialProfiles={candidate.social_profiles} />
            </Box>

            {/* Vertical Divider */}
            <Divider orientation="vertical" sx={{ height: "16px" }} />

            <LocationSection location={candidate.location} />
          </Box>
          {candidate.company && (
            <Typography variant="body2" color="textSecondary">
              {candidate.company.name} - {candidate.company.domain}
            </Typography>
          )}
        </Box>
      </Box>

      <Box>
        <Box
          sx={{ mt: 0.6, display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <ExperienceSection
            experience={candidate.experience}
            expanded={expanded}
          />
          <EducationSection
            education={candidate.education}
            expanded={expanded}
          />
          {expanded ? (
            <SkillsSection skills={candidate.skills} expanded={expanded} />
          ) : null}
        </Box>
        <Box
          onClick={toggleExpand}
          sx={{
            padding: 0,
            textTransform: "none",
            cursor: "pointer",
            color: "primary.main",
          }}
        >
          {expanded ? "Show less" : "...more"}
        </Box>
      </Box>

      {/* Contact Info */}
      <ContactInfo contactInfo={candidate.contact_info} />
    </Card>
  );
};

// Components for different sections
const SocialProfiles = ({ socialProfiles }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        color: (theme) => theme.palette.icon.light,
      }}
    >
      {socialProfiles.linkedin && (
        <LinkedInIcon
          sx={{ fontSize: "1rem", cursor: "pointer" }}
          onClick={() =>
            window.open(
              socialProfiles.linkedin,
              "_blank",
              "noopener noreferrer"
            )
          }
        />
      )}
      {socialProfiles.github && (
        <GitHubIcon
          sx={{ fontSize: "1rem", cursor: "pointer" }}
          onClick={() =>
            window.open(socialProfiles.github, "_blank", "noopener noreferrer")
          }
        />
      )}
      {socialProfiles.twitter && (
        <TwitterIcon
          sx={{ fontSize: "1rem", cursor: "pointer" }}
          onClick={() =>
            window.open(socialProfiles.twitter, "_blank", "noopener noreferrer")
          }
        />
      )}
      {socialProfiles.facebook && (
        <FacebookIcon
          sx={{ fontSize: "1rem", cursor: "pointer" }}
          onClick={() =>
            window.open(
              socialProfiles.facebook,
              "_blank",
              "noopener noreferrer"
            )
          }
        />
      )}
    </Box>
  );
};

const LocationSection = ({ location }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <LocationOnIcon
        sx={{
          fontSize: "1rem",
          color: (theme) => theme.palette.icon.light,
        }}
      />
      <Typography variant="lightText" color="lightText">
        {location}
      </Typography>
    </Box>
  );
};

const ExperienceSection = ({ experience, expanded }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          color: (theme) => theme.palette.icon.dark,
          backgroundColor: (theme) => theme.palette.icon.backgroundColor,
        }}
      >
        <WorkIcon sx={{ fontSize: "0.75rem", mt: "4px" }} />
        <Box>
          {expanded
            ? experience.map((exp, i) => (
                <Typography key={i} variant="body2">
                  {exp}
                </Typography>
              ))
            : experience.slice(0, 2).map((exp, i) => (
                <Typography key={i} variant="body2">
                  {exp}
                </Typography>
              ))}
        </Box>
      </Box>
    </Box>
  );
};

const EducationSection = ({ education, expanded }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          color: (theme) => theme.palette.icon.dark,
          backgroundColor: (theme) => theme.palette.icon.backgroundColor,
        }}
      >
        <SchoolIcon sx={{ fontSize: "0.75rem", mt: "4px" }} />
        <Box>
          {expanded ? (
            education.map((edu) => (
              <Typography key={edu} variant="body2">
                {edu}
              </Typography>
            ))
          ) : (
            <Typography variant="body2">{education[0]}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const SkillsSection = ({ skills, expanded }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: (theme) => theme.palette.icon.dark,
          backgroundColor: (theme) => theme.palette.icon.backgroundColor,
        }}
      >
        <CodeIcon sx={{ fontSize: "0.75rem" }} />
        <Typography variant="body2">
          {expanded ? skills.join(", ") : skills.slice(0, 3).join(", ")}
        </Typography>
      </Box>
    </Box>
  );
};

const ContactInfo = ({ contactInfo }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", mb: 1 }}>
        {contactInfo.emails.map((email, i) => (
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
        {contactInfo.phones.map((phone, i) => (
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
      {/* <Button variant="outlined" sx={{ width: "100%", textTransform: "none" }}>
        AI write personalized message
      </Button> */}
    </Box>
  );
};

export default CandidateList;
