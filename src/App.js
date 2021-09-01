import React from "react";
import Main from "./component/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HornedBeastsData from "./FakeAPI/unsplash.json";
import SelectedBeast from "./component/SelectedBeast";

export default class App extends React.Component {
  state = {
    show: false,
    clickedObject: [],
    grabOnClick: 0,
    hornNumber: 0,
  };

  grabOnClick = (clicked) => {
    this.setState({ grabOnClick: clicked + this.state.grabOnClick + 1 });
  };
  showModelUpdate = (updateValue) => {
    this.setState({ show: updateValue });
  };
  clickedObject = (updateValue) => {
    this.setState({ clickedObject: updateValue });
  };
  selectedHorn = (hornNumber) => {
    this.setState({ hornNumber });
  };
  sendHornedBeastsData = (data) => {
    if (this.state.hornNumber === 0) return data;
    else
      return data.filter((singlePiceOfData) => {
        return singlePiceOfData.horns === this.state.hornNumber;
      });
  };

  handleClose = () => this.setState({ show: false });
  render() {
    return (
      <>
        <Header />
        <Main
          showModelUpdate={this.showModelUpdate}
          HornedBeastsData={this.sendHornedBeastsData(HornedBeastsData)}
          clickedObject={this.clickedObject}
          selectedHorn={this.selectedHorn}
        />
        <SelectedBeast
          show={this.state.show}
          clickedObject={this.state.clickedObject}
          handleClose={this.handleClose}
          stateGrabOnClick={this.state.grabOnClick}
        />
        <Footer author={"Ahmad Jallad"} />
      </>
    );
  }
}
