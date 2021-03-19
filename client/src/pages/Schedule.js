import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Paper, Typography, TextField} from "@material-ui/core";
import API from "../utils/API";

const useStyles = makeStyles({
    header: {
        textAlign: "center",
        backgroundColor: "#8A8D8F",
        borderColor: "#FA4616",
        borderStyle: "solid",
        padding: "5px"
    },
    form: {
        textAlign: "center",
        backgroundColor: "#8A8D8F",
        borderColor: "#FA4616",
        borderStyle: "solid",
        marginTop: "10px",
        padding: "5px"
    },
    innerForm: {
        padding: "3px",
        margin: "3px"
    }
})

function Schedule() {
    const classes = useStyles();

    const [docArr, setDocArr] = useState([]);
    const [formObject, setFormObject] = useState({});

    function handleInput(event) {
        // Grabbing the input characters
        const { name, value } = event.target
        setFormObject({...formObject, [name]: value});
    }
    
    function handleSubmit(event) {
        event.preventDefault();

        console.log(formObject);
        if (formObject.docName) {
            API.saveAppointment({
                name: formObject.docName,
                task: [{
                    date: {
                        month: formObject.month,
                        day: formObject.day,
                        year: formObject.year
                    },
                    time: {
                        start: formObject.start,
                        end: formObject.end
                    }
                }]

            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        }
    }

    return (
        <Container>
            <Paper className={classes.header}>
                <Typography variant="h1">Doctor Scheduler</Typography>
            </Paper>

            <Paper className={classes.form}>
                <Grid container>

                <TextField 
                className={classes.innerForm}
                label="Doctor Name"
                name="docName"
                onChange={ handleInput }>
                </TextField>
                <TextField 
                className={classes.innerForm}
                label="Month"
                name="month"
                onChange={ handleInput }>
                </TextField>
                <TextField 
                className={classes.innerForm}
                label="Day"
                name="day"
                onChange={ handleInput }>
                </TextField>
                <TextField 
                className={classes.innerForm}
                label="Year"
                name="year"
                onChange={ handleInput }>
                </TextField>
                <TextField 
                className={classes.innerForm}
                label="Start Time"
                name="start"
                onChange={ handleInput }>
                </TextField>
                <TextField 
                className={classes.innerForm}
                label="End Time"
                name="end"
                onChange={ handleInput }>
                </TextField>
                </Grid>
                 <Link /*to={"/"}*/>
                    <Button variant="contained" onClick={ handleSubmit }>Add Appointment</Button>
                </Link>
            </Paper>
        </Container>
    )
}

export default Schedule;