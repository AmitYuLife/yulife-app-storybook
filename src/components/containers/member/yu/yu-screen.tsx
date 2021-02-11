import React, { useState, useMemo } from "react";
import { StyleSheet, ViewStyle, View, ScrollView, Platform } from "react-native";
import { Style, TOP_BAR } from "@styles";
import media from "@styles/media";
import { ProductType, YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { YUSCREEN, YUSCREEN_SCROLL_VIEW } from "@ids";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import {
  NameAndLevel,
  AvatarAndEquipment,
  YuCoinPower,
  ProductSet,
  ToolTip,
  AvatarCreationPrompt,
} from "./subcomponents";
import { YuScreenProductContext } from "./yu-screen.context";

export const YuScreen = () => {
  const [product, setProduct] = useState({ type: "avatar", id: null });

  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const productSets = useMemo(
    () => [
      { productType: "alpha" as ProductType, isHidden: !(data?.additional?.[3]?.status === YuProductStatus.active) },
      { productType: "employer" as ProductType, isHidden: false },
      { productType: "personal" as ProductType, isHidden: !data?.getYulifer?.avatarRemoteFiles?.pngFull },
    ],
    [data]
  );

  return (
    <YuScreenProductContext.Provider value={{ product, setProduct }}>
      <View style={styles.wrapper} testID={YUSCREEN}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.list} testID={YUSCREEN_SCROLL_VIEW}>
          <View style={styles.padTop} />
          <NameAndLevel />
          <AvatarCreationPrompt />
          <AvatarAndEquipment />
          <YuCoinPower />
          {productSets.map(({ productType, isHidden }, index) =>
            isHidden ? null : <ProductSet key={index} type={productType} />
          )}
          <View style={styles.padBot} />
          {product.type === "avatar" ? (
            <View style={styles.avatar}>
              <ToolTip />
            </View>
          ) : null}
        </ScrollView>
      </View>
    </YuScreenProductContext.Provider>
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
  avatar: {
    position: "absolute",
    width: "100%",
    top: 160,
  } as ViewStyle,
});
