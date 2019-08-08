import React, { Component } from "react";
import SignUpModal from "../Components/auth/SignUpModal";
import TitleBar from "../Components/TitleBar";

class LogInScreen extends Component {
  render() {
    document.body.style.backgroundImage = "url(images/rain.jpg";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100%";

  return (
    <>
      <TitleBar />
      <SignUpModal />
    </>
    );
  }
}

export default LogInScreen;
