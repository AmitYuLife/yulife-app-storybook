import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export interface IProps extends TouchableOpacityProps {
  onPress: () => void;
  children: React.ReactNode;
}

interface IState {
  isClicked: boolean;
}

export default class TouchableOpacityWithState extends React.PureComponent<IProps, IState> {
  public state: IState = {
    isClicked: false,
  };
  private timeout: NodeJS.Timer = null;

  public componentWillUnmount() {
    if (this.timeout) {
      global.clearTimeout(this.timeout);
    }
  }

  public render() {
    return <TouchableOpacity {...this.props} onPress={this.handleClick} />;
  }

  private handleClick = () => {
    if (!this.state.isClicked) {
      this.setState({ isClicked: true }, this.props.onPress);
      this.timeout = global.setTimeout(() => this.setState({ isClicked: false }), 1000);
    }
  };
}
