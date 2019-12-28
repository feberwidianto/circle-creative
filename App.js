import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Daftar from "./Components/Daftar";
import CariTentor from "./Components/CariTentor";
import Program from "./Components/Program";
import Tentor from "./Components/Tentor";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <CariTentor />
            </Route>

            <Route path="/" component={CariTentor} exact />
            <Route path="/program" component={Program} exact />
            <Route path="/tentor" component={Tentor} exact />
            <Route path="/daftar" component={Daftar} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
