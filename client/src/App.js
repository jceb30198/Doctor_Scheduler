import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import DoctorCard from "./components/DoctorCard";

class App extends Component {
  render() {
    const styles = {
      header: {
        textAlign: "center",
        color: "#27251F",
        backgroundColor: "#8A8D8F",
        borderColor: "#FA4616",
        borderStyle: "solid",
        padding: "5px"
      }
    }
    return (
      
      <Container>
        <Paper style={styles.header}>
          <Typography variant="h1">Doctor Scheduler</Typography>
          <Button variant="contained">Schedule</Button>
        </Paper>
        <DoctorCard>
        </DoctorCard>
      </Container>
    );
  }
}

export default App;