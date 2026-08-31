import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { COLORS } from "../../assets/style/colors";

const StyledButton = styled(Button)({
  border: 0,
  color: COLORS.button.color,
  backgroundColor: COLORS.button.backgroundColor,
  "&:hover": {
    backgroundColor: COLORS.button.hoverBackgroundColor,
    boxShadow: `2px 2px 5px 2px ${COLORS.button.color}`,
  },
}) as typeof Button;

export default StyledButton;
