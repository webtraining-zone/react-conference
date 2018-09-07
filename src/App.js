import React, {Component} from "react";
import Header from "./components/Header/Header";
import TopMessage from "./components/Program/TopMessage";
import Program from "./components/Program/Program";
import WelcomeHero from "./components/Home/WelcomeHero";
import "./styles/global.css";
import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <WelcomeHero/>
          <TopMessage/>
          <Program/>
        </div>
    );
  }
}

export default App;
