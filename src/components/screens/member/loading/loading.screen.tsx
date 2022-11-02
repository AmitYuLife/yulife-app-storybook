import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { Loading } from "@atoms";
import { Style } from "@styles";
import { GenericHeadingAbsolute } from "@organisms";

interface IProps {
  onClose: () => void;
}

const LoadingScreen = ({ onClose }: IProps) => (
  <View style={styles.wrapper}>
    <Loading />
    <GenericHeadingAbsolute logo="yulife" onRightIconPress={onClose} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
  },
});

export default memo(LoadingScreen);
