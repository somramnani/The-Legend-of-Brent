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
    },
    cardB: {
      width: 300,
      margin: 30,
      backgroundColor: 'red',
    }
  })
);

export default function MonsterCard(props) {
  const classes = useStyles();
  console.log(`Monster card props.shake: ${props.shake}`);

  return (
    <>
      <Card className={props.shake ? `${classes.cardB}` : `${classes.card}`}>
        <CardActionArea>
          <CardMedia
            className={`${classes.media}`}
            image={props.img}
            name={props.name}
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
              {props.name}
            </Typography>

            <Typography variant="body2" component="p" color="textSecondary">
              <Grid direction="column">
                <Typography
                  style={{
                    fontFamily: "Merienda, cursive"
                  }}
                >
                  {" "}
                  Class: {props.class}
                </Typography>

                <Typography
                  style={{
                    fontFamily: "Merienda, cursive"
                  }}
                >
                  Small Attack: {props.smallAttack}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Merienda, cursive"
                  }}
                >
                  Big Attack: {props.bigAttack}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Merienda, cursive"
                  }}
                >
                  {" "}
                  Special Attack: {props.specialAttack}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Merienda, cursive"
                  }}
                >
                  {" "}
                  Health: {props.health }
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
