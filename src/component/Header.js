import React from "react";
const upper = `horned animals images`
  .split(" ")
  .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
  .join(" ");
export default class Header extends React.Component {
  render() {
    return <h1 className="Header">{upper}</h1>;
  }
}
