import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  return (
    <Router >
      <Nav />
      <Header />
     
      <Switch>
        <Route exact path="/" render={() => <Books />} />
        <Route exact path="/save" component={Saved} />
        <Route exact path="/search" component={Books} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
