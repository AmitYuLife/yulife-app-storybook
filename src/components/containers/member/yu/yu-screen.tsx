import React, { useCallback, useState } from "react";
import { StyleSheet, ViewStyle, View, ScrollView, Platform } from "react-native";
import {
  NameAndLevel,
  AvatarAndEquipment,
  YuCoinPower,
  ProductSet,
  ToolTip,
  AvatarCreationPrompt,
} from "./subcomponents";
import { Style, TOP_BAR } from "@styles";
import media from "@styles/media";
import { ProductType } from "../../../../graphql/_core/schema/globalTypes";
import { YUSCREEN, YUSCREEN_SCROLL_VIEW } from "@ids";

export const YuScreen = () => {
  const [product, setProduct] = useState(null);

  const handleCloseModal = useCallback(() => {
    setProduct(null);
  }, [setProduct]);

  return (
    <View style={styles.wrapper} testID={YUSCREEN}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.list} testID={YUSCREEN_SCROLL_VIEW}>
        <View style={styles.padTop} />
        <NameAndLevel />
        <AvatarCreationPrompt />
        <AvatarAndEquipment product={product} setProduct={setProduct} />
        <YuCoinPower />
        {["charms", "employer", "personal"].map((type: ProductType, index) => (
          <ProductSet key={index} type={type} />
        ))}
        <View style={styles.padBot} />
        <ToolTip productId={product} onClose={handleCloseModal} />
      </ScrollView>
    </View>
  );
};

const PAD_TOP = Platform.select({
  ios: media.select(
    [
      {
        condition: Style.hasNotch,
        value: TOP_BAR.HEIGHT + Style.adjust(8),
      },
    ],
    TOP_BAR.HEIGHT + Style.adjust(22)
  ),
  android: TOP_BAR.HEIGHT + Style.adjust(20),
});

const PAD_BOT = Platform.select({
  ios: media.select(
    [
      {
        condition: Style.hasNotch,
        value: Style.adjust(60),
      },
    ],
    Style.adjust(88)
  ),
  android: Style.adjust(60),
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  list: {
    flex: 1,
  } as ViewStyle,
  padTop: {
    height: PAD_TOP,
  } as ViewStyle,
  padBot: {
    height: PAD_BOT,
  } as ViewStyle,
});
