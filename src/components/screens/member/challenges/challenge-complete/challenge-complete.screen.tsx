import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { useSelector } from "react-redux";
import { AnimatableImage } from "@services/animatable";
import Logger from "@services/logging/logger";
import { Button, Text } from "@atoms";
import styles from "./challenge-complete.styles";
import { getChallengeCompletedCopy } from "@redux/copy/copy.selectors";

interface IProps {
  onCtaPress: () => void;
  isLoading: boolean;
}

const ChallengeCompleteScreen: React.FC<IProps> = ({ onCtaPress, isLoading }) => {
  const copy = useSelector(getChallengeCompletedCopy);

  useEffect(() => {
    Logger.logEvent("screen_view", { name: "timesUp" });
  }, []);

  return (
    <View style={styles.wrapper}>
      <View>
        <AnimatableImage
          useNativeDriver={true}
          style={styles.alarm}
          delay={1000}
          iterationCount="infinite"
          animation="swing"
          source={require("../../../../../../assets/challenge-complete/clock.png")}
        />
        <Image style={styles.base} source={require("../../../../../../assets/challenge-complete/base.png")} />
      </View>
      <View style={styles.headingWrapper}>
        <Text bold={true} style={styles.text}>
          {copy.heading}
        </Text>
      </View>
      <Button
        isLoading={isLoading}
        wrapperStyle={styles.ctaWrapper}
        onPress={onCtaPress}
        label={copy.ctaLabel}
        size="Small"
      />
    </View>
  );
};

export default ChallengeCompleteScreen;
