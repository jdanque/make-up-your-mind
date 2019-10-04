import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  titleBar: {
    padding: theme.spacing(2, 0)
  }
}));

const TitleBar = () => {
  const classes = useStyles();
  return (
    <AppBar elevation={0} className={classes.titleBar}>
      <Typography variant="h5" align="center">
        Make Up Your Mind
      </Typography>
    </AppBar>
  );
};

export default TitleBar;
