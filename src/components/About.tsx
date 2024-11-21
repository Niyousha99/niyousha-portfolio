import Box from "@mui/material/Box";
import Profile from "../assets/images/Profile.jpg";
import { Fade, Typography } from "@mui/material";
import SocialsPanel from "./SocialsPanel";
import ActionButton from "./Button/ActionButton";

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
              <Typography variant="h3" color={"#8d6c64"}>
                Niyousha
              </Typography>
            </Typography>
            <Typography
              variant="subtitle1"
              color={"#866D6B"}
              sx={{ lineHeight: 1 }}
            >
              B.Sc. Software Engineering {<br />} Software Developer
            </Typography>
          </div>
          <Box
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
          </Box>
          <SocialsPanel />
        </Box>
        <Fade in={true}>
          <Box
            component="img"
            sx={{
              borderRadius: "10%",
              maxHeight: 500,
              maxWidth: 250,
              boxShadow: "0px 1px 5px 0px ",
            }}
            alt="Picture of Niyousha at a cafe"
            src={Profile}
          />
        </Fade>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            textAlign: "start",
            padding: "1em 3em",
          }}
        >
          <Typography variant={"h6"}>
            I’m a Software Developer who loves crafting sleek, personalized,
            data-driven, user-friendly experiences. I thrive in collaborative
            environments, enjoy a good technical challenge, and love taking
            ownership of features from idea to launch. When I’m not coding, I’m
            probably writing, brainstorming the next big thing, or hunting for
            the best coffee in town!
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default About;
