import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Main from "./components/Main";
import "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
