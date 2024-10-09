import {
  Card,
  Avatar,
  Typography,
  Box,
  Button,
  Grid,
  Checkbox,
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
const profileTemplate = {
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
};

// Duplicating the profile 10 times
const sampleData = {
  profiles: Object.fromEntries(
    Array.from({ length: 10 }, (_, index) => [
      `https://linkedin.com/in/at-JqjtXv-${index + 1}`,
      {
        ...profileTemplate,
        social_profiles: {
          ...profileTemplate.social_profiles,
          linkedin: `https://linkedin.com/in/at-JqjtXv-${index + 1}`,
        },
      },
    ])
  ),
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
        padding: "8px",
        border: "none",
        borderRadius: 0,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Box sx={{}}>
        <Checkbox sx={{ m: 0 }} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <CandidatePrimaryDetails candidate={candidate} />
        <CandidateSecondaryDetails
          candidate={candidate}
          expanded={expanded}
          toggleExpand={toggleExpand}
        />
      </Box>
      <Box>
        <Divider
          orientation="vertical"
          sx={(theme) => ({
            // height: "16px",
            color: `${theme.palette.divider}`,
          })}
        />
      </Box>
      <Box sx={{ width: "280px" }}>
        <ContactInfo contactInfo={candidate.contact_info} />
      </Box>
    </Card>
  );
};

const CandidatePrimaryDetails = ({ candidate }) => {
  return (
    <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Avatar
        alt={candidate.full_name}
        src={candidate.profile_picture_url}
        sx={{ width: 32, height: 32 }}
      />
      <Box>
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
          <Divider
            orientation="vertical"
            sx={(theme) => ({
              height: "16px",
              color: `${theme.palette.divider}`,
            })}
          />
          <LocationSection location={candidate.location} />
        </Box>
        {candidate.company ? (
          <Typography variant="body2" color="textSecondary">
            {candidate.company.name} - {candidate.company.domain}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

const CandidateSecondaryDetails = ({ candidate, expanded, toggleExpand }) => {
  return (
    <Box sx={{ mt: 0.6 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <ExperienceSection
          experience={candidate.experience}
          expanded={expanded}
        />
        <EducationSection education={candidate.education} expanded={expanded} />
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
      <Typography variant="lightText">{location}</Typography>
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
          color: (theme) => theme.palette.icon.light,
          backgroundColor: (theme) => theme.palette.icon.backgroundColor,
        }}
      >
        <Box width={32} sx={{ display: "flex", justifyContent: "center" }}>
          <WorkIcon sx={{ fontSize: "1rem" }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
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
          color: (theme) => theme.palette.icon.light,
          backgroundColor: (theme) => theme.palette.icon.backgroundColor,
        }}
      >
        <Box width={32} sx={{ display: "flex", justifyContent: "center" }}>
          <SchoolIcon sx={{ fontSize: "1rem", mt: "1px" }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
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

const SkillsSection = ({ skills }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: (theme) => theme.palette.icon.light,
          backgroundColor: (theme) => theme.palette.icon.backgroundColor,
        }}
      >
        <Box width={32} sx={{ display: "flex", justifyContent: "center" }}>
          <CodeIcon sx={{ fontSize: "1rem", mt: "1px" }} />
        </Box>
        <Box>
          <Typography variant="body2" sx={{ display: "inline-block" }}>
            {skills.join(", ")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const ContactInfo = ({ contactInfo }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {contactInfo.emails.map((email, i) => (
            <Box
              key={i}
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  color: (theme) => theme.palette.icon.light,
                  backgroundColor: (theme) =>
                    theme.palette.icon.backgroundColor,
                }}
              >
                <EmailIcon sx={{ fontSize: "1rem" }} />
              </Box>
              <Typography variant="body2">{email}</Typography>
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: (theme) => theme.palette.success.main,
                }}
              />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            padding: 0,
            textTransform: "none",
            cursor: "pointer",
            color: "primary.main",
            fontSize: "0.8rem",
            fontWeight: 500,
            textDecoration: "underline",
          }}
        >
          View email
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "200px" }}>
          {contactInfo.phones.map((phone, i) => (
            <Box
              key={i}
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  color: (theme) => theme.palette.icon.light,
                  backgroundColor: (theme) =>
                    theme.palette.icon.backgroundColor,
                }}
              >
                <PhoneIcon sx={{ fontSize: 16 }} />
              </Box>
              <Typography variant="body2">{phone}</Typography>
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: (theme) => theme.palette.success.main,
                }}
              />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            padding: 0,
            textTransform: "none",
            cursor: "pointer",
            color: "primary.main",
            fontSize: "0.8rem",
            fontWeight: 500,
            textDecoration: "underline",
          }}
        >
          Find Phone
        </Box>
      </Box>
    </Box>
  );
};

export default CandidateList;
