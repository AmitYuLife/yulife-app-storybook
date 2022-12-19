import * as React from "react";
import { Image, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { Text } from "../../atoms";
import assets from "./assets";
import { getStyleFromCaretPosition } from "./pop-up.helpers";
import styles from "./pop-up.styles";

interface IPosition {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export enum POPUPTYPE {
  SURGE = "surge",
  LEADERBOARD = "leaderboard",
}

type PopUpType = POPUPTYPE.LEADERBOARD | POPUPTYPE.SURGE;

export type CaretDirection = "left" | "right" | "top" | "bottom";

///@TODO: PURGE THIS
interface IProps {
  position: IPosition | StyleProp<ViewStyle>;
  caretDirection: CaretDirection;
  caretPosition?: IPosition | StyleProp<ViewStyle>;
  type: PopUpType;
  isShowingButton?: boolean;
  onPress?: () => void;
  copy: any;
}

class PopUp extends React.PureComponent<IProps, any> {
  public render() {
    const { position, isShowingButton, onPress, caretDirection = "top", caretPosition } = this.props;
    return (
      <View style={StyleSheet.flatten([styles.outerWrapper, position])}>
        <View style={styles.innerWrapper}>
          <View
            style={StyleSheet.flatten([styles.caretWrapper, getStyleFromCaretPosition(caretDirection), caretPosition])}
          >
            <Image source={assets.caret} style={styles.caret} />
          </View>
          <View style={styles.textWrapper}>
            <Text bold={true} style={styles.headerText}>
              {this.getHeaderText()}
            </Text>
            <Text style={styles.bodyText}>{this.getBodyText()}</Text>
          </View>
          {!isShowingButton ? null : (
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image style={styles.image} source={assets.button} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }

  private getHeaderText = () => {
    const { type, copy } = this.props;
    switch (type) {
      case POPUPTYPE.SURGE:
        return copy.surgeHeading;
      case POPUPTYPE.LEADERBOARD:
        return copy.leaderboardHeading;
    }
  };

  private getBodyText = () => {
    const { type, copy } = this.props;
    switch (type) {
      case POPUPTYPE.SURGE:
        return copy.surgeSubheading;
      case POPUPTYPE.LEADERBOARD:
        return copy.leaderboardSubheading;
    }
  };
}

export default PopUp;
