import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    height: 150,
    padding: theme.spacing(2),
  },
  grayColor: {
    color: "#537278",
  },
}));
function TaskCompleted() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.grayColor}>
        Task Completed
      </Typography>
      <Typography
        variant="h2"
        style={{ margin: "20px" }}
        className={classes.grayColor}
      >
        <span style={{ color: "#5285EC" }}>
          <b>5</b>
        </span>
        <sub style={{ fontSize: "23px" }}>/20</sub>
      </Typography>
    </Paper>
  );
}

export default TaskCompleted;
