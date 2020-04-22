import { labels as defaultLabels } from "@navigation/root";
import { Style } from "@styles/index";
import * as React from "react";
import { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Giraffe, Scroll, Treasure } from "./assets";
import Trophy from "./assets/trophy";
import styles from "./nav-bar.styles";

export interface ILabel {
  name: string;
  onPress: () => void;
  colour?: IColours;
}

export type IColours = "blue" | "dark" | "darker" | "desert" | "light" | "pink" | "mountain" | "forest";

interface IProps {
  activeIndex: number;
  hasNotification?: boolean;
  labels?: ILabel[];
  highlightedLabel?: HighlightedLabel;
  additionalBottom?: number;
}

type HighlightedLabel = "yucoin" | "quests" | "leaderboard" | "rewards";

interface IState {
  pressed: number;
}

class NavBar extends PureComponent<IProps, IState> {
  public state: IState = {
    pressed: null,
  };

  public render() {
    const { activeIndex, hasNotification, labels = defaultLabels, highlightedLabel, additionalBottom = 0 } = this.props;
    const { pressed } = this.state;

    return (
      <View
        style={StyleSheet.flatten([
          styles.outerWrapper,
          { bottom: Style.SCALE_UP_AND_DOWN((isIphoneX() ? 30 : 20) + additionalBottom) },
        ])}
      >
        <View style={styles.wrapper}>
          <Giraffe
            isPressed={pressed === 0}
            isActive={activeIndex === 0}
            isHighlighted={highlightedLabel === "yucoin"}
            onPressIn={labels[0].onPress}
            onPressOut={this.handlePressOut(labels[0].onPress)}
          />

          <Scroll
            isPressed={pressed === 1}
            isActive={activeIndex === 1}
            isHighlighted={highlightedLabel === "quests"}
            onPressIn={labels[1].onPress}
            onPressOut={this.handlePressOut(labels[1].onPress)}
            hasNotification={hasNotification}
          />

          <Trophy
            isPressed={pressed === 2}
            isActive={activeIndex === 2}
            isHighlighted={highlightedLabel === "leaderboard"}
            onPressIn={labels[2].onPress}
            onPressOut={this.handlePressOut(labels[2].onPress)}
          />

          <Treasure
            isPressed={pressed === 3}
            isActive={activeIndex === 3}
            isHighlighted={highlightedLabel === "rewards"}
            onPressIn={labels[3].onPress}
            onPressOut={this.handlePressOut(labels[3].onPress)}
          />
        </View>
      </View>
    );
  }

  private handlePressOut = (onPress: () => void) => {
    return () => this.setState({ pressed: null }, onPress);
  };
}

export default NavBar;
