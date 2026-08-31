import { memo } from "react";
import { Typography } from "@mui/material";
import StyledButton from "./StyledButton";

type ActionButtonProps = {
  text: string;
  link?: string;
  onClick?: () => void;
};

const ActionButton = ({ text, link, onClick }: ActionButtonProps) => {
  const label = <Typography variant="button">{text}</Typography>;

  if (link) {
    return (
      <StyledButton
        variant="contained"
        size="large"
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </StyledButton>
    );
  }

  return (
    <StyledButton variant="contained" size="large" onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default memo(ActionButton);
