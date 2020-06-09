import * as React from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { CIRCLE_SIZE } from "./level.styles";
import { DETOX_ENABLED } from "@services/socket";

interface IProps {
  interval?: number;
  size: number;
  pulseMaxSize: number;
  backgroundColor: string;
  style?: any;
}

interface IState {
  value: number;
}

export default class Pulse extends React.PureComponent<IProps, IState> {
  public state: IState = {
    value: 0,
  };
  private pulseInterval: NodeJS.Timer = null;
  private anim = new Animated.Value(0);
  private interpolation = {
    inputRange: [0, 1],
    outputRange: [1, this.props.pulseMaxSize / this.props.size],
  };
  public componentDidMount() {
    if (!DETOX_ENABLED) {
      this.pulseInterval = global.setInterval(() => {
        this.setState(
          ({ value }) => ({ value: value ? 0 : 1 }),
          () => {
            Animated.timing(this.anim, {
              duration: this.props.interval,
              easing: Easing.in((n: number) => n),
              toValue: this.state.value,
              useNativeDriver: false,
            }).start();
          }
        );
      }, 1000);
    }
  }

  public componentWillUnmount() {
    if (this.pulseInterval) {
      global.clearInterval(this.pulseInterval);
    }
  }

  public render() {
    const { pulseMaxSize, backgroundColor, style } = this.props;

    return (
      <View
        style={[
          styles.circleWrapper,
          {
            height: pulseMaxSize,
            marginLeft: -pulseMaxSize / 2,
            width: pulseMaxSize,
          },
          typeof style.bottom === "undefined"
            ? { top: (CIRCLE_SIZE - pulseMaxSize) / 2 }
            : { bottom: (CIRCLE_SIZE - pulseMaxSize) / 2 },
        ]}
      >
        <Animated.View
          style={[
            {
              backgroundColor,
              borderRadius: 999,
              height: this.props.size,
              opacity: 0.2,
              width: this.props.size,
              transform: [{ scale: this.anim.interpolate(this.interpolation) }],
            },
            style,
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleWrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
