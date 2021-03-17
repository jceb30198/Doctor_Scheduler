import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appointment from "./pages/Appointment";
import Schedule from "./pages/Schedule"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={["/", "/appointments"]}>
            <Appointment/>
          </Route>
          <Route exact path="/schedule">
            <Schedule/>
          </Route>
        </Switch>

      </Router>
    );
  }
}

export default App;