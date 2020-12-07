import React, { useRef, useEffect } from "react";
import { StyleSheet, View, ViewStyle, Animated, Easing } from "react-native";
import { Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { CloseSvg } from "@atoms";

interface IGenericOverlay {
  onClose: () => void;
  children: React.ReactChild;
}

const GenericOverlay = (props: IGenericOverlay) => {
  const { onClose, children } = props;

  const translateY = useRef(new Animated.Value(Style.DEVICE_HEIGHT)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      useNativeDriver: true,
      easing: Easing.elastic(0.7),
    }).start();
  }, [translateY]);

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.innerWrapper, { transform: [{ translateY }] }]}>
        {children}
        <TouchableOpacityWithDelay style={styles.close} onPress={onClose}>
          <CloseSvg type="encircled" />
        </TouchableOpacityWithDelay>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Style.adjust(40),
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
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
