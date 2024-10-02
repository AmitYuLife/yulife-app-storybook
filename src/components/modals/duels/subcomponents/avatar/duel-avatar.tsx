import React from "react";
import { Animated, Easing, View, ViewStyle } from "react-native";
import { AvatarEmpty } from "@molecules";
import styles from "./duel-avatar.styles";
import { RawImage } from "@atoms";

interface IProps {
  reverse?: boolean;
  uri?: string;
  shouldAnimate?: boolean;
}

function _DuelAvatar({ reverse, uri, shouldAnimate = true }: IProps) {
  const bounce = new Animated.Value(0);
  const fadeIn = new Animated.Value(0);

  const bounceAnim = Animated.timing(bounce, {
    toValue: 1,
    duration: 2600,
    useNativeDriver: true,
    easing: Easing.bounce,
  });

  const fadeInAnim = Animated.timing(fadeIn, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  });

  React.useEffect(() => {
    if (shouldAnimate) {
      bounceAnim.start();
      fadeInAnim.start();
    }

    return () => {
      bounceAnim.stop();
      fadeInAnim.stop();
    };
  }, [bounceAnim, fadeInAnim, shouldAnimate]);

  const bounceLeftAvatar = [
    {
      rotate: bounce.interpolate({
        inputRange: [0, 1],
        outputRange: ["-70deg", "30deg"],
      }),
    },
    { perspective: 1000 },
  ];

  const bounceRightAvatar = [
    {
      rotate: bounce.interpolate({
        inputRange: [0, 1],
        outputRange: ["70deg", "-30deg"],
      }),
    },
    { perspective: 1000 },
  ];

  const translateXLeftAvatar = [
    {
      translateX: bounce.interpolate({
        inputRange: [0, 1],
        outputRange: [-175, 0],
      }),
    },
  ];

  const translateXRightAvatar = [
    {
      translateX: bounce.interpolate({
        inputRange: [0, 1],
        outputRange: [175, 0],
      }),
    },
  ];

  const nonAnimatedLeftStyle = [
    {
      translateX: 0,
    },
    { rotate: "30deg" },
    { perspective: 1000 },
  ];

  const nonAnimatedRightStyle = [{ translateX: 0 }, { rotate: "-30deg" }, { perspective: 1000 }];

  const nonAnimatedStyle = reverse ? nonAnimatedRightStyle : nonAnimatedLeftStyle;
  const [nonAnimatedTranslateStyle, nonAnimatedRotateStyle, perspectiveStyle] = nonAnimatedStyle;
  const bounceStyle = reverse ? bounceRightAvatar : bounceLeftAvatar;
  const translateXStyle = reverse ? translateXRightAvatar : translateXLeftAvatar;
  const opacity = shouldAnimate ? fadeIn : 1;

  return (
    <View>
      <Animated.View
        style={[
          styles.wrapper,
          { transform: shouldAnimate ? translateXStyle : [nonAnimatedTranslateStyle] } as ViewStyle,
        ]}
      >
        <Animated.View
          style={[
            styles.innerWrapper,
            { transform: shouldAnimate ? bounceStyle : [nonAnimatedRotateStyle, perspectiveStyle] } as ViewStyle,
          ]}
        >
          <Animated.View style={{ opacity }}>
            {uri ? (
              <RawImage resizeMode="contain" source={{ uri }} style={styles.image} />
            ) : (
              <AvatarEmpty style={styles.image} />
            )}
          </Animated.View>
          <RawImage style={styles.border} resizeMode="contain" source={require("@assets/duels/yucoin.png")} />
        </Animated.View>
      </Animated.View>
    </View>
  );
}

export const DuelAvatar = React.memo(_DuelAvatar);
