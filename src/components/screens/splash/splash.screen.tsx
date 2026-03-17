import Logo from "@atoms/logo";
import { Style } from "@styles/index";
import { useEffect, memo, useRef, useMemo } from "react";
import { View } from "react-native";
import styles from "./splash.screen.styles";
import Animated, {
  Easing,
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import SplashLoadingDot from "./splash-loading-dot";

interface IProps {
  onAnimationStart: () => void;
  onAnimationEnd: () => void;
}

const LOGO_SCALE = 0.85;
const LOGO_ANIMATION_DELAY = 1500;
const LOGO_ANIMATION_DURATION = 500;

const buildSlideAnimation = (direction: -1 | 1) =>
  withDelay(
    LOGO_ANIMATION_DELAY,
    withTiming(direction * Style.adjust(50), {
      duration: LOGO_ANIMATION_DURATION,
      easing: Easing.inOut(Easing.quad),
    })
  );

const SplashScreen = (props: IProps) => {
  const timeout = useRef(null);
  const logoTextTranslateX = useSharedValue(0);
  const animatedLogoTextXStyle = useAnimatedStyle(() => ({ transform: [{ translateX: logoTextTranslateX.value }] }));

  const logoTextOpacity = useSharedValue(0);
  const animatedLogoTextOpacityStyle = useAnimatedStyle(() => ({ opacity: logoTextOpacity.value }));

  const logoImageTranslateX = useSharedValue(0);
  const animatedLogoImageXStyle = useAnimatedStyle(() => ({ transform: [{ translateX: logoImageTranslateX.value }] }));

  useEffect(() => {
    logoTextTranslateX.value = buildSlideAnimation(1);
    logoImageTranslateX.value = buildSlideAnimation(-1);
    logoTextOpacity.value = withDelay(LOGO_ANIMATION_DURATION, withTiming(1, { duration: LOGO_ANIMATION_DURATION }));

    timeout.current = setTimeout(() => {
      props.onAnimationEnd();
    }, LOGO_ANIMATION_DELAY + LOGO_ANIMATION_DURATION);

    return () => {
      if (timeout?.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  const logoTextStyle = useMemo(() => [styles.textWrapper, animatedLogoTextXStyle, animatedLogoTextOpacityStyle], []);
  const logoImageStyle = useMemo(() => [styles.iconWrapper, animatedLogoImageXStyle], []);

  return (
    <View style={styles.wrapper}>
      <Animated.View style={styles.logoWrapper} entering={FadeIn.duration(LOGO_ANIMATION_DURATION)}>
        <Animated.View style={logoTextStyle}>
          <Logo onLayout={props.onAnimationStart} scale={LOGO_SCALE} type="text-only" />
        </Animated.View>
        <Animated.View style={logoImageStyle}>
          <Logo scale={LOGO_SCALE} type="logo-only" style={styles.icon} />
        </Animated.View>
      </Animated.View>
      <View style={styles.bottomWrapper}>
        <View style={styles.dotsWrapper}>
          <SplashLoadingDot delayBreakPoint1={0.2} delayBreakPoint2={0.8} />
          <SplashLoadingDot delayBreakPoint1={0.5} delayBreakPoint2={0.5} />
          <SplashLoadingDot delayBreakPoint1={0.8} delayBreakPoint2={0.2} />
        </View>
      </View>
    </View>
  );
};

export default memo(SplashScreen);
