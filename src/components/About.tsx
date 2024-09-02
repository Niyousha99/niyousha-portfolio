import Box from '@mui/material/Box';
import Profile from '../assets/images/Profile.jpg';
import { Typography } from '@mui/material';
import ActionButton from './Button/ActionButton';
import SocialsPanel from './SocialsPanel';

const About = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1em', padding: '1em 0' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', textAlign: 'left', gap: '1em' }}>
				<div>
					<Typography variant="h4" sx={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.3em' }}>
						Hello, I'm <Typography variant="h3" color={'pink'}>Niyousha</Typography>
					</Typography>
					<Typography variant="subtitle1" sx={{ lineHeight: 1 }}>
						B.Sc. Software Engineering {<br />} Software Developer
					</Typography>
				</div>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.2em' }}>
					<ActionButton
						link='mailto:niyousha.raeesinejad@gmail.com'
						text='Get in Touch!'

					/>
					<SocialsPanel />
				</Box>
			</Box>
			<Box
				component="img"
				sx={{
					borderRadius: '10%',
					maxHeight: 500,
					maxWidth: 250,
					boxShadow: '0px 1px 5px 0px ',

				}}
				alt="Picture of Niyousha at a cafe"
				src={Profile}
			/>
		</Box >

	)

}

export default About;
