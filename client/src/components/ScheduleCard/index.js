import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {

    },
    card: {
        background: "#27FFB0",
        borderColor: "#939393",
        borderStyle: "solid",
        borderWidth: "30%",
        color: "white"
    },
    header: {
        borderColor: "#27FFB0",
        borderBottomColor: "#939393",
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: "3px"
    }
});

function ScheduleCard(props) {
    const classes = useStyles();

    return(
        <Grid container className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h3" className={classes.header}>Doctor Name</Typography>
                </CardContent>
                
            </Card>
        </Grid>
    );
}

export default ScheduleCard;