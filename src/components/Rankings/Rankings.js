import React from "react";
import { List, ListItem, Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RankingsHeader from "./RankingsHeader";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));

const Rankings = () => {
  const classes = useStyles();

  return (
    <Drawer
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      variant="permanent"
      open
    >
      <RankingsHeader />
      <List className={classes.contentList}>
        <ListItem alignItems="flex-start">Option 1</ListItem>
        <ListItem alignItems="flex-start">Option 2</ListItem>
        <ListItem alignItems="flex-start">Option 3</ListItem>
        <ListItem alignItems="flex-start">Option 4</ListItem>
        <ListItem alignItems="flex-start">Option 5</ListItem>
      </List>
    </Drawer>
  );
};

export default Rankings;
