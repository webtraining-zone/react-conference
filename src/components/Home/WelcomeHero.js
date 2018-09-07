import React from "react";

const WelcomeHero = (props) => {

  return (
      <section className="b-section b-section--dark">
        <div className="b-hero">
          <div className="b-hero__image b-image-container p-5 text-center">
            <img
                src="http://conference.webtraining.fun/img/welcome/connection.png"
                alt="Let's go!"
                className="img-fluid"/>
          </div>

          <div className="b-hero__text pt-5 pb-5">
            <span className="b-hero__text-top">
                01 y 02 de noviembre de 2018
            </span>
            <span className="b-hero__text-bottom">
                Monterrey, NL, México
            </span>
          </div>
        </div>
      </section>
  );
};

export default WelcomeHero;
