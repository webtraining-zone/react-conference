import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProgramIndex from "../components/Program/ProgramIndex";
import WelcomeIndex from "../components/Home/WelcomeIndex";

const Router = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomeIndex}/>
          <Route path="/program" component={ProgramIndex}/>
        </Switch>
      </BrowserRouter>
  );
};

export default Router;
