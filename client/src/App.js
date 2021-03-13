import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Paper, Typography } from "@material-ui/core";
import DoctorCard from "./components/DoctorCard";

class App extends Component {
  render() {
    const styles = {
      header: {
        textAlign: "center",
        color: "#27251F",
        backgroundColor: "#FA4616"
      }
    }
    return (
      
      <Container>
        <Paper style={styles.header}>
          <Typography variant="h1">Doctor Scheduler</Typography>
        </Paper>
        <DoctorCard>
        </DoctorCard>
      </Container>
    );
  }
}

export default App;