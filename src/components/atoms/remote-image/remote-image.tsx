import React, { useState } from "react";
import { StyleSheet, View, ViewStyle, ActivityIndicator } from "react-native";
import FastImage from "react-native-fast-image";
import { Colours } from "@styles";

interface Props {
  width: number;
  height: number;
  style?: ViewStyle;
  uri: string;
  theme: "light" | "dark";
}

export const RemoteImage = (props: Props) => {
  const { width, height, style, theme = "light", uri } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadState = (value: boolean) => () => {
    setIsLoading(value);
  };

  return (
    <View style={[styles.wrapper, { height, width }, style]}>
      <FastImage
        onLoadStart={handleLoadState(true)}
        onLoad={handleLoadState(false)}
        style={{ height, width }}
        source={{ uri }}
      />
      {!isLoading ? null : <ActivityIndicator color={getColor(theme)} style={styles.loader} />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  loader: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});

const getColor = (theme: Props["theme"]) => (theme === "light" ? Colours.neutral.white : Colours.primary.p600);
