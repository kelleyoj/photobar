import React, { Component } from "react";
import axios from "axios";
import Gallery from "./pages/Gallery";

const Search = state => {
  let img = [];
  axios
    .get(
      state.apiUrl +
        "/?key=" +
        state.apiKey +
        "&q=" +
        state.searchText +
        "&image_type=photo&per_page=" +
        state.amount +
        "&safesearch=true"
    )
    .then(function(res) {
      img.push(res.data.hits);
    })
    .catch(err => console.log(err));
  //   console.log(this.props.state.searchText);
  return <div>{img.length > 0 ? <Gallery images={img} /> : null}</div>;
};

export default Search;
