import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeIndex from "../components/Home/HomeIndex";
import NotFound from "../components/Common/NotFound/NotFound";
import ProgramRouter from "../components/Program/ProgramRouter";
import Header from "../components/Common/Header/Header";

const Router = () => {
  return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={HomeIndex}/>
            <Route path="/program" component={ProgramRouter}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
};

export default Router;
