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

    const [docName, setDocName] = useState([]);
    const [formObject, setFormObject] = useState({});

    function handleInput(event) {
        // Grabbing the input characters
        const { name, value } = event.target
        setFormObject({...formObject, [name]: value});
    }
    
    function handleSubmit(event) {
        
        event.preventDefault();
        if (formObject.docName) {
            API.saveAppointment({
                name: formObject.docName
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
        console.log(formObject.docName);
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
                </Grid>
                 <Link /*to={"/"}*/>
                    <Button variant="contained" onClick={ handleSubmit }>Add Appointment</Button>
                </Link>
            </Paper>
        </Container>
    )
}

export default Schedule;