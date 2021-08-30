import React from "react";
import Main from "./component/Main";
import Header from "./component/Header";
import Footer from "./component/Footer";
export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer author={"Ahmad Jallad"} />
      </>
    );
  }
}
