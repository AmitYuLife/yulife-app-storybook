import React, { FC } from "react";
import { Blurb, Heading, Pad, UnauthorisedGradient } from "@atoms";
import { Button, LinkButton } from "@molecules";
import styles from "./reset-password.screen.styles";
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
    <Heading style={styles.heading} label={t("screens.reset_password_submitted.heading")} />
    <Pad height={9} />
    <Blurb label={t("screens.reset_password_submitted.subheading", { email })} />
    <Pad height={45} />
    <Button translationKey="screens.reset_password_submitted.cta_label" onPress={onCtaPress} />
    <Pad height={10} />
    <LinkButton label={t("labels.cta.back")} onPress={onSecondaryCtaPress} />
  </CentredScreen>
);

export default EmailSentScreen;
