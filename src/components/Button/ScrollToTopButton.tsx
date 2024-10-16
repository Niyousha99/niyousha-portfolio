import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type ScrollToTopButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const ScrollToTopButton = (props: ScrollToTopButtonProps) => {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });
  return (
    <Fade in={trigger}>
      <Box
        onClick={props.handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollToTopButton;
