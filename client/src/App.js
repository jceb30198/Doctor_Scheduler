import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import "./App.css";
import ScheduleCard from "./components/ScheduleCard";

class App extends Component {
  render() {
    return (
      <ScheduleCard>
        <Button variant="contained" color="primary">
      Hello World
    </Button>
      </ScheduleCard>
    );
  }
}

export default App;
