import * as React from "react";
import { SFC } from "react";
import {
    GetMobileCopy_getMobileCopy_screens_emailSent as EmailSentCopy
} from "../../../graphql/_core/schema";
import { Blurb, Button, CentredScreen, Heading, Pad } from "../../atoms";
import styles from "./reset-password.screen.styles";

interface IProps {
    email: string;
    onLogInPress: () => void;
    copy: EmailSentCopy;
}

const EmailSentScreen: SFC<IProps> = ({ onLogInPress, email, copy }) => (
    <CentredScreen footerImage="forest">
        <Pad height={100} />
        <Heading style={styles.heading} label={copy.heading} bold={true} />
        <Pad height={10} />
        <Blurb label={copy.subheading.replace("${email}", email)} />
        <Pad height={45} />
        <Button label={copy.ctaLabel} type={Button.Types.PRIMARY} onPress={onLogInPress} />
    </CentredScreen>
);

export default EmailSentScreen;
