import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaSearchPlus } from "react-icons/fa";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// import Modal from "../modal";

import "../stylesheets/Gallery.css";

class Gallery extends Component {
  state = {
    modal: false,
    currentImg: ""
  };

  handleOpen = img => {
    this.setState({ modal: true, currentImg: img });
    console.log("open");
  };
  handleClose = () => {
    this.setState({ modal: false });
  };
  render() {
    const { images } = this.props;

    return (
      <div>
        <h3>{this.props.state.searchText} Photos</h3>
        <h6>{this.props.state.images.length} photos</h6>
        <div className="container">
          <div className="row">
            {images.map(img => (
              <div key={img.id} className="  top col-sm-12 col-lg-4">
                <div className="wrapper">
                  <img className="gallery-img" src={img.largeImageURL} alt="" />
                  <div className="overlay">
                    <div className="container">
                      <div className="row">
                        <div className="col-4">
                          <FaHeart style={{ color: "red" }} />
                          &nbsp;{img.likes}
                        </div>
                        <div className="col-6">{img.user}</div>
                        <div className="col-2">
                          <span
                            type="text"
                            onClick={() => this.handleOpen(img.largeImageURL)}
                          >
                            <FaSearchPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal
          isOpen={this.state.modal}
          className={this.props.className}
          centered={true}
        >
          <ModalHeader toggle={this.toggle}>cat</ModalHeader>
          <ModalBody>
            <img src={this.state.currentImg} alt="" />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default Gallery;
