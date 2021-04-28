import { Style } from "@styles";
import React, { memo, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";

interface IProps {
  uri: string;
}

export const ContentItemImage = memo(function (props: IProps) {
  const { uri } = props;
  const [size, setSize] = useState({ height: 0, width: 1 });
  return (
    <View style={styles.wrapper}>
      <FastImage
        resizeMode="contain"
        style={getImageStyle(size)}
        source={{ uri }}
        onLoad={(event) => {
          setSize({ height: event.nativeEvent.height, width: event.nativeEvent.width });
        }}
      />
    </View>
  );
});

const getImageStyle = (size: { height: number; width: number }) => {
  const heightWidthRatio = size.height / size.width;
  const width = Style.DEVICE_WIDTH - MARGINS;
  return { width, height: width * heightWidthRatio };
};

const MARGINS = 48;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: Style.adjust(8),
    overflow: "hidden",
    marginTop: Style.adjust(24),
  } as ViewStyle,
});
