import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import HeroSearch from "./pages/HeroSearch";
import Gallery from "./pages/Gallery";
import axios from "axios";

class Main extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "11755932-20b04c3e8dde43204d753b81d",
    images: [],
    border: "grey",
    showGallery: false
  };

  handleTextChange = e => {
    const val = e.target.value;
    this.setState({ searchText: val });
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

  isVisible = () => {
    this.setState({ showGallery: false });
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
      console.log(this.state.images);
    }
  };

  handleSwitchView = () => {
    if (this.state.showGallery === false) {
      return (
        <HeroSearch
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
          handleTextChange={this.handleTextChange}
          isVisible={this.isVisible}
          state={this.state}
        />
      );
    } else {
      return (
        <div className="container-fluid">
          <Gallery images={this.state.images} />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-light bg-light">
          <a className="navbar-brand">Navbar</a>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input
              style={{ borderColor: this.state.border }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={this.state.searchText}
              onChange={this.handleTextChange}
            />

            <button
              className="btn btn-success"
              type="submit"
              onClick={this.handleClick}
            >
              Search
            </button>
          </form>
        </nav>
        {this.handleSwitchView()}
      </div>
    );
  }
}

export default Main;
