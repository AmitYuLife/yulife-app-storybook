import * as React from "react";
import { SFC } from "react";
import { Image, View, ViewStyle, StyleSheet, ImageStyle, TextStyle } from "react-native";
import { GetMobileCopy_getMobileCopy_screens_purchases_empty } from "../../../../../../graphql/_core/schema";
import { Text, Button } from "../../../../../atoms";
import { CHECK_REWARDS_BUTTON } from "@ids";
import { Style } from "@styles";

interface IProps {
  onCtaPress: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_purchases_empty;
}

const PurchasesEmpty: SFC<IProps> = ({ onCtaPress, copy }) => (
  <View style={styles.wrapper}>
    <Image style={styles.image} source={require("../../../../../../../assets/purchases-empty/rewards-empty.png")} />
    <View style={styles.contentWrapper}>
      <Text style={styles.text}>{copy.heading}</Text>
      <Text style={styles.text}>{copy.subheading}</Text>
    </View>

    <View style={styles.ctaWrapper}>
      <Button label={copy.ctaLabel} onPress={onCtaPress} testID={CHECK_REWARDS_BUTTON} />
    </View>
  </View>
);

export default PurchasesEmpty;

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Style.adjust(18),
  } as ViewStyle,
  image: {
    marginBottom: Style.adjust(21),
  } as ImageStyle,
  text: {
    fontSize: Style.adjust(16),
    marginBottom: Style.adjust(3),
  } as TextStyle,
  wrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  ctaWrapper: {
    alignSelf: "center",
    width: 250,
  } as ViewStyle,
});
