import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { GetMobileCopy_getMobileCopy_screens_purchases_empty } from "../../../../../../graphql/_core/schema";
import { Button, Text } from "../../../../../atoms";
import styles from "./purchases-empty.styles";

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
    <Button type="SecondaryMedium" label={copy.ctaLabel} onPress={onCtaPress} />
  </View>
);

export default PurchasesEmpty;
