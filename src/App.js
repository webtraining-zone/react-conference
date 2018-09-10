import React, {Component} from "react";
import Router from "./routing/Router";
import "./styles/global.css";
import "./App.css";


class App extends Component {
  render() {
    return (
        <div className="App">
          <Router/>
        </div>
    );
  }
}

export default App;
