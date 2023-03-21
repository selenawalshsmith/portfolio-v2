import { useState } from "react";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <section>
      <Typography variant="h4" color="primary">
        Howdy,
      </Typography>
      <Typography variant="h2" color="secondary">
        I'm Selena Walsh Smith.
      </Typography>
      <Typography variant="h5" color="primary">
        A subtitle sentance containing some words, maybe ten words.
      </Typography>
      <Typography variant="subtitle1" color="primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris{" "}
      </Typography>
    </section>
  );
};

export default About;
