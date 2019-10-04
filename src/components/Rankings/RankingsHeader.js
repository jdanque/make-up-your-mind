import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    padding: theme.spacing(2, 2, 0, 2)
  }
}));

const RankingsHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography variant="h6">Rankings</Typography>
      <SortIcon />
    </div>
  );
};

export default RankingsHeader;
