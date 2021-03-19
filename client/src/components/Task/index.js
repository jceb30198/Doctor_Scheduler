import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#009CA6",
        alignContent: "center",
        marginTop: 10
    }
})

function Task(props) {
    const classes = useStyles();
    const appt = props.task;

    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemText primary={`${appt.date.month}/${appt.date.day}/${appt.date.year}`} secondary={`${appt.time.start} pm - ${appt.time.end} pm`} />
                <ListSubheader>ID:{appt._id}</ListSubheader>
                <Button variant="contained">X</Button>
            </ListItem>
        </List>
    );
}



export default Task;