import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    margin: "0.5rem",
  },
  btn: {
    margin: "1rem",
  },
});

const HomeCard = ({ values }) => {
  const classes = useStyles();
  return (
    <div>
      {values &&
        values.map((value) => (
          <Card className={classes.root} key={value.position} >
            <CardContent>
              <Typography variant="h5">{value.title}</Typography>
              <Typography variant="body1">{value.snippet}</Typography>
            </CardContent>
            <Button className={classes.btn} disableTouchRipple>
              <a href={value.link} >
                Know More
              </a>
            </Button>
          </Card>
        ))}
    </div>
  );
};

export default HomeCard;
