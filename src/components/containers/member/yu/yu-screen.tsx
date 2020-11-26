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
import { TopBar } from "@organisms";
import { Style } from "@styles";
import { ProductType } from "./yu-types";
import media from "@styles/media";

export const YuScreen = () => {
  const [product, setProduct] = useState(null);

  const handleCloseModal = useCallback(() => {
    setProduct(null);
  }, [setProduct]);

  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
        <View style={styles.padTop} />
        <NameAndLevel />
        <AvatarCreationPrompt />
        <AvatarAndEquipment product={product} setProduct={setProduct} />
        <YuCoinPower />
        {["charms", "employer", "personal"].map((type: ProductType, index) => (
          <ProductSet
            key={index}
            wrapperStyle={!index ? styles.productSectionMargin : styles.productSetMargin}
            type={type}
          />
        ))}
        <View style={styles.padBot} />
        <ToolTip code={product} onClose={handleCloseModal} />
      </ScrollView>
    </View>
  );
};

const PAD_TOP = Platform.select({
  ios: media.select(
    [
      {
        condition: Style.hasNotch,
        value: TopBar.HEIGHT + Style.adjust(8),
      },
    ],
    TopBar.HEIGHT + Style.adjust(32)
  ),
  android: TopBar.HEIGHT + Style.adjust(20),
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
  productSectionMargin: {
    marginTop: Style.adjust(12),
  } as ViewStyle,
  productSetMargin: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
});
