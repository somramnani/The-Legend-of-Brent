import React from 'react';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    createStyles({
        card: {
            maxWidth: 300,
            margin: 30
        },
        media: {
            height: 300
        },
    })
)

export default function MonsterCard() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: "",
        img: "",
        title: "",
        attackSpeed: "",
        attackPower: ""
    })

    // const changeHandler = (name, img, title, attackSpeed, attackPower) => event => {
    //     setValues({...values, 
    //         [name]: event.target.value, 
    //         [img]: event.target.value, 
    //         [title]: event.target.value, 
    //         [attackSpeed]: event.target.value,
    //         [attackPower]: event.target.value});
    //   }

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={values.img}
                    title={values.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h4">
                        {values.name}
                    </Typography> 
                    <Typography variant="body2" component="p" color="textSecondary">
                        Stats:
                        Attack Speed: {values.attackSpeed}
                        Attack Power: {values.attackPower}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}