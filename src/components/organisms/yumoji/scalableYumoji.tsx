import { CroppedImage } from "@components/screens/member/yu-screen/yumoji-builder/components/croppedImage";
import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

interface IYumojiPart {
  order?: number;
  remoteUrl: {
    uri: string;
    width?: number;
    height?: number;
  };
}

interface IProps {
  items: IYumojiPart[];
  width: number;
  height: number;
  preview?: {
    top: number;
    left: number;
    zoom: number;
  };
}

function _Yumoji(props: IProps) {
  const { items, preview = { top: 0, left: 0, zoom: 1 }, height, width } = props;

  const parts = useMemo(() => items.sort(({ order: order1 = 0 }, { order: order2 = 0 }) => order1 - order2), [items]);
  return (
    <View style={{ width, height }}>
      {parts.map(({ remoteUrl: { uri } }) =>
        !uri ? null : (
          <View key={uri} style={[StyleSheet.absoluteFillObject, { width, height }]}>
            <CroppedImage
              transform={preview}
              key={uri}
              containerWidth={width}
              containerHeight={height}
              source={{ uri }}
            />
          </View>
        )
      )}
    </View>
  );
}

export const Yumoji = memo(_Yumoji);
