import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Paper, Typography, Grid, List, ListItem } from "@material-ui/core";
import API from "../utils/API";

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

    const [doctors, setDoctors] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadName();
    }, [])

    function loadName() {
        API.getAppointments()
        .then((res) => {
            setDoctors(res.data);
        })
        .catch(err => console.log(err));
    }

    console.log(doctors.length); // Testing length
    return (

        <Container>
            <Paper className={classes.header}>
                <Typography variant="h1">Doctor Scheduler</Typography>
                <Link to={"/schedule"}>
                    <Button variant="contained">Schedule</Button>
                </Link>
            </Paper>
            <Grid container direction="row">
                {doctors.map(doctor => {
                    console.log(doctor); // Testing object
                    return (
                        <DoctorCard key={doctor._id} />
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Appointment;