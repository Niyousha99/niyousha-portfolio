import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { experience, ExperienceType } from '../assets/data/ExperienceInfo';
import { Icon } from '@mui/material';

const ExperienceTimeline = () => {
	return (
		<Timeline position="alternate">
			<Typography variant="h4" sx={{ marginBottom: '1em', color: '#2A201E' }}>
				EXPERIENCE
			</Typography>
			{experience.map((experienceItem: ExperienceType) => {
				return (
					<TimelineItem>
						<TimelineOppositeContent
							sx={{ m: 'auto 0' }}
							align="right"
							variant="body2"
							color='#866D6B'
						>
							{experienceItem.date}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineConnector />
							<TimelineDot sx={experienceItem.icon.overrideIconStyle} >
								<Icon component={experienceItem.icon.component} />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent sx={{ py: '12px', px: 2 }}>
							<Typography variant="h6" component="span">
								{experienceItem.title}
							</Typography>
							<Typography>{experienceItem.location}</Typography>
						</TimelineContent>
					</TimelineItem>
				)
			})}
		</Timeline>
	);
}

export default React.memo(ExperienceTimeline);