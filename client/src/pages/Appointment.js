import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Paper, Typography, Grid, List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";
import API from "../utils/API";

const useStyles = makeStyles({
    jumbo: {
        textAlign: "center",
        backgroundColor: "#8A8D8F",
        borderColor: "#FA4616",
        borderStyle: "solid",
        padding: "5px"
    },
    task: {
        backgroundColor: "#009CA6",
        alignContent: "center",
        marginTop: 10
    },
    root: {
        marginTop: "10px",
        alignItems: "center"
    },
    card: {
        padding: 10,
        backgroundColor: "#8A8D8F",
        borderColor: "#FA4616",
        borderStyle: "solid"
    },
    header: {
        borderColor: "#8A8D8F",
        borderBottomColor: "#FA4616",
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: "3px"
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

    // console.log(doctors.length); // Testing length
    return (

        <Container>
            <Paper className={classes.jumbo}>
                <Typography variant="h1">Doctor Scheduler</Typography>
                <Link to={"/schedule"}>
                    <Button variant="contained">Schedule</Button>
                </Link>
            </Paper>
            <Grid container direction="row">
                {doctors.map(doctor => {
                    // console.log(doctor); // Testing object
                    return (
                        <Grid container xs={6} sm={4} className={classes.root}>
                            <Paper className={classes.card}>
                                <Grid container direction="row">
                                    <Grid item xs={12} className={classes.header}>
                                        <Typography variant="h4">Dr. {doctor.name}
                                        </Typography>
                                    </Grid>

                                    {doctor.task.map(task => {
                                        console.log(task)
                                        return (
                                            <List className={classes.task}>
                                                <ListItem key={task._id}>
                                                    <ListItemText primary={`${task.date.month}/${task.date.day}/${task.date.year}`} secondary={`${task.time.start} - ${task.time.end}`} />
                                                    <ListSubheader>ID:{task._id}</ListSubheader>
                                                    <Button variant="contained">X</Button>
                                                </ListItem>
                                            </List>
                                        )
                                    })}
                                </Grid>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Appointment;