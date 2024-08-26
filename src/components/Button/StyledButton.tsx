import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
	border: 0,
	color: '#DBDFE9',
	backgroundColor: '#64718D',
	'&:hover': {
		backgroundColor: '#64718D',
		boxShadow: '2px 2px 5px 2px #DBDFE940',
	},
}));


export default StyledButton;