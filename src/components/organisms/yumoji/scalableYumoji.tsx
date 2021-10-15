import { CroppedImage } from "@components/screens/member/yu-screen/yumoji-builder/components/croppedImage";
import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

interface IYumojiPart {
  order?: number;
  partType: string;
  remoteUrl: {
    uri: string;
    width?: number;
    height?: number;
  };
}

interface IProps {
  items: IYumojiPart[];
  bodyType: string;
  width: number;
  height: number;
  preview?: {
    top: number;
    left: number;
    zoom: number;
  };
}

function _Yumoji(props: IProps) {
  const { items, preview = { top: 0, left: 0, zoom: 1 }, height, width, bodyType } = props;

  const dimensions = useMemo(() => ({ width, height }), [height, width]);
  const parts = useMemo(
    () =>
      items
        .filter((item) => item.remoteUrl?.uri)
        .sort((i1, i2) => (i1?.order || 0) - (i2?.order || 0))
        .map(({ remoteUrl: { uri }, partType }) => (
          <View key={`${bodyType}_${partType}`} style={[StyleSheet.absoluteFillObject, dimensions]}>
            <CroppedImage
              transform={preview}
              key={`${bodyType}_${partType}`}
              containerWidth={dimensions.width}
              containerHeight={dimensions.height}
              source={{ uri }}
              suppressLoadingUi={true}
            />
          </View>
        )),
    [dimensions, items, preview]
  );
  return <View style={dimensions}>{parts}</View>;
}

export const Yumoji = memo(_Yumoji);
