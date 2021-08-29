import React from "react";
import HornedBeasts from "./HornedBeasts";
import ImagesData from "../FakeAPI/unsplash";

export default class Main extends React.Component {
  _key = [];
  fakeKey = () => {
    let key = Math.random() * 100;
    while (this._key.includes(key)) {
      key = Math.random() * 100;
    }
    this._key.push(key);
    return key;
  };
  renderImages(ImagesData) {
    return ImagesData.map((image) => {
      return (
        <HornedBeasts
          key={this.fakeKey()}
          title={image.title}
          imageUrl={image.image_url}
          description={image.description}
          horns={image.horns}
        />
      );
    });
  }
  render() {
    return (
      <div className="container main-container">
        {this.renderImages(ImagesData)}
      </div>
    );
  }
}
