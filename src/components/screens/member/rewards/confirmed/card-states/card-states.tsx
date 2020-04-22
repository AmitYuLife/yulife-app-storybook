import * as React from "react";
import { Image, ImageRequireSource, View } from "react-native";
import { Text } from "../../../../../atoms";
import assets from "../assets";
import styles from "./card-states.styles";

const Overlay: React.SFC<{ icon: ImageRequireSource; text: string }> = ({ icon, text }) => (
  <View style={styles.overlayWrapper}>
    <Image style={styles.icon} source={icon} />
    <Text style={styles.text} bold={true}>
      {text}
    </Text>
  </View>
);

export const Delivered = () => (
  <View style={styles.imageWrapper}>
    <Image style={styles.image} source={assets.delivered} />
  </View>
);
export const Pending = () => (
  <View style={styles.imageWrapper}>
    <Image style={styles.image} source={assets.pending} />
    <Overlay icon={assets.clock} text="purchase pending" />
  </View>
);
export const Failed = () => (
  <View style={[styles.imageWrapper, styles.imageWrapperFailed]}>
    <Overlay icon={assets.failedIcon} text="purchase failed" />
  </View>
);
