import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import HeroSearch from "./pages/HeroSearch";
import Gallery from "./pages/Gallery";
import axios from "axios";
import "./stylesheets/Main.css";

class Main extends Component {
  state = {
    searchText: "",
    amount: 150,
    apiUrl: "https://pixabay.com/api",
    apiKey: "11755932-20b04c3e8dde43204d753b81d",
    images: [],
    border: "grey",
    showGallery: false
  };

  handleTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val });
  };

  handleText = text => {
    this.setState({ searchText: text });
  };

  isEmpty = () => {
    if (this.state.searchText === "") {
      return true;
    }
  };

  handleClick = () => {
    if (this.isEmpty()) {
      this.setState({
        border: "red"
      });
    } else {
      this.setState({
        border: "grey"
      });
    }
  };

  isVisible = boolean => {
    this.setState({ showGallery: boolean });
  };

  updateImage = img => {
    this.setState({ images: img });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.isEmpty()) this.setState({ showGallery: true });

    if (!this.isEmpty()) {
      axios
        .get(
          this.state.apiUrl +
            "/?key=" +
            this.state.apiKey +
            "&q=" +
            this.state.searchText +
            "&image_type=photo&per_page=" +
            this.state.amount +
            "&safesearch=true"
        )
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    }
  };

  handleSwitchView = () => {
    if (this.state.showGallery === false) {
      return (
        <HeroSearch
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
          handleTextChange={this.handleTextChange}
          handleText={this.handleText}
          isVisible={this.isVisible}
          state={this.state}
          updateImage={this.updateImage}
        />
      );
    } else {
      return (
        <div className="container-fluid">
          <Gallery state={this.state} images={this.state.images} />
        </div>
      );
    }
  };

  test = () => {
    console.log("cat");
  };

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-light bg-light">
          <span style={{}} className="navbar-brand">
            PhotoBar
          </span>
          <span
            className="home-icon mr-auto"
            onClick={() => this.isVisible(false)}
          >
            <FaHome />
          </span>
          <form id="demo-2" onSubmit={this.handleSubmit}>
            <input
              name="searchText"
              style={{ borderColor: this.state.border }}
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={this.state.searchText}
              onChange={this.handleTextChange}
            />
          </form>
        </nav>
        {this.handleSwitchView()}
      </div>
    );
  }
}

export default Main;
