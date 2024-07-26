import { Style } from "@styles";
import { useEffect } from "react";
import { Animated } from "react-native";

interface IUseMaterialInputAnimation {
  activeMaterial: boolean;
  isFocused: boolean;
  placeholderScale: Animated.Value;
  placeholderTranslateY: Animated.Value;
  materialUnderlineScaleX: Animated.Value;
  placeholderOpacity: Animated.Value;
}

export const useMaterialInputAnimation = ({
  activeMaterial,
  isFocused,
  placeholderScale,
  placeholderTranslateY,
  materialUnderlineScaleX,
  placeholderOpacity,
}: IUseMaterialInputAnimation) => {
  useEffect(() => {
    const scaleAnim = Animated.timing(placeholderScale, {
      toValue: activeMaterial ? 0.7 : 1,
      useNativeDriver: true,
      duration: 100,
    });

    const translateYAnim = Animated.timing(placeholderTranslateY, {
      toValue: activeMaterial ? -32 : 0,
      useNativeDriver: true,
      duration: 100,
    });

    const materialUnderlineScaleXAnim = Animated.timing(materialUnderlineScaleX, {
      toValue: isFocused ? Style.DEVICE_WIDTH : 0,
      useNativeDriver: true,
      duration: 200,
    });

    const placeholderOpacityAnim = Animated.timing(placeholderOpacity, {
      toValue: activeMaterial ? 1 : 0.5,
      useNativeDriver: true,
      duration: 100,
    });

    Animated.parallel([scaleAnim, translateYAnim, materialUnderlineScaleXAnim, placeholderOpacityAnim]).start();
  }, [activeMaterial, placeholderScale, placeholderTranslateY, isFocused, materialUnderlineScaleX, placeholderOpacity]);
};
