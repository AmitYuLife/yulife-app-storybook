import * as React from "react";
import { Image, View } from "react-native";
import { AnimatableImage } from "@services/animatable";
import { GetMobileCopy_getMobileCopy_screens_challenges_completed } from "../../../../../graphql/_core/schema";
import { Button, Text } from "../../../../atoms";
import styles from "./challenge-complete.styles";

interface IProps {
  onCtaPress: () => void;
  isLoading?: boolean;
  copy: GetMobileCopy_getMobileCopy_screens_challenges_completed;
}

const ChallengeCompleteScreen: React.SFC<IProps> = ({ isLoading, onCtaPress, copy }) => (
  <View style={styles.wrapper}>
    <View>
      <AnimatableImage
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
      type="PrimarySmall"
    />
  </View>
);

export default ChallengeCompleteScreen;
