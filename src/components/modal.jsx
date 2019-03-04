// import React, { Component } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { FaSearchPlus } from "react-icons/fa";

// class ModalExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <span type="text" onClick={this.toggle}>
//           <FaSearchPlus />
//         </span>
//         <Modal
//           isOpen={this.state.modal}
//           toggle={this.toggle}
//           className={this.props.className}
//           centered={true}
//         >
//           <ModalHeader toggle={this.toggle}>
//             {this.props.images.user}
//           </ModalHeader>
//           <ModalBody>
//             <img src={this.props.images.largeImageURL} alt="" />
//           </ModalBody>
//           <ModalFooter>
//             <Button color="secondary" onClick={this.toggle}>
//               Close
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default ModalExample;
