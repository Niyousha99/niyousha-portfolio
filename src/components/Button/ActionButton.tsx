import * as React from 'react';
import { Typography } from '@mui/material';
import StyledButton from './StyledButton';

type ActionButtonProps = {
	text: string,
	link?: string,
}

const ActionButton = (props: ActionButtonProps) => (
	<StyledButton
		variant="contained"
		size="large"
		rel="noopener noreferrer"
		href={props.link}
	>
		<Typography variant="button" >
			{props.text}
		</Typography>
	</StyledButton>
)

export default React.memo(ActionButton);