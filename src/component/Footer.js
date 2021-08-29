import React from "react";

export default class Footer extends React.Component {
  render() {
    return <div className="author">Author: {this.props.author}</div>;
  }
}
