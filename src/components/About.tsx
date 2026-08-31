import Box from "@mui/material/Box";
import { Fade, Typography } from "@mui/material";
import Profile from "../assets/images/Profile.jpg";
import SocialsPanel from "./SocialsPanel";
// import ActionButton from "./Button/ActionButton";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 1em",
        alignItems: "center",
        textAlign: "left",
        gap: "1em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "1em",
          padding: "1em 0",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            textAlign: "left",
            gap: "1em",
          }}
        >
          <div>
            <Typography
              variant="h4"
              sx={{
                display: "inline-flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "0.3em",
              }}
            >
              Hi, I'm{" "}
              <Typography variant="h3" component="span" sx={{ color: "#8d6c64" }}>
                Niyousha
              </Typography>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "#866D6B", lineHeight: 1.3 }}
            >
              Product engineer by day, chasing stories by night.
            </Typography>
          </div>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.2em",
            }}
          >
            <ActionButton
              link="mailto:niyousha.raeesinejad@gmail.com"
              text="Get in Touch!"
            />
          </Box> */}
          <SocialsPanel />
        </Box>
        <Fade in={true}>
          <Box
            component="img"
            sx={{
              borderRadius: "10%",
              maxHeight: 420,
              maxWidth: 420,
              width: "100%",
              objectFit: "cover",
              boxShadow: "0px 1px 5px 0px ",
            }}
            alt="Picture of Niyousha on a subway platform"
            src={Profile}
          />
        </Fade>
      </Box>
    </Box>
  );
};

export default About;
