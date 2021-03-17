import React from "react";
import { Link } from "react-router-dom";
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
      },
      form: {
        textAlign: "center",
        color: "#27251F",
        backgroundColor: "#8A8D8F",
        borderColor: "#FA4616",
        borderStyle: "solid",
        marginTop: "10px",
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

            <Paper className={classes.form}>
                <Link to={"/"}>
                    <Button variant="contained">Add Appointment</Button>
                </Link>
            </Paper>
        </Container>
    )
}

export default Schedule;