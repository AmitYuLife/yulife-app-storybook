import { Logo } from "@atoms/index";
import { Style } from "@styles/index";
import * as React from "react";
import { useRef } from "react";
import { SafeAreaView, View } from "react-native";
import * as Animatable from "react-native-animatable";
import styles from "./splash.screen.styles";

Animatable.initializeRegistryWithDefinitions({
  splash_dot1: {
    0: { opacity: 0 },
    0.15: { opacity: 0 },
    0.25: { opacity: 1 },
    1: { opacity: 1 },
  },
  splash_dot2: {
    0: { opacity: 0 },
    0.4: { opacity: 0 },
    0.5: { opacity: 1 },
    1: { opacity: 1 },
  },
  splash_dot3: {
    0: { opacity: 0 },
    0.65: { opacity: 0 },
    0.75: { opacity: 1 },
    1: { opacity: 1 },
  },
  splash_yu: {
    0: { translateX: 0 },
    0.5: { translateX: 0 },
    1: { translateX: 0 - Style.SCALE_UP_AND_DOWN(40) },
  },
  splash_life: {
    0: { translateX: 0 },
    0.5: { translateX: 0 },
    1: { translateX: Style.SCALE_UP_AND_DOWN(55) },
  },
  splash_yulifeZoomOut: {
    0: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    },
    0.5: {
      opacity: 1,
      scaleX: 1.2,
      scaleY: 1.2,
    },
    1: {
      opacity: 0,
      scaleX: 1.5,
      scaleY: 1.5,
    },
  },
});
interface IProps {
  onAnimationStart: () => void;
  onAnimationEnd: () => void;
}

function SplashScreen(props: IProps) {
  const fullLogoRef = useRef(null);

  async function handleLogoEaseIn() {
    props.onAnimationEnd();

    if (fullLogoRef.current && fullLogoRef.current.splash_yulifeZoomOut) {
      fullLogoRef.current.splash_yulifeZoomOut(500);
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <Animatable.View delay={2000} ref={fullLogoRef} style={styles.logoWrapper} useNativeDriver={true}>
        <Animatable.View
          style={styles.textWrapper}
          delay={1500}
          useNativeDriver={true}
          animation="splash_life"
          duration={1000}
        >
          <Logo onLayout={props.onAnimationStart} scale={0.85} type="text-only" />
        </Animatable.View>
        <Animatable.View
          style={styles.iconWrapper}
          useNativeDriver={true}
          delay={1500}
          animation="splash_yu"
          duration={1000}
          onAnimationEnd={handleLogoEaseIn}
        >
          <Logo scale={0.85} type="logo-only" style={{ backgroundColor: "white" }} />
        </Animatable.View>
      </Animatable.View>
      <View style={styles.bottomWrapper}>
        <View style={styles.dotsWrapper}>
          <Animatable.View
            animation="splash_dot1"
            iterationCount="infinite"
            duration={1500}
            useNativeDriver={true}
            style={styles.dot}
          />
          <Animatable.View
            animation="splash_dot2"
            iterationCount="infinite"
            duration={1500}
            useNativeDriver={true}
            style={styles.dot}
          />
          <Animatable.View
            animation="splash_dot3"
            iterationCount="infinite"
            duration={1500}
            useNativeDriver={true}
            style={styles.dot}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;
