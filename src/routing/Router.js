import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProgramIndex from "../components/Program/ProgramIndex";
import HomeIndex from "../components/Home/HomeIndex";
import NotFound from "../components/Common/NotFound/NotFound";

const Router = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeIndex}/>
          <Route path="/program" component={ProgramIndex}/>
          <Route path="/program/:slug" component={ProgramIndex}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
  );
};

export default Router;
