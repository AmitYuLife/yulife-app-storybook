import * as React from "react";
import { SFC } from "react";
import { GetMobileCopy_getMobileCopy_screens_signupReward as SignUpRewardCopy } from "../../../../graphql/_core/schema";
import { Blurb, Button, CentredScreen, CoinConfetti, Heading, Pad } from "../../../atoms";
import styles from "./signup-reward.screen.styles";

interface IProps {
  isLoading: boolean;
  onCollectPress: () => void;
  reward: number;
  copy: SignUpRewardCopy;
}

const SignUpRewardScreen: SFC<IProps> = ({ isLoading, onCollectPress, reward, copy }) => (
  <CentredScreen footerImage="forest">
    <Pad height={74} />
    <CoinConfetti coins={reward} />
    <Heading style={styles.heading} label={copy.heading} />
    <Pad height={10} />
    <Blurb label={copy.subheading} />
    <Pad height={26} />
    <Button
      type="PrimarySmall"
      label={copy.ctaLabel}
      onPress={onCollectPress}
      isLoading={isLoading}
      disabled={isLoading}
    />
  </CentredScreen>
);

export default SignUpRewardScreen;
