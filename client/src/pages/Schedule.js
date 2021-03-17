import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Paper, Typography, TextField} from "@material-ui/core";

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
    const [name, setName] = useState("");

    function handleClick(event) {
        // Printing the characters set by setDocName
        event.preventDefault();
        console.log(docName);
    }

    function handleChange(event) {
        // Grabbing the input characters
        const { value } = event.target
        setDocName(value);
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
                onChange={ handleChange }>
                </TextField>
                </Grid>
                <Link>
                    <Button variant="contained" onClick={ handleClick }>Add Appointment</Button>
                </Link>
            </Paper>
        </Container>
    )
}

export default Schedule;