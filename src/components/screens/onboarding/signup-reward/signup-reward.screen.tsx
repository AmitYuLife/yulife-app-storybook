import * as React from "react";
import { ScrollView } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { Button, CoinConfetti, CentredScreen } from "@molecules";
import styles from "./signup-reward.screen.styles";
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
      <ScrollView contentContainerStyle={styles.scrollContent} scrollEnabled={false}>
        <Box w="100%">
          <Box pb={78} />
          <CoinConfetti coins={yuCoin} />
          <Box w="100%">
            <TextTemplate type="h1" textAlign="center">
              {translations["screens.signup_reward.title"]}
            </TextTemplate>
          </Box>
          <Box pt={16} pb={40} justifyContent="center">
            <TextTemplate type="b2" textAlign="center">
              {translations["screens.signup_reward.description"]}
            </TextTemplate>
          </Box>
          <Button
            testID={BUTTON_BASE("SIGN_UP_REWARD_SCREEN", isLoading)}
            translationKey="labels.cta.lets_go"
            onPress={onCollectPress}
            isLoading={isLoading}
            disabled={isLoading}
          />
        </Box>
      </ScrollView>
    </CentredScreen>
  );
};

export default React.memo(SignUpRewardScreen);
