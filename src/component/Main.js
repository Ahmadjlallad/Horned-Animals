import React from "react";
import HornedBeasts from "./HornedBeasts";
import ImagesData from "../FakeAPI/unsplash";
import { Row, Container, Col } from "react-bootstrap";

export default class Main extends React.Component {
  colHeight = React.createRef();
  state = { coloneHeight: 0 };
  _key = [];
  fakeKey = () => {
    let key = Math.random() * 100;
    while (this._key.includes(key)) {
      key = Math.trunc(Math.random() * 1000);
    }
    this._key.push(key);
    return key;
  };
  group3Img = (ImagesData) => {
    const GroupImagesFunctions = () => {
      const headersVar = [];
      for (let i = 0; i < Math.round(ImagesData.length / 3); i++) {
        headersVar.push([]);
        for (let j = 0; j < 3; j++) {
          headersVar[i].push(this.renderImages(ImagesData)?.[j + i * 3]);
        }
      }
      return headersVar;
    };
    return GroupImagesFunctions().map((groped) => {
      return (
        <Row
          xs="auto"
          key={this.fakeKey()}
          lg={3}
          style={{ marginBottom: "30px" }}
        >
          {groped.flat()}
        </Row>
      );
    });
  };
  renderImages(ImagesData) {
    return ImagesData.map((image) => {
      return (
        <Col md={4} key={this.fakeKey()} ref={this.colHeight}>
          <HornedBeasts
            colHeight={this.state.coloneHeight}
            title={image.title}
            imageUrl={image.image_url}
            description={image.description}
            horns={image.horns}
          />
        </Col>
      );
    });
  }
  componentDidMount() {
    this.setState({ coloneHeight: this.colHeight.current.clientHeight });
    console.log(this.colHeight.current.clientHeight);
  }
  render() {
    return <Container>{this.group3Img(ImagesData)}</Container>;
  }
}
