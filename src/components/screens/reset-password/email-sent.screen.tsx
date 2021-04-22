import * as React from "react";
import { SFC } from "react";
import { GetMobileCopy_getMobileCopy_screens_emailSent as EmailSentCopy } from "../../../graphql/_core/schema";
import { Blurb, Button, CentredScreen, Heading, LinkButton, Pad, UnauthorisedGradient } from "../../atoms";
import styles from "./reset-password.screen.styles";

interface IProps {
  email: string;
  onCtaPress: () => void;
  onSecondaryCtaPress: () => void;
  copy: EmailSentCopy;
}

const EmailSentScreen: SFC<IProps> = ({ onCtaPress, onSecondaryCtaPress, email, copy }) => (
  <CentredScreen footerImage="forest" BackgroundGradient={<UnauthorisedGradient />}>
    <Pad height={120} />
    <Heading style={styles.heading} label={copy.heading} />
    <Pad height={9} />
    <Blurb label={copy.subheading.replace("${email}", email)} />
    <Pad height={45} />
    <Button label={copy.ctaLabel} onPress={onCtaPress} />
    <Pad height={10} />
    <LinkButton label={copy.ctaLabelSecondary} onPress={onSecondaryCtaPress} />
  </CentredScreen>
);

export default EmailSentScreen;
