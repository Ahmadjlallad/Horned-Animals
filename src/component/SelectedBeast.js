import React from "react";
import HornedBeasts from "./HornedBeasts";
import { Modal } from "react-bootstrap";

export default class SelectedBeast extends React.Component {
  state = {};
  renderImages(image) {
    return (
      <HornedBeasts
        selectedButton={this.props.showModelUpdate}
        title={image.title}
        imageUrl={image.image_url}
        description={image.description}
        horns={image.horns}
        onClick={() => this.props.clickedObject(image)}
        renderButton={!this.props.show}
        stateGrabOnClick={this.props.stateGrabOnClick}
        width={"auto"}
      />
    );
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            {/* <Modal.Title>Modal heading</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>{this.renderImages(this.props.clickedObject)}</Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}
