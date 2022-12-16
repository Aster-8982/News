import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:'0.5rem'
  },
  media: {
    height: 140,
  },
  card:{
    margin:'0.5rem',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center'
  }
});

export default function MediaCard({ data }) {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
    {
      data.map((ele)=>(
        <Card className={classes.root} key={ele.position}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ele.thumbnail}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {ele.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" >
            {ele.snippet}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography style={{color:'primary'}}>{ele.date}</Typography>
        <Button><a href={ele.link}> Know More</a></Button>
      </CardActions>
    </Card>
      ))
    }</Box>
  );
}
