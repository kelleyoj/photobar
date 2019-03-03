import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Gallery from "./components/pages/Gallery.jsx";
import Search from "./components/Search.jsx";
import NavBar from "./components/Main";
import Main from "./components/Main";
import "./App.css";

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
