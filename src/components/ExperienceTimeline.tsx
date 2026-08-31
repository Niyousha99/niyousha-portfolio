import { memo } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Icon } from "@mui/material";
import { experience, type ExperienceType } from "../assets/data/ExperienceInfo";
import { COLORS } from "../assets/style/colors";

const ExperienceTimeline = () => {
  return (
    <>
      <Typography variant="h4" sx={{ color: COLORS.title }}>
        the lore
      </Typography>
      <Timeline
        position="left"
        sx={{
          width: "100%",
          maxWidth: 720,
          mx: "auto",
          px: 0,
          py: 0,
        }}
      >
        {experience.map((experienceItem: ExperienceType, index) => {
          return (
            <TimelineItem
              key={`${experienceItem.title}-${experienceItem.date}-${index}`}
            >
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  pl: 1.5,
                  textAlign: "left",
                  color: COLORS.primary,
                }}
                variant="body2"
              >
                {experienceItem.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                {index > 0 ? <TimelineConnector /> : null}
                <TimelineDot sx={experienceItem.icon.overrideIconStyle}>
                  {experienceItem.icon.component ? (
                    <Icon component={experienceItem.icon.component} />
                  ) : null}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{ py: "12px", px: 2, pr: 1.5, textAlign: "right" }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ whiteSpace: { xs: "normal", sm: "nowrap" } }}
                >
                  {experienceItem.title}
                </Typography>
                <Typography>
                  <a
                    style={{ textDecoration: "none", color: COLORS.primary }}
                    href={experienceItem.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {experienceItem.location}
                  </a>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </>
  );
};

export default memo(ExperienceTimeline);
