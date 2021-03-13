import React from "react";
import Task from "../Task"
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        margin: 10,
        alignItems: "center"
    },
    card: {
        padding: 10,
        background: "#009CA6",
        borderColor: "#8A8D8F",
        borderStyle: "solid",
        color: "#27251F"
    },
    header: {
        borderColor: "#009CA6",
        borderBottomColor: "#FA4616",
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: "3px"
    }
});

function DoctorCard(props) {
    const classes = useStyles();

    return(
        
        
        <Grid container xs={6} sm={4} className={classes.root}>
            <Paper className={classes.card}>
                <Grid container direction="row">
                    <Grid item xs={12} className={classes.header}>
                        <Typography variant="h4">Dr. Steve Austin
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