import React, { FC, useEffect } from "react";
import { ScrollView, View, Text, Animated } from "react-native";
import { Button } from "@molecules";
import styles from "./lightbox.styles";
import { Heading, YuCoinBadge } from "@atoms";
import LinearGradient from "react-native-linear-gradient";
import { getHeading, getText, getButtonLabel } from "./lightbox.data";
import { YUNITY_HEADER, YUNIVERSAL_CONTNIUE_BUTTON, YUNITY_SUBHEADER } from "@ids";
import { DETOX_ENABLED } from "@services/socket";
import { useSelector } from "react-redux";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { getCurrentWorld, getCurrentYuniverse } from "@utils";

interface IProps {
  level: number;
  goToNextScreen: () => void;
}

const Lightbox: FC<IProps> = ({ level, goToNextScreen }) => {
  const currentLevel = useSelector(getCurrentLevel);
  const currentYuniverse = getCurrentYuniverse(currentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const opacity = DETOX_ENABLED ? new Animated.Value(1) : new Animated.Value(0);
  const modalOpacity = DETOX_ENABLED ? new Animated.Value(1) : new Animated.Value(0);
  const y = DETOX_ENABLED ? new Animated.Value(0) : new Animated.Value(30);

  const opacityAnim = Animated.timing(opacity, {
    toValue: 1,
    useNativeDriver: true,
    duration: 500,
  });

  const modalOpacityAnim = Animated.timing(modalOpacity, {
    toValue: 1,
    useNativeDriver: true,
    duration: 300,
    delay: 500,
  });

  const yAnim = Animated.timing(y, {
    toValue: 0,
    useNativeDriver: true,
    duration: 300,
    delay: 500,
  });

  useEffect(() => {
    if (!DETOX_ENABLED) {
      opacityAnim.start();
      modalOpacityAnim.start();
      yAnim.start();
    }

    return () => {
      opacityAnim.stop();
      modalOpacityAnim.stop();
      yAnim.stop();
    };
  });

  return (
    <Animated.View style={[styles.fullScreen, { opacity }]}>
      <Animated.View style={[styles.modal, { opacity: modalOpacity, transform: [{ translateY: y }] }]}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          <View style={styles.headingWrapper}>
            <Heading style={styles.heading} label={getHeading(level)} testID={YUNITY_HEADER(getHeading(level))} />
          </View>
          <View style={styles.textWrapper}>
            <View style={styles.coinWrapper}>
              <View style={styles.coinScale}>
                <View style={styles.yucoinBadgeWrapper}>
                  <View style={styles.yucoinBadge}>
                    <YuCoinBadge
                      hasWhiteGlow={false}
                      isGrayScale={false}
                      width={200}
                      height={200}
                      currentWorld={currentWorld}
                      currentYuniverse={currentYuniverse}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View>
              {getText(level).map((paragraph) => (
                <Text key={paragraph} style={styles.text} testID={YUNITY_SUBHEADER(getHeading(level))}>
                  {paragraph}
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomSectionWrapper}>
          <View style={styles.buttonWrapper}>
            <Button
              size="Fill"
              onPress={goToNextScreen}
              label={getButtonLabel(level)}
              testID={YUNIVERSAL_CONTNIUE_BUTTON}
            />
          </View>
          <LinearGradient colors={["#ffffff00", "#ffffff"]} locations={[0, 1]} style={styles.whiteFade} />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default Lightbox;
