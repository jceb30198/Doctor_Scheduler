import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Paper, Typography, TextField} from "@material-ui/core";
import API from "../utils/API";

const useStyles = makeStyles({
    header: {
        textAlign: "center",
        backgroundColor: "#3aba8e",
        borderColor: "#7eb6af",
        borderStyle: "solid",
        padding: "5px"
    },
    form: {
        textAlign: "center",
        backgroundColor: "#3aba8e",
        borderColor: "#7eb6af",
        borderStyle: "solid",
        marginTop: "10px",
        padding: "5px"
    },
    innerForm: {
        padding: "3px",
        margin: "3px"
    },
    formInput: {
        backgroundColor: "white",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "3%"
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
        

        console.log(formObject);
        if (formObject.docName && formObject.end) {
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

        <Grid>

            <Typography variant="h1" className={classes.header}>Doctor Scheduler</Typography>
            <Container>

                <Paper className={classes.form}>
                    <Paper className={classes.formInput} elevation={5}>

                        <Grid>
                            <TextField
                                className={classes.innerForm}
                                label="Doctor Name (Jane Doe)"
                                name="docName"
                                onChange={handleInput}>
                            </TextField>
                        </Grid>
                        <Grid>
                            <TextField
                                className={classes.innerForm}
                                label="Month (MM)"
                                name="month"
                                onChange={handleInput}>
                            </TextField>
                            <TextField
                                className={classes.innerForm}
                                label="Day (DD)"
                                name="day"
                                onChange={handleInput}>
                            </TextField>
                            <TextField
                                className={classes.innerForm}
                                label="Year (YYYY)"
                                name="year"
                                onChange={handleInput}>
                            </TextField>
                        </Grid>
                        <Grid>
                            <TextField
                                className={classes.innerForm}
                                label="Start Time (0000)"
                                name="start"
                                onChange={handleInput}>
                            </TextField>
                            <TextField
                                className={classes.innerForm}
                                label="End Time (2300)"
                                name="end"
                                onChange={handleInput}>
                            </TextField>
                        </Grid>
                        <br/>
                    </Paper>
                    <br/>
                    <Link to={"/"}>
                        <Button variant="contained" onClick={handleSubmit}>Add Appointment</Button>
                    </Link>
                </Paper>
            </Container>
        </Grid>

    )
}

export default Schedule;