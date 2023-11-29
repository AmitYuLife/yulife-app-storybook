import React from "react";
import Lottie from "lottie-react";
import { View } from "react-native";

class LottieView extends React.Component {
  render() {
    return (
      <Lottie
        style={this.props.style}
        ref={this.props?.ref}
        animationData={this.props?.source}
        loop={this.props.loop}
        autoplay={this.props.autoPlay}
      />
    );
  }
}

export default LottieView;
