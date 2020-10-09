import React from "react";
import { Animated, Easing } from "react-native";
import { AvatarEmpty } from "@molecules";
import FastImage from "react-native-fast-image";
import styles from "./duel-avatar.styles";
import images from "./duel-avatar.images";

interface IProps {
  reverse?: boolean;
  uri?: string;
  shouldAnimate?: boolean;
}

export function DuelAvatar({ reverse, uri, shouldAnimate = true }: IProps) {
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

  const transformLeftAvatar = [
    {
      translateX: bounce.interpolate({
        inputRange: [0, 1],
        outputRange: [-175, -3.5],
      }),
    },
    {
      rotate: bounce.interpolate({
        inputRange: [0, 1],
        outputRange: ["-70deg", "30deg"],
      }),
    },
  ];

  const transformRightAvatar = [
    {
      translateX: bounce.interpolate({
        inputRange: [0, 1],
        outputRange: [175, 3.5],
      }),
    },
    {
      rotate: bounce.interpolate({
        inputRange: [0, 1],
        outputRange: ["70deg", "-30deg"],
      }),
    },
  ];

  const nonAnimatedLeftStyle = [
    {
      translateX: -3.5,
    },
    { rotate: "30deg" },
  ];

  const nonAnimatedRightStyle = [{ translateX: 3.5 }, { rotate: "-30deg" }];

  const nonAnimatedStyle = reverse ? nonAnimatedRightStyle : nonAnimatedLeftStyle;
  const transformStyle = reverse ? transformRightAvatar : transformLeftAvatar;
  const opacity = shouldAnimate ? fadeIn : 1;

  return (
    <>
      <Animated.View style={[styles.wrapper, { transform: shouldAnimate ? transformStyle : nonAnimatedStyle }]}>
        <Animated.View style={{ opacity }}>
          {uri ? (
            <FastImage resizeMode="contain" source={{ uri }} style={styles.image} />
          ) : (
            <AvatarEmpty style={styles.image} />
          )}
        </Animated.View>
        <FastImage style={styles.border} resizeMode="contain" source={images.duelYucoin} />
      </Animated.View>
    </>
  );
}
