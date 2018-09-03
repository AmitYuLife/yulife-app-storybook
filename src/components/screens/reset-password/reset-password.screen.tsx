import * as React from "react";
import { PureComponent } from "react";
import {
    Button,
    CentredScreen,
    Heading,
    Pad,
    TextInput
} from "../../atoms";
import styles from "./reset-password.screen.styles";

interface IProps {
    email: string;
    emailError: string;
    isSubmitting: boolean;
    onCancelPress: () => void;
    onEmailChange: (email: string) => void;
    onSubmitPress: () => void;
}

class ResetPasswordScreen extends PureComponent<IProps> {

    public render() {
        const {
            email,
            emailError,
            isSubmitting,
            onCancelPress,
            onEmailChange,
            onSubmitPress
        } = this.props;

        return (
            <CentredScreen
                footerImage={CentredScreen.FooterImages.FOREST}
            >
                <Pad height={120} />
                <Heading
                    style={styles.heading}
                    label="reset password"
                />
                <Pad height={90} />
                <TextInput
                    errorMessage={emailError}
                    hasError={!!emailError}
                    onChange={onEmailChange}
                    type={TextInput.Types.EMAIL}
                    value={email}
                />
                <Pad height={30} />
                <Button
                    disabled={isSubmitting}
                    label={isSubmitting ? "submitting ..." : "send me the link"}
                    onPress={onSubmitPress}
                    type={Button.Types.PRIMARY}
                />
                <Pad height={10} />
                <Button
                    label="Back"
                    type={Button.Types.LINK}
                    onPress={onCancelPress}
                />
            </CentredScreen>
        );
    }
}

export default ResetPasswordScreen;
