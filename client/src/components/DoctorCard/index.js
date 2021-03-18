import React from "react";
import Task from "../Task"
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Paper } from "@material-ui/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


// Miami Marlins OG Color Scheme for colors!
const useStyles = makeStyles({
    root: {
        margin: 10,
        alignItems: "center"
    },
    card: {
        padding: 10,
        backgroundColor: "#8A8D8F",
        borderColor: "#FA4616",
        borderStyle: "solid",
        color: "#27251F"
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
                        <Typography variant="h4">Dr. Steve Austin
                        </Typography>
                    </Grid>
                </Grid>
                    
                <DragDropContext>
                    <Droppable>
                        {(provided) => (
                            <ul {...provided.droppableProps} ref={provided.innerRef}>    
                                <Draggable draggableId="1" index="1">
                                    {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Task></Task>
                                        </li>
                                    )}
                                </Draggable>
                                <Draggable draggableId="1" index="1">
                                    {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Task></Task>
                                        </li>
                                    )}
                                </Draggable>
                                <Draggable draggableId="1" index="1">
                                    {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Task></Task>
                                        </li>
                                    )}
                                </Draggable>
                            </ul> 
                        )}
                    </Droppable> 
                </DragDropContext>
            </Paper>
        </Grid>
    );
}

export default DoctorCard;