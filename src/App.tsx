import React from "react";
import { Router } from "react-router";
import { Navbar } from "./components/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Top } from "./pages/Top";
import { About } from "./pages/About";

const history = createBrowserHistory();

export const App: React.VFC = () => {
  return (
    <>
      <Router history={history}>
      <Navbar />
        <Switch>
          <Route exact path={"/"} component={Top} />
          <Route exact path={"/about"} component={About} />
        </Switch>
        <Redirect to={"/"} />
      </Router>
    </>
  );
};
