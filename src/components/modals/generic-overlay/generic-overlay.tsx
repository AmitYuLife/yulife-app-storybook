import React, { ComponentProps, ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";

interface IGenericOverlay {
  onClose: () => void;
  children: ReactNode;
  heading?: ReactNode;
  headingProps?: ComponentProps<typeof GenericHeadingAbsolute>;
}

const GenericOverlay = (props: IGenericOverlay) => {
  const { onClose, children, heading = "", headingProps } = props;

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad {...headingProps} />
      <View style={styles.innerWrapper}>{children}</View>
      <GenericHeadingAbsolute heading={heading} onRightIconPress={onClose} {...headingProps} />
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
