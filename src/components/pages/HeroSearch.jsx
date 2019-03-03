import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "../stylesheets/Home.css";

class Home extends Component {
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.isVisible();

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
  render() {
    return (
      <div>
        <div className="bg">
          <div className="container search-bar ">
            <h2>PhotoBar</h2>
            <h4>Hundreds of stock photos, completely free</h4>
            <div className="input-group">
              <form className="form-inline" onSubmit={this.handleSubmit}>
                <input
                  style={{ borderColor: this.state.border }}
                  type="text"
                  className="form-control"
                  placeholder="Search Photos"
                  onChange={this.handleTextChange}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="submit"
                    onClick={this.handleClick}
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
