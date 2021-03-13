import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#8A8D8F",
        alignContent: "center",
        marginTop: 10
    }
})

function Task() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemText primary="Jan 9, 2014" secondary="1 pm - 3 pm" />
                <Button variant="contained">+</Button>
            </ListItem>
        </List>
    );
}



export default Task;