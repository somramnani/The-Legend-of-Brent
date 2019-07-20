import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { getThemeProps } from "@material-ui/styles";

const useStyles = makeStyles(
  createStyles({
    card: {
      width: 250,
      margin: 30
    },
    media: {
      height: 200
    }
  })
);

export default function MonsterCard(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: props.name,
    img: props.img,
    title: "",
    attackSpeed: props.attackSpeed,
    attackPower: props.attackPower
  });

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={values.img}
          title={values.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {values.name}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            <Grid direction="column">
              <Typography> Attack Speed: {values.attackSpeed}</Typography>
              <Typography> Attack Power: {values.attackPower}</Typography>
            </Grid>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
