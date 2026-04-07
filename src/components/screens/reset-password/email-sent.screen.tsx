import React, { FC } from "react";
import { Box, Pad, TextTemplate, UnauthorisedGradient } from "@atoms";
import { Button, LinkButton } from "@molecules";
import styles from "./reset-password.screen.styles";
import { Colours } from "@styles";
import { CentredScreen } from "@molecules";
import { t } from "@locale";

interface IProps {
  email: string;
  onCtaPress: () => void;
  onSecondaryCtaPress: () => void;
}

const EmailSentScreen: FC<IProps> = ({ onCtaPress, onSecondaryCtaPress, email }) => (
  <CentredScreen
    backgroundImage={require("@assets/centred-screen/forestBackground.png")}
    style={styles.wrapper}
    BackgroundGradient={<UnauthorisedGradient />}
  >
    <Pad height={120} />
    <Box w="100%" collapsable={false}>
      <TextTemplate type="h3" textAlign="center" color={Colours.darkGray}>
        {t("screens.reset_password_submitted.heading")}
      </TextTemplate>
    </Box>
    <Pad height={9} />
    <Box px={40} collapsable={false}>
      <TextTemplate type="l1" textAlign="center" color={Colours.darkGray}>
        {t("screens.reset_password_submitted.subheading", { email })}
      </TextTemplate>
    </Box>
    <Pad height={45} />
    <Button translationKey="screens.reset_password_submitted.cta_label" onPress={onCtaPress} />
    <Pad height={10} />
    <LinkButton translationKey="labels.cta.back" onPress={onSecondaryCtaPress} />
  </CentredScreen>
);

export default EmailSentScreen;
