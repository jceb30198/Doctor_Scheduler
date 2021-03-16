import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Button, Container, Paper, Typography } from "@material-ui/core";
//import DoctorCard from "./components/DoctorCard";
import Appointment from "./pages/Appointment";
import Schedule from "./pages/Schedule"

class App extends Component {
  render() {
    // const styles = {
    //   header: {
    //     textAlign: "center",
    //     color: "#27251F",
    //     backgroundColor: "#8A8D8F",
    //     borderColor: "#FA4616",
    //     borderStyle: "solid",
    //     padding: "5px"
    //   }
    // }
    return (
      <Router>

        <Switch>
          <Route exact path={["/", "/appointments"]}>
            <Appointment></Appointment>
          </Route>
          <Route exact path="/create-appt">
            <Schedule></Schedule>
          </Route>
        </Switch>

      </Router>
    );
  }
}

export default App;