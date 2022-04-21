import * as React from "react";
import { FC } from "react";
import { GetMobileCopy_getMobileCopy_screens_signupReward as SignUpRewardCopy } from "@graphql/_core/schema";
import { Blurb, Heading, Pad } from "@atoms";
import { Button } from "@molecules";
import styles from "./signup-reward.screen.styles";
import { CoinConfetti, CentredScreen } from "@molecules";

interface IProps {
  isLoading: boolean;
  onCollectPress: () => void;
  reward: number;
  copy: SignUpRewardCopy;
}

const SignUpRewardScreen: FC<IProps> = ({ isLoading, onCollectPress, reward }) => (
  <CentredScreen footerImage="forest">
    <Pad height={74} />
    <CoinConfetti coins={reward} />
    <Heading style={styles.heading} bold={true} label={"Sign-up bounty\nunlocked!"} />
    <Pad height={16} />
    <Blurb
      textStyle={styles.message}
      wrapperStyle={styles.messageWrapper}
      label={"You can exchange your YuCoin for vouchers from Amazon, Asos, M&S, and many more!"}
    />
    <Pad height={40} />
    <Button label={"Next"} onPress={onCollectPress} isLoading={isLoading} disabled={isLoading} />
  </CentredScreen>
);

export default SignUpRewardScreen;
