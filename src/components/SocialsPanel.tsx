import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { COLORS } from "../assets/style/colors";

const SocialsPanel = () => (
  <Box>
    <Box
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <IconButton
        style={{ color: COLORS.icon.fill }}
        target="_blank"
        href="https://www.linkedin.com/in/niyoushar/"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        style={{ color: COLORS.icon.fill }}
        target="_blank"
        href="https://github.com/Niyousha99"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        style={{ color: COLORS.icon.fill }}
        target="_blank"
        href="https://www.instagram.com/niyousha48/"
      >
        <InstagramIcon />
      </IconButton>
    </Box>
  </Box>
);

export default SocialsPanel;
