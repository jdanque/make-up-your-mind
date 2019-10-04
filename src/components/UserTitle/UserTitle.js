import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const UserTextField = withStyles({
  root: {
    width: "80%",
    "& label": {
      textTransform: "capitalize",
      fontSize: "1.8rem"
    },
    "& label.Mui-focused": {
      color: "rgba(0,0,0,0.4)"
    },
    "& input": {
      textTransform: "capitalize",
      textAlign: "center",
      color: "black",
      fontWeight: "bold",
      fontSize: "1.8rem"
    }
  }
})(TextField);

const UserTitle = () => {
  return <UserTextField align="center" label="about..." />;
};

export default UserTitle;
