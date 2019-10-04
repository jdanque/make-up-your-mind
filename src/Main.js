import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Rankings from "components/Rankings";
import TitleBar from "components/TitleBar";
import UserTitle from "components/UserTitle";
import React from "react";

const useStyles = makeStyles(theme => ({
  main: { display: "flex" },
  heroContent: {
    padding: theme.spacing(10, 2, 6),
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div id="main" className={classes.main}>
      <CssBaseline />
      <TitleBar title="Make Up Your Mind" />
      <Rankings />
      <Container className={classes.heroContent}>
        <UserTitle />
      </Container>
    </div>
  );
}
