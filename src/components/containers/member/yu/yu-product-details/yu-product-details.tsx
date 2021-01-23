import React, { useCallback } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, ScrollView } from "react-native";
import { Text } from "@atoms";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { Style } from "@styles";
import { TextWithBoldText } from "@components/molecules";
import { getProductIcon } from "../assets/getProductIcon";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { IProduct } from "@components/containers/products/fib/fib.types";

const YuProductDetails = (props: IProduct) => {
  const { itemSlot, earnRate, name, status, policyNumber, description } = props;

  const Icon = getProductIcon(itemSlot);

  const backHandler = useCallback(() => {
    dismissOverlay();
    return true;
  }, []);

  useBackHandler(backHandler);

  // FIXME: Once we implement the certificates, we won't need this anymore.
  const descriptionLong = `${description}\n\nThis protection is adding <bold>${earnRate}</bold> to your YuCoin Power.`;

  return (
    <GenericOverlay onClose={dismissOverlay}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.topPad} />
        <View style={styles.nameWrapper}>
          <Text bold={true} style={styles.name}>
            {name}
          </Text>
        </View>
        <Icon status={status} style={styles.iconWrapper} />
        {!policyNumber ? null : (
          <View style={styles.policyNumberWrapper}>
            <Text style={styles.policyNumberTitle} bold={true}>
              Policy Number:
            </Text>
            <Text style={styles.policyNumberValue}>{policyNumber}</Text>
          </View>
        )}
        <View style={styles.descriptionWrapper}>
          <TextWithBoldText style={styles.description} value={descriptionLong} />
        </View>
        <View style={styles.botPad} />
      </ScrollView>
    </GenericOverlay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  topPad: {
    height: Style.adjust(80),
  } as ViewStyle,
  botPad: {
    height: Style.adjust(80),
  } as ViewStyle,
  nameWrapper: {
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  name: {
    textAlign: "center",
    fontSize: Style.adjust(32),
    lineHeight: Style.adjust(32) * 1.5,
  } as TextStyle,
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Style.adjust(24),
    alignSelf: "center",
  } as ViewStyle,
  descriptionWrapper: {
    marginTop: Style.adjust(32),
    paddingHorizontal: Style.adjust(32),
  } as ViewStyle,
  description: {
    letterSpacing: 1,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
  } as TextStyle,
  policyNumberWrapper: {
    alignItems: "center",
    marginTop: Style.adjust(12),
  } as ViewStyle,
  policyNumberTitle: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
  } as TextStyle,
  policyNumberValue: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.8,
  } as TextStyle,
});

export default YuProductDetails;

async function dismissOverlay() {
  await Navigation.dismissOverlay(MODALS.yuProductDetails);
}
