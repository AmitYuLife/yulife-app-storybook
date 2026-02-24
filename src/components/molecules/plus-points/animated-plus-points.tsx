import React from "react";
import { Animated, Easing, Platform, ViewStyle } from "react-native";
import PlusPoints from "./plus-points";
import styles from "./plus-points.styles";
import { CHALLENGE_REWARD } from "@ids";
import { TemplateTextType } from "@styles";

type AnimatedType = "collect-reward" | "challenge-success";

interface IProps {
  type: AnimatedType;
  coins?: number;
  textType?: TemplateTextType;
  style?: ViewStyle;
}

interface IState {
  translateX: Animated.Value;
  translateY: Animated.Value;
  scale: Animated.Value;
}

export default class AnimatedPlusPoints extends React.PureComponent<IProps, IState> {
  public state = {
    translateX: new Animated.Value(0),
    translateY: new Animated.Value(this.props.type === "collect-reward" ? -600 : Platform.OS === "android" ? -10 : 0),
    scale: new Animated.Value(1),
  };

  public timeout: ReturnType<typeof setTimeout> = null;

  public componentDidMount() {
    const { translateX, translateY, scale } = this.state;
    // Wait to be mounted properly before starting animation

    this.timeout = setTimeout(() => {
      if (this.props.type === "collect-reward") {
        Animated.timing(translateY, {
          toValue: -5,
          duration: 700,
          easing: Easing.elastic(1.1),
          useNativeDriver: true,
        }).start(() => {
          Animated.spring(scale, {
            toValue: 2,
            tension: 400,
            useNativeDriver: true,
          }).start();
        });
      } else {
        Animated.parallel([
          Animated.loop(
            Animated.sequence([
              Animated.timing(translateX, {
                toValue: -2,
                duration: 50,
                useNativeDriver: true,
              }),
              Animated.timing(translateX, {
                toValue: 1,
                duration: 50,
                useNativeDriver: true,
              }),
            ]),
            {
              iterations: 3,
            }
          ),
          Animated.sequence([
            Animated.spring(scale, {
              toValue: 2,
              speed: 20,
              useNativeDriver: true,
            }),
            Animated.spring(scale, {
              toValue: 1,
              speed: 10,
              useNativeDriver: true,
            }),
          ]),
        ]).start();
      }
    }, 500);
  }

  public componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  public render() {
    const { translateX, translateY, scale } = this.state;
    return (
      <Animated.View
        style={[
          styles.textWrapper,
          {
            height: Platform.OS === "android" ? 40 : 20,
            transform: [
              { translateX },
              {
                translateY,
              },
              { scale },
            ],
          },
          this.props.style,
        ]}
      >
        <PlusPoints
          coins={this.props.coins}
          testID={CHALLENGE_REWARD(this.props.coins)}
          textType={this.props.textType}
        />
      </Animated.View>
    );
  }
}
