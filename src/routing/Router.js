import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeIndex from "../components/Home/HomeIndex";
import NotFound from "../components/Common/NotFound/NotFound";
import ProgramRouter from "../components/Program/ProgramRouter";

const Router = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeIndex}/>
          <Route path="/program" component={ProgramRouter}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
  );
};

export default Router;
