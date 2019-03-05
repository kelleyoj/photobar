import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "../stylesheets/HeroSearch.css";

class Home extends Component {
  state = {
    searchText: "",
    amount: 150,
    apiUrl: "https://pixabay.com/api",
    apiKey: "11755932-20b04c3e8dde43204d753b81d",
    images: [],
    border: "grey",
    showGallery: false,
    isLoading: false
  };

  handleTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
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
        .then(res => {
          this.props.updateImage(res.data.hits);
        })
        .then(this.setState({ isLoading: true }))
        .catch(err => console.log(err));
    });
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

    if (!this.isEmpty()) {
      this.props.handleText(this.state.searchText);
    }

    if (this.state.isLoading) {
      this.props.isVisible(true);
    }
  };
  render() {
    return (
      <div>
        <div className="bg">
          <div className="container search-bar ">
            <h2>PhotoBar</h2>
            <h5>
              Hundreds of stock photos, completely free.
              <br />
              See what you can find.
            </h5>

            <div className="form-group has-search">
              <form onSubmit={this.handleSubmit}>
                <span className="form-control-feedback">
                  <FaSearch />
                </span>
                <input
                  name="searchText"
                  style={{ borderColor: this.state.border }}
                  type="text"
                  className="form-control"
                  placeholder="Search Photos"
                  value={this.state.searchText}
                  onChange={this.handleTextChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
