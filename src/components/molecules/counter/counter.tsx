import { Text } from "@atoms/index";
import { VIEW_TOP_RIGHT_COIN_COUNTER } from "@ids";
import * as React from "react";
import { Animated, TextStyle } from "react-native";
import { addCommasToNumber } from "@utils";

interface IProps {
  duration?: number;
  value: number;
  textAfterValue?: string;
  textBeforeValue?: string;
  textStyle?: TextStyle;
}

interface IState {
  value: number;
}

class Counter extends React.PureComponent<IProps, IState> {
  private animatedValue: Animated.Value;
  constructor(props: IProps) {
    super(props);

    const { value } = props;

    this.animatedValue = new Animated.Value(value);
    this.animatedValue.addListener(this.onValueChanged);

    this.state = { value };
  }

  public componentDidUpdate({ value }: IProps) {
    if (value !== this.props.value) {
      this.animatedValue.stopAnimation();
      this.move();
    }
  }

  public componentWillUnmount() {
    this.animatedValue.stopAnimation();
    this.animatedValue.removeAllListeners();
  }

  public render() {
    const { textAfterValue = "", textBeforeValue = "", textStyle } = this.props;
    const { value } = this.state;
    const renderValue = `${textBeforeValue} ${addCommasToNumber(value)} ${textAfterValue}`.trim();

    return (
      <Text style={textStyle} testID={VIEW_TOP_RIGHT_COIN_COUNTER(value)}>
        {renderValue}
      </Text>
    );
  }

  private onValueChanged = (e: Partial<IProps>) => {
    this.setState({
      value: Math.floor(e.value),
    });
  };

  private move = () => {
    const { duration = 1000, value } = this.props;

    Animated.timing(this.animatedValue, {
      duration,
      toValue: value,
      useNativeDriver: true,
    }).start();
  };
}

export default Counter;
