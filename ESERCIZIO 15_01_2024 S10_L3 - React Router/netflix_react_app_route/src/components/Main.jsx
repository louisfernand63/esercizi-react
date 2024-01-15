import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThLarge, faTh } from "@fortawesome/free-solid-svg-icons";
import MyFooter from "./MyFooter";
import HomeMain from "./HomeMain";
import MyNavbar from "./MyNavbar";
import logo from "../data/logo.png";
import ProfiloMain from "./ProfiloMain";

library.add(faThLarge, faTh);

class Main extends Component {
  state = {
    showUserProfile: false,
  };

  handleIconClick = () => {
    this.setState({
      showUserProfile: true,
    });
  };

  handleHomeClick = () => {
    this.setState({
      showUserProfile: false,
    });
  };

  render() {
    const { showUserProfile } = this.state;

    return (
      <>
        <MyNavbar
          logo={logo}
          onIconClick1={this.handleIconClick}
          onIconClick2={this.handleHomeClick}
        />

        {showUserProfile ? <ProfiloMain /> : <HomeMain />}

        <MyFooter />
      </>
    );
  }
}

export default Main;
