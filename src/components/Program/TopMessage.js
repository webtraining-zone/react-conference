import React from "react";

const TopMessage = (props) => {

  return (
      <section className="b-section b-section--dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
              <div className="b-image-container p-5">
                <img
                    src="http://conference.webtraining.fun/img/program/schedule.png"
                    alt="Let's talk and learn"
                    className="img-fluid"/>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <h1 className="mt-0 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5 text-center text-sm-left">Programa</h1>
              <p className="text-center text-sm-left">
                Platiquemos y aprendamos</p>
            </div>
          </div>
        </div>
      </section>
  );

};

export default TopMessage;
