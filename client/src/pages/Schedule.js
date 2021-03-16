import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    header: {
        textAlign: "center",
        color: "#27251F",
        backgroundColor: "#8A8D8F",
        borderColor: "#FA4616",
        borderStyle: "solid",
        padding: "5px"
      }
})

function Schedule() {
    const classes = useStyles();
    return (
        <Container>
            <Paper className={classes.header}>
                <Typography variant="h1">Doctor Scheduler</Typography>
            </Paper>
        </Container>
    )
}

export default Schedule;