import React from "react";

export default class HornedBeasts extends React.Component {
  render() {
    return (
      <div className="segment">
        <h2 className="title">{this.props.title}</h2>
        <img
          src={this.props.imageUrl}
          title={this.props.title}
          alt={this.props.description}
        />
        <div className="description">
          <p className="text">{this.props.description}</p>
          <p
            className="text horns"
            style={{
              color: `${this.props.horns % 2 === 0 ? "#f69d3c" : "white"}`,
            }}
          >
            Horns Number :{this.props.horns}
          </p>
        </div>
      </div>
    );
  }
}
