import * as React from "react";
import { SFC } from "react";
import {
    Button,
    CentredScreen,
    Heading,
    Pad,
} from "../../../atoms";
import styles from "./reset-password.styles";

interface IProps {
    onLogInPress: () => void;
}

const ResetPasswordSuccessScreen: SFC<IProps> = ({ onLogInPress }) => (
    <CentredScreen
        footerImage={CentredScreen.FooterImages.FOREST}
    >
        <Pad height={120} />
        <Heading
            style={styles.heading}
            label="email sent"
        />
        <Pad height={60} />
        <Button
            label="go back to log in"
            type={Button.Types.PRIMARY}
            onPress={onLogInPress}
        />
    </CentredScreen>
);

export default ResetPasswordSuccessScreen;
