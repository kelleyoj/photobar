import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaSearchPlus } from "react-icons/fa";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../stylesheets/Gallery.css";

class Gallery extends Component {
  state = {
    modal: false,
    currentImg: "",
    creator: ""
  };

  handleOpen = img => {
    this.setState({
      modal: true,
      currentImg: img.largeImageURL,
      creator: img.user
    });
  };
  handleClose = () => {
    this.setState({ modal: false });
  };
  toggle = () => {
    if (this.state.modal === "false") {
      this.setState({ modal: true });
    } else {
      this.setState({ modal: false });
    }
  };

  render() {
    const { images } = this.props;

    return (
      <div>
        <div className="container gallery">
          <h3>{this.props.state.searchText} Photos</h3>
          <h6>{this.props.state.images.length} photos</h6>
          <div className="row">
            {images.map(img => (
              <div key={img.id} className="  top col-sm-12 col-lg-4">
                <div className="wrapper">
                  <img className="gallery-img" src={img.largeImageURL} alt="" />
                  <div className="overlay">
                    <div className="container">
                      <div className="row">
                        <div className="col-6">
                          <FaHeart style={{ color: "red" }} />
                          &nbsp;{img.likes}
                        </div>
                        <div className="col-6 search-icon">
                          <span
                            type="text"
                            onClick={() => this.handleOpen(img)}
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
          toggle={this.toggle}
          className={this.props.className}
          centered={true}
        >
          <ModalHeader toggle={this.toggle}>
            By: {this.state.creator}
          </ModalHeader>
          <ModalBody>
            <img className="img-fluid" src={this.state.currentImg} alt="" />
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
