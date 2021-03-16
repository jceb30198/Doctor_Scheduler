import React from "react";
import DoctorCard from "../components/DoctorCard";
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

function Appointment() {
    const classes = useStyles();
    return (

        <Container>
            <Paper className={classes.header}>
                <Typography variant="h1">Doctor Scheduler</Typography>
                <Button variant="contained">Schedule</Button>
            </Paper>
            <DoctorCard>
            </DoctorCard>
        </Container>
    )
}

export default Appointment;