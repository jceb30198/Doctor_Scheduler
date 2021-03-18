import React from "react";
import { Link } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Paper, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
    header: {
        textAlign: "center",
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
                <Link to={"/schedule"}>
                    <Button variant="contained">Schedule</Button>
                </Link>
            </Paper>
            <Grid container direction="row">
            <DoctorCard/>
            </Grid>
        </Container>
    )
}

export default Appointment;