import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, ButtonGroup, Button, Grid, Stack } from "@mui/material";

const StyledButtonGroup = styled("ButtonGroup")({
  margin: 1,
});

const Experience = () => {
  const [currentExperience, setCurrentExperience] = useState(null);
  const experiences = [
    {
      id: "bayer",
      title: "Bayer (Crop Science)",
      date: "Aug 2023 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      id: "generalMotors",
      title: "General Motors",
      date: "Nov 2020 - Aug 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      id: "edurange",
      title: "Edurange",
      date: "June 2019 - June 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
  ];

  const buttonStyle = (id) => {
    return (!currentExperience && id == "bayer") || id === currentExperience?.id ? "contained" : "outlined";
  };

  const handleClick = (exp) => {
    setCurrentExperience(exp);
  };

  const showExperience = (exp) => {
    return (
      <div>
        <Typography variant="h5" color="secondary">
          {exp.title}
        </Typography>
        <Typography variant="body1" color="primary">
          {exp.description}
        </Typography>
      </div>
    );
  };

  const experienceTabs = experiences.map((exp) => (
    <Button variant={buttonStyle(exp.id)} key={exp.id} onClick={() => handleClick(exp)}>
      {exp.date}
    </Button>
  ));

  return (
    <section>
      <Typography variant="h4" sx={{ mb: 5 }} color="primary">
        Experience
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ButtonGroup size="large" aria-label="large button group" orientation="vertical">
            {experienceTabs}
          </ButtonGroup>
        </Grid>
        <Grid item xs={8}>
          {!currentExperience && showExperience(experiences[0])}
          {currentExperience && showExperience(currentExperience)}
        </Grid>
      </Grid>
    </section>
  );
};

export default Experience;
