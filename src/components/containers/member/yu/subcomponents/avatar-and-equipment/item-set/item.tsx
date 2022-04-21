import React, { useCallback, useMemo } from "react";
import { StyleSheet, ViewStyle, View, ImageStyle } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { SlotIcon, TouchableOpacityWithDelay } from "@molecules";
import { DETOX_ENABLED } from "@services/socket";
import { Style } from "@styles";
import { AVATAR_ITEM } from "@ids";
import { YuScreenProductSlotItem } from "@graphql/_core/schema";
import { navigateToProduct } from "../../../navigation/navigateToProduct";

interface IItem extends YuScreenProductSlotItem {
  style?: ViewStyle;
}

export const Item = (props: IItem) => {
  const { status, itemUrl, style, icon, productId, badge } = props;
  const onPress = useCallback(() => navigateToProduct({ status, productId }), [productId, status]);

  const slot = { name: icon?.name, colour: icon?.colour, itemUrl, backgroundUrl: icon?.backgroundUrl };

  const detoxItemUrl = useMemo(() => (!DETOX_ENABLED ? "" : itemUrl?.split(".svg")[0]), [DETOX_ENABLED, itemUrl]);

  return (
    <TouchableOpacityWithDelay
      delay={350}
      activeOpacity={1}
      onPress={onPress}
      style={[styles.wrapper, style]}
      testID={AVATAR_ITEM(detoxItemUrl, status)}
    >
      <SlotIcon {...slot} />
      <View style={styles.tagWrapper}>
        <View style={styles.badgeWrapper}>
          {!badge?.badgeUrl ? null : (
            <View style={styles.badgeImageWrapper}>
              <Image suppressLoadingUi={true} width={SIZE} height={SIZE} source={{ uri: badge.badgeUrl }} />
            </View>
          )}
          {!badge?.text?.value ? null : (
            <TextTemplate type={getTextTypeByYuCoinPower(badge.text.value)} color={badge.text.colour}>
              {badge.text.value}
            </TextTemplate>
          )}
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
};

const SIZE = Style.adjust(24);

const styles = StyleSheet.create({
  wrapper: { marginBottom: 6 } as ViewStyle,
  image: {
    maxHeight: Style.adjust(76),
    maxWidth: Style.adjust(64),
  } as ImageStyle,
  tagWrapper: {
    position: "absolute",
    top: Style.adjust(4),
    right: -(SIZE / 3),
  } as ViewStyle,
  badgeWrapper: {
    width: SIZE,
    height: SIZE,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 1,
    paddingLeft: 1,
  } as ViewStyle,
  badgeImageWrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ImageStyle,
});

const getTextTypeByYuCoinPower = (value: string): "l2b" | "l3b" | "l4b" => {
  const len = value.length;

  if (len < 2) {
    return "l2b";
  }

  if (len < 3) {
    return "l3b";
  }

  return "l4b";
};
