import * as React from "react";
import { PureComponent } from "react";
import { StyleSheet } from "react-native";
import Svg, { G, Polygon } from "react-native-svg";
import styles, { svgSpecs } from "../yu-coin.styles";

interface IState {
  x: number;
}

class Shine extends PureComponent<{}, IState> {
  public state: IState = {
    x: -500,
  };

  private animationTimeout: NodeJS.Timer;
  private animationInterval: NodeJS.Timer;

  public componentWillUnmount() {
    clearTimeout(this.animationTimeout);
    clearInterval(this.animationInterval);
  }

  public componentDidMount() {
    this.animationInterval = global.setInterval(this.animate, 4000);
  }

  public animate = () => {
    if (this.state.x < 200) {
      return this.setState(
        ({ x }) => ({ x: x + 80 }),
        () => {
          this.animationTimeout = global.setTimeout(this.animate, 40);
        }
      );
    } else {
      return this.setState({ x: -500 });
    }
  };

  public render() {
    return (
      <Svg {...svgSpecs} style={StyleSheet.flatten([styles.svg, styles.absolute])}>
        <G x={String(this.state.x)} fillOpacity="0.5">
          <Polygon fill="#FFF" points={"0.5,277.7 277.9,0.3 403.6,0.3 126.2,277.7"} />
          <Polygon fill="#FFF" points="141.6,277.7 419,0.3 471.5,0.3 194.1,277.7" />
        </G>
      </Svg>
    );
  }
}

export default Shine;
