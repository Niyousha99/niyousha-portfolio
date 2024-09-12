import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
	border: 0,
	color: '#DBDFE9',
	backgroundColor: '#8d6c64',
	'&:hover': {
		backgroundColor: '#1C1614',
		boxShadow: '2px 2px 5px 2px #DBDFE940',
	},
}));


export default StyledButton;