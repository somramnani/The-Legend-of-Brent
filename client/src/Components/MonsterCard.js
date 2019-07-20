import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(
  createStyles({
    card: {
      maxWidth: 250,
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
    smallAttack: props.smallAttack,
    bigAttack: props.bigAttack,
    specialAttack: props.specialAttack,
    health: props.health
  });

  return (
    <>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={values.img}
          name={values.name}
          health={values.health}
        />
        <CardContent>
            <Typography gutterBottom variant="h4" component="h4">
            {values.name}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
              Small Attack: {values.smallAttack}
              <br />
              Big Attack: {values.bigAttack}
              <br />
              Special Attack: {values.specialAttack}
              <br />
            Health: {values.health}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}