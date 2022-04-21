import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";

interface IGenericOverlay {
  onClose: () => void;
  children: React.ReactNode;
  heading?: string;
}

const GenericOverlay = (props: IGenericOverlay) => {
  const { onClose, children, heading = "" } = props;

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.innerWrapper}>{children}</View>
      <GenericHeadingAbsolute heading={heading} onRightIconPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  innerWrapper: {
    height: Style.DEVICE_HEIGHT,
    borderRadius: 16,
    backgroundColor: "white",
    overflow: "hidden",
  } as ViewStyle,
});

export default GenericOverlay;
