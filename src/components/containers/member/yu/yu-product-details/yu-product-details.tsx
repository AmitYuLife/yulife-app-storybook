import React, { useCallback } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, ScrollView } from "react-native";
import { Text } from "@atoms";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { Style } from "@styles";
import { TextWithBoldText } from "@components/molecules";
import { getProductIcon } from "../assets/getProductIcon";
import { ItemSlot } from "../yu-types";
import { useBackHandler } from "@services/hooks/useBackHandler";

interface IYuProductDetails {
  itemSlot: ItemSlot;
  description: string;
  name: string;
  status: string;
}

const YuProductDetails = (props: IYuProductDetails) => {
  const { itemSlot, description = "", name, status } = props;

  const Icon = getProductIcon(itemSlot);

  const backHandler = useCallback(() => {
    dismissOverlay();
    return true;
  }, []);

  useBackHandler(backHandler);

  return (
    <GenericOverlay onClose={dismissOverlay}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.topPad} />
        <View style={styles.nameWrapper}>
          <Text bold={true} style={styles.name}>
            {name}
          </Text>
        </View>
        <Icon style={StyleSheet.flatten([styles.iconWrapper, { opacity: status !== "active" ? 0.6 : 1 }])} />
        <View style={styles.descriptionWrapper}>
          <TextWithBoldText style={styles.description} value={description} />
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
    textAlign: "center",
    letterSpacing: 1,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
  } as TextStyle,
});

export default YuProductDetails;

async function dismissOverlay() {
  await Navigation.dismissOverlay(MODALS.yuProductDetails);
}
