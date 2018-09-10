import React from "react";
import ProgramAgenda from "./ProgramAgenda";
import ProgramTopMessage from "./ProgramTopMessage";

const ProgramIndex = (props) => {

  const {history} = props;

  return (
      <div>
        <ProgramTopMessage/>
        <ProgramAgenda history={history}/>
      </div>
  );
};

export default ProgramIndex;
