import * as React from "react";
import { Style, StyleSheet } from "@styles";
import { Image as RNImage, View } from "react-native";
import { Text, Image } from "@atoms";
import Assets, { BoxedHeart, Coins } from "./assets";
import styles from "./picker.styles";
import { TouchableOpacityWithDelay } from "@molecules";

enum ICONS {
  HEART = "heart",
  COINS = "coins",
}

export type Icon = "heart" | "coins";

interface IProps {
  onPress: () => void;
  label: string;
  icon?: Icon;
  iconUri?: string;
  placeholder: string;
}

class Picker extends React.PureComponent<IProps> {
  public static Icons = ICONS;

  public renderIcon() {
    const { icon, iconUri } = this.props;
    if (iconUri) {
      return <Image source={{ uri: iconUri }} width={Style.adjust(26)} height={Style.adjust(26)} />;
    }

    if (icon === ICONS.COINS) {
      return <Coins scale={0.4} />;
    }

    return <BoxedHeart scale={0.5} />;
  }

  public render() {
    const { onPress, label, placeholder = "" } = this.props;
    return (
      <TouchableOpacityWithDelay
        onPress={onPress}
        style={StyleSheet.flatten([styles.wrapper, label ? styles.wrapperFilled : {}])}
      >
        {this.renderIcon()}
        <View style={styles.textWrapper}>
          <Text style={styles.label}>{label || placeholder}</Text>
        </View>
        <RNImage style={styles.arrow} source={Assets.v} />
        {label ? null : <View style={styles.overlay} />}
      </TouchableOpacityWithDelay>
    );
  }
}

export default Picker;
