import React from "react";
import {
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const TimelineItem = withStyles({
  missingOppositeContent: {
    "&:before": {
      display: "none",
    },
  },
})(MuiTimelineItem);

const useStyles = makeStyles((theme) => ({
  dot: {
    color: "#1C1F35",
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: "0",
    margin: "0",
  },
  connector: {
    backgroundColor: "#1C1F35",
    opacity: ".5",
  },
  content: {
    textAlign: "left",
  },
  paper: {
    position: "relative",
    top: "-1.3rem",
    backgroundColor: "transparent",
    paddingLeft: ".5rem",
    paddingBottom: ".5rem",
  },
  title: {
    color: "#1C1F35",
    fontWeight: "600",
    fontSize: "1.5rem",
    paddingBottom: "0",
  },
  date: {
    color: "#1C1F35",
    fontWeight: "400",
    fontSize: "1.25rem",
    paddingTop: "0",
  },
}));

function TimelineEvent(props) {
  const classes = useStyles();
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className={classes.dot}>
          <PowerSettingsNewRoundedIcon />
        </TimelineDot>
        <TimelineConnector className={classes.connector} />
      </TimelineSeparator>
      <TimelineContent className={classes.content}>
        <Paper elevation={0} className={classes.paper}>
          <Typography className={classes.title}>{props.title}</Typography>
          <Typography className={classes.date}>{props.datetime}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}

export default TimelineEvent;