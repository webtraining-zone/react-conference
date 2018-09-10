import React from "react";
import HomeHero from "./HomeHero";
import HomeMap from "./HomeMap";
import HomeQuestions from "./HomeQuestions";

const HomeIndex = () => {
  return (
      <div>
        <HomeHero/>
        <HomeMap/>
        <HomeQuestions/>
      </div>
  );
};

export default HomeIndex;
