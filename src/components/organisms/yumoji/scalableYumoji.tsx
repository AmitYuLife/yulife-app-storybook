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

  const dimensions = useMemo(() => ({ width, height }), [height, width]);
  const parts = useMemo(
    () =>
      items
        .filter((item) => item.remoteUrl?.uri)
        .sort(({ order: order1 = 0 }, { order: order2 = 0 }) => order1 - order2)
        .map(({ remoteUrl: { uri } }) => (
          <View key={uri} style={[StyleSheet.absoluteFillObject, { width, height }]}>
            <CroppedImage
              transform={preview}
              key={uri}
              containerWidth={width}
              containerHeight={height}
              source={{ uri }}
              suppressLoadingUi={true}
            />
          </View>
        )),
    [height, items, preview, width]
  );
  return <View style={dimensions}>{parts}</View>;
}

export const Yumoji = memo(_Yumoji);
