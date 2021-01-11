import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { YuItemSlot, YuProductStatus } from "../../../../../../../graphql/_core/schema/globalTypes";
import { getProductIcon } from "../../../assets/getProductIcon";

interface Props {
  itemSlot: YuItemSlot;
  isEmpty: boolean;
  status: YuProductStatus;
}

export function LockedProductSvg({ itemSlot, isEmpty, status }: Props) {
  const IconSvg = getProductIcon(itemSlot);

  return (
    <View style={styles.wrapper}>
      <Svg style={styles.svgWrapper} width={64} height={64} viewBox="0 0 64 64">
        <Rect x={0.5} y={0.5} width={63} height={63} rx={7.5} fill="#E7E7EB" stroke="#ABABAD" />
      </Svg>
      {isEmpty ? null : <IconSvg active={status === "active"} />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {} as ViewStyle,
  svgWrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});
