import React from "react";
import Task from "../Task"
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        textAlign: "center"
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

function DoctorCard(props) {
    const classes = useStyles();

    return(
        
        
        <Grid container xs={6} sm={3}>
            <Paper className={classes.card}>
                <Grid container direction="row">
                    <Grid item xs={12} sm={6} className={classes.header}>
                        <Typography variant="h4">Dr. Steve Austin
                        <Button variant="contained" className={classes.button}>Schedule</Button>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="column">
                    <Task></Task>
                    <Task></Task>
                    <Task></Task>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default DoctorCard;