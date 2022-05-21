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
  <CentredScreen footerImage="forest" BackgroundGradient={<UnauthorisedGradient />}>
    <Pad height={120} />
    <Heading style={styles.heading} label={t("screens.resetPasswordSubmitted.heading")} />
    <Pad height={9} />
    <Blurb label={t("screens.resetPasswordSubmitted.subheading", { email })} />
    <Pad height={45} />
    <Button label={t("screens.resetPasswordSubmitted.ctaLabel")} onPress={onCtaPress} />
    <Pad height={10} />
    <LinkButton label={t("screens.resetPasswordSubmitted.ctaLabelSecondary")} onPress={onSecondaryCtaPress} />
  </CentredScreen>
);

export default EmailSentScreen;
