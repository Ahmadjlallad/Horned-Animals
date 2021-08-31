import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Card } from "react-bootstrap";

export default class HornedBeasts extends React.Component {
  state = {
    clickNumber: 0,
    imageHight: 0,
    cardBody: 0,
  };
  imageHightComp = React.createRef();
  cardBody = React.createRef();
  componentDidMount() {
    this.setState({ imageHight: this.imageHightComp, cardBody: this.cardBody });
  }

  renderLunchButton = (buttonState = true) => {
    if (!buttonState) return null;

    return (
      <Button
        onClick={() => {
          this.props.selectedButton(true);
          this.props.modalViewButton();
        }}
        variant="primary"
      >
        Launch demo modal
      </Button>
    );
  };
  render() {
    const width = this.props.width ?? `18rem`;
    return (
      <Card style={{ width }}>
        <Card.Img
          ref={this.imageHightComp}
          className="imagesH"
          variant="top"
          onClick={() =>
            this.setState({ clickNumber: this.state.clickNumber + 1 })
          }
          style={{
            height:
              (this.props.colHeight -
                this.state.imageHight * 2 -
                this.state.cardBody) /
                1.1 +
              "px",
          }}
          src={this.props.imageUrl}
          title={this.props.title}
          alt={this.props.description}
        />
        <Card.Body ref={this.cardBody}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>favorites: ❤ {this.state.clickNumber} ❤</Card.Text>
          {this.renderLunchButton(this.props.renderButton)}
        </Card.Body>
      </Card>
    );
  }
}
