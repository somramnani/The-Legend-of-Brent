import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(
  createStyles({
    card: {
      width: 250,

      margin: 30
    },
    media: {
      height: 350
    }
  })
);

export default function MonsterCard(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: props.name,
    img: props.img,
    title: "",
    class: props.class,
    health: props.health,
    smallAttack: props.smallAttack,
    bigAttack: props.bigAttack,
    specialAttack: props.specialAttack
  });

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={values.img}
            name={values.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              style={{
                fontFamily: "Merienda, cursive"
              }}
            >
              {values.name}
            </Typography>

            <Typography variant="body2" component="p" color="textSecondary">
              <Grid direction="column">
                <Typography
                  style={{
                    fontFamily: "Merienda, cursive"
                  }}
                >
                  {" "}
                  Class: {values.class}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Merienda, cursive"
                  }}
                >
                  {" "}
                  Health: {values.health}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Merienda, cursive"
                  }}
                >
                  Small Attack: {values.smallAttack}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Merienda, cursive"
                  }}
                >
                  Big Attack: {values.bigAttack}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Merienda, cursive"
                  }}
                >
                  {" "}
                  Special Attack: {values.specialAttack}
                </Typography>
              </Grid>
              <CardActions>
                {/* <Button size="small" color="primary" variant="contained">
                  Select
                </Button>
                <Button size="small" color="primary">
                  Share
                </Button> */}
              </CardActions>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
