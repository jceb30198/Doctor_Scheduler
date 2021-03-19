import React, { useState, useEffect } from "react";
import Task from "../Task"
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import API from "../../utils/API";


// Miami Marlins OG Color Scheme for colors!
const useStyles = makeStyles({
    root: {
        marginTop: "10px",
        alignItems: "center"
    },
    card: {
        padding: 10,
        backgroundColor: "#8A8D8F",
        borderColor: "#FA4616",
        borderStyle: "solid"
    },
    header: {
        borderColor: "#8A8D8F",
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
                        <Typography variant="h4">{}
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