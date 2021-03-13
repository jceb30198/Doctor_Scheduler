import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";

function Task() {
    return(
        <Grid container direction="row">
            <Grid item xs={12}>
                <Paper item xs={12} elevation={2}>Date Placeholder
                    <Button variant="contained">+</Button>
                </Paper>
            </Grid>
        </Grid>

    );
}



export default Task;