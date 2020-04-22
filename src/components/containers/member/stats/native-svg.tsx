import React, { Component } from "react";
import { Animated } from "react-native";
import Svg, { ClipPath, Defs, LinearGradient, Rect, Stop, SvgProps } from "react-native-svg";

export interface IContentLoaderProps extends SvgProps {
  animate?: boolean;
  backgroundColor?: string;
  foregroundColor?: string;
  rtl?: boolean;
  speed?: number;
  uniqueKey?: string;
  style?: any;
}

class NativeSvg extends Component<IContentLoaderProps, { offset: number }> {
  public state = { offset: -1 };

  protected animatedValue = new Animated.Value(0);

  protected fixedId = this.props.uniqueKey;

  protected idClip = `${this.fixedId}-diff`;

  protected idGradient = `${this.fixedId}-animated-diff`;

  public setAnimation = () => {
    const { speed = 1.2 } = this.props;
    // Turn in seconds to keep compatible with web one
    const durInSeconds = speed * 1000;

    Animated.timing(this.animatedValue, {
      toValue: 2,
      delay: durInSeconds,
      duration: durInSeconds,
      useNativeDriver: true,
    }).start(() => {
      this.animatedValue.setValue(-1);
      this.setAnimation();
    });
  };

  public componentDidMount = () => {
    const { animate = true } = this.props;

    if (animate) {
      this.setAnimation();

      this.animatedValue.addListener(({ value }) => {
        this.setState({
          offset: value,
        });
      });
    }
  };

  public componentWillUnmount = () => {
    const { animate = true } = this.props;

    if (animate) {
      this.animatedValue.removeAllListeners();
    }
  };

  public render() {
    const {
      children,
      backgroundColor = "#f5f6f7",
      foregroundColor = "#eee",
      rtl = false,
      style = {},
      uniqueKey,
      animate = true,
      speed = 1.2,
      ...props
    } = this.props;

    const { offset } = this.state;
    const offset1 = offsetValueBound(offset - 1);
    const offset2 = offsetValueBound(offset);
    const offset3 = offsetValueBound(offset + 1);

    const rtlStyle: object = rtl ? { transform: [{ rotateY: "180deg" }] } : {};
    const svgStyle = { ...style, ...rtlStyle };

    return (
      <Svg style={svgStyle} {...props}>
        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${this.idClip})`}
          clipPath={`url(#${this.idGradient})`}
        />

        <Defs>
          <ClipPath id={this.idGradient}>{children}</ClipPath>

          <LinearGradient id={this.idClip} x1={"-100%"} y1={0} x2={"100%"} y2={0}>
            <Stop offset={offset1} stopColor={backgroundColor} />
            <Stop offset={offset2} stopColor={foregroundColor} />
            <Stop offset={offset3} stopColor={backgroundColor} />
          </LinearGradient>
        </Defs>
      </Svg>
    );
  }
}

const offsetValueBound = (value: number) => {
  if (value > 1) {
    return "1";
  }

  if (value < 0) {
    return "0";
  }

  return String(value);
};

export default NativeSvg;
