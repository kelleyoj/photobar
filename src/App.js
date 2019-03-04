import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Main from "./components/Main";
import "./App.css";
import Modal from "./components/modal";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
