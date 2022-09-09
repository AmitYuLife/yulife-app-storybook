import * as React from "react";
import { Blurb, Heading, Pad } from "@atoms";
import { Button } from "@molecules";
import styles from "./signup-reward.screen.styles";
import { CoinConfetti, CentredScreen } from "@molecules";
import { useTranslation } from "@hooks";

interface IProps {
  isLoading: boolean;
  onCollectPress: () => void;
  yuCoin: number;
}

const SignUpRewardScreen: React.FC<IProps> = ({ isLoading, onCollectPress, yuCoin }) => {
  const translations = useTranslation([
    "screens.signupReward.heading",
    "screens.signupReward.subheading",
    "screens.signupReward.ctaLabel",
    "screens.signupReward.ctaAccessibility",
  ]);

  return (
    <CentredScreen footerImage="forest">
      <Pad height={74} />
      <CoinConfetti coins={yuCoin} />
      <Heading style={styles.heading} bold={true} label={translations["screens.signupReward.heading"]} />
      <Pad height={16} />
      <Blurb
        textStyle={styles.message}
        wrapperStyle={styles.messageWrapper}
        label={translations["screens.signupReward.subheading"]}
      />
      <Pad height={40} />
      <Button
        label={translations["screens.signupReward.ctaLabel"]}
        accessibilityLabel={translations["screens.signupReward.ctaAccessibility"]}
        onPress={onCollectPress}
        isLoading={isLoading}
        disabled={isLoading}
      />
    </CentredScreen>
  );
};

export default React.memo(SignUpRewardScreen);
