import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#8A8D8F"
    }
})

function Task() {
    const classes = useStyles();

    return (
        <div>

            <Grid container direction="row" >
                <List className={classes.root}>
                    <ListItem>
                        <ListItemText primary="Jan 9, 2014" secondary="1 pm - 3 pm" />
                        <Button variant="contained">+</Button>
                    </ListItem>
                </List>

            </Grid>
            <br></br>

        </div>
    );
}



export default Task;