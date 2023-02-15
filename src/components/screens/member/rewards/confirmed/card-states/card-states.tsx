import * as React from "react";
import { Image, ImageRequireSource, View } from "react-native";
import { Text } from "@atoms";
import assets from "../assets";
import styles from "./card-states.styles";
import { t } from "@locale";

interface IProps {
  icon: ImageRequireSource;
  text: string;
}

const Overlay = ({ icon, text }: IProps) => (
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
    <Overlay icon={assets.clock} text={t("screens.rewards.confirmed.card_states.pending")} />
  </View>
);
export const Failed = () => (
  <View style={[styles.imageWrapper, styles.imageWrapperFailed]}>
    <Overlay icon={assets.failedIcon} text={t("screens.rewards.confirmed.card_states.failed")} />
  </View>
);

export const Refunded = () => (
  <View style={[styles.imageWrapper, styles.imageWrapperRefunded]}>
    <Overlay icon={assets.refundedIcon} text={t("screens.rewards.card_states.refunded")} />
  </View>
);
