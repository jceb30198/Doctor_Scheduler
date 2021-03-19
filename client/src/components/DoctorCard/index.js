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
        backgroundColor: "white",
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
    // idList = [];
    // for(i=0; i<4; i++){
    //     state = {dragid: "dragid"}
    //     onDragEnd = result => {
    //     const { destination, source, reason} = result;
    // }
    



    // if(!destination || reason === 'CANCEL'){
    //     return;
    // }
    
    // if(destination.droppableId===source.droppableId && 
    //     destination.index === source.index
    // ){
    //     return;
    // }
    // listindex = [0, 1, 2];
    // function assignId(indexes){
    // for(i=0; i<listindex.length(); i++){
    //     idList = [];
    //     idList.append("drag" + i);
    //     console.log(idList[0]);
    
    // };

    return(
        
        
        <Grid container xs={6} sm={4} className={classes.root}>
            <Paper className={classes.card}>
                <Grid container direction="row">
                    <Grid item xs={12} className={classes.header}>
                        <Typography variant="h4">Dr. Steve Austin
                        </Typography>
                    </Grid>
                </Grid>
                    
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="dropper">
                        {(provided) => (
                            <ul {...provided.droppableProps} ref={provided.innerRef}>    
                                <Draggable draggableId="drop0" index="0">
                                    {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Task                                             ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}></Task>
                                        </li>
                                    )}
                                </Draggable>
                                {provided.placeholder}
                                <Draggable draggableId="drop1" index="1">
                                    {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Task                                             ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}></Task>
                                            <p>1</p>
                                        </li>
                                    )}
                                </Draggable>
                                {provided.placeholder}
                                <Draggable draggableId="drop2" index="2">
                                    {(provided) => (
                                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Task                                             ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}></Task>
                                        </li>
                                    )}
                                </Draggable>
                                {provided.placeholder}
                            </ul> 
                        )}
                    </Droppable> 
                </DragDropContext>
            </Paper>
        </Grid>
    );
}

export default DoctorCard;