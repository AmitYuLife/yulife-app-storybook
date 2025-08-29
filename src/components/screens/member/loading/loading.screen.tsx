import React, { memo } from "react";
import { View } from "react-native";
import { Loading } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { GenericHeadingAbsolute } from "@organisms";

interface IProps {
  onClose?: () => void;
  onBack?: () => void;
}

const LoadingScreen = ({ onClose, onBack }: IProps) => (
  <View style={styles.wrapper}>
    <Loading />
    <GenericHeadingAbsolute logo="yulife" onLeftIconPress={onBack} onRightIconPress={onClose} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
  },
});

export default memo(LoadingScreen);
