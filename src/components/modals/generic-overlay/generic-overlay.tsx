import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { CloseSvg } from "@atoms";

interface IGenericOverlay {
  onClose: () => void;
  children: React.ReactNode;
}

const GenericOverlay = (props: IGenericOverlay) => {
  const { onClose, children } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        {children}
        <TouchableOpacityWithDelay style={styles.close} onPress={onClose}>
          <CloseSvg type="encircled" />
        </TouchableOpacityWithDelay>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Style.adjust(40),
  } as ViewStyle,
  innerWrapper: {
    height: Style.DEVICE_HEIGHT,
    borderRadius: 16,
    backgroundColor: "white",
    overflow: "hidden",
  } as ViewStyle,
  close: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: Style.adjust(16),
  } as ViewStyle,
});

export default GenericOverlay;
