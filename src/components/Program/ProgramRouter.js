import React from "react";
import {Switch, Route} from "react-router-dom";
import ProgramIndex from "./ProgramIndex";
import ProgramTalkDetail from "./ProgramTalkDetail";

const ProgramRouter = () => (
    <Switch>
      <Route exact path='/program' component={ProgramIndex}/>
      <Route path='/program/:slug' component={ProgramTalkDetail}/>
    </Switch>
);

export default ProgramRouter;
