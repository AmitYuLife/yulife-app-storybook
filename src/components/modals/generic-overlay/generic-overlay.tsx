import React, { useRef, useEffect } from "react";
import { StyleSheet, View, ViewStyle, Animated, Easing } from "react-native";
import { Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import LinearGradient from "react-native-linear-gradient";
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
        <LinearGradient
          pointerEvents="none"
          colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
          locations={[0, 0.8]}
          style={styles.seeMore}
        />
        <LinearGradient
          pointerEvents="none"
          colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
          locations={[0, 0.95]}
          style={styles.topBg}
        />
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
  seeMore: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 40,
    height: Style.adjust(120),
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  topBg: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Style.adjust(120),
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
});

export default GenericOverlay;
