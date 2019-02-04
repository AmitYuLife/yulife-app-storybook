import * as React from "react";
import { SFC } from "react";
import { Button, CentredScreen, Heading, Pad, TextInput } from "../../atoms";
import styles from "./reset-password.screen.styles";

interface IProps {
    disableSubmit: boolean;
    email: string;
    emailError: string;
    isSubmitting: boolean;
    onCancelPress: () => void;
    onEmailChange: (email: string) => void;
    onSubmitPress: () => void;
}

const ResetPasswordScreen: SFC<IProps> = ({
    disableSubmit,
    email,
    emailError,
    isSubmitting,
    onCancelPress,
    onEmailChange,
    onSubmitPress
}) => (
    <CentredScreen footerImage="forest">
        <Pad height={120} />
        <Heading style={styles.heading} label="reset password" />
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
            disabled={disableSubmit || isSubmitting}
            label={isSubmitting ? "submitting ..." : "send me the link"}
            onPress={onSubmitPress}
            type={Button.Types.PRIMARY}
        />
        <Pad height={10} />
        <Button label="Back" type={Button.Types.LINK} onPress={onCancelPress} />
    </CentredScreen>
);

export default ResetPasswordScreen;
