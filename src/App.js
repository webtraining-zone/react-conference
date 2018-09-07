import React, {Component} from "react";
import Header from "./components/Header/Header";
import Program from "./components/Program/Program";
import WelcomeHero from "./components/Home/WelcomeHero";
import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <WelcomeHero/>
          <Program/>
        </div>
    );
  }
}

export default App;
