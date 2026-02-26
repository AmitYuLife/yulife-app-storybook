import * as React from "react";
import { Blurb, Box, Heading } from "@atoms";
import { Button } from "@molecules";
import styles from "./signup-reward.screen.styles";
import { CoinConfetti, CentredScreen } from "@molecules";
import { useTranslation } from "@hooks";
import { BUTTON_BASE } from "@ids";

interface IProps {
  isLoading: boolean;
  onCollectPress: () => void;
  yuCoin: number;
}

const SignUpRewardScreen: React.FC<IProps> = ({ isLoading, onCollectPress, yuCoin }) => {
  const translations = useTranslation([
    "screens.signup_reward.title",
    "screens.signup_reward.description",
    "labels.cta.lets_go",
  ]);

  return (
    <CentredScreen backgroundImage={require("@assets/centred-screen/forestBackground.png")} style={styles.wrapper}>
      <Box w="100%">
        <Box pb={78} />
        <CoinConfetti coins={yuCoin} />
        <Box w="100%">
          <Heading style={styles.heading} bold={true} label={translations["screens.signup_reward.title"]} />
        </Box>
        <Box pt={16} pb={40} justifyContent="center">
          <Blurb
            textStyle={styles.message}
            wrapperStyle={styles.messageWrapper}
            label={translations["screens.signup_reward.description"]}
          />
        </Box>
        <Button
          testID={BUTTON_BASE("SIGN_UP_REWARD_SCREEN", isLoading)}
          translationKey="labels.cta.lets_go"
          onPress={onCollectPress}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </Box>
    </CentredScreen>
  );
};

export default React.memo(SignUpRewardScreen);
