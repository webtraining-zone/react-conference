import React, {Component} from "react";
import Header from "./components/Header/Header";
import Program from "./components/Program/Program";
import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <Program/>
        </div>
    );
  }
}

export default App;
