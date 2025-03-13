import * as React from "react";
import { FunctionComponent } from "react";
import { Blurb, Box, Heading, Pad, TextTemplate, UnauthorisedGradient } from "@atoms";
import { Button, LinkButton, TextInput, CentredScreen } from "@molecules";
import styles from "./reset-password.screen.styles";
import { INPUT_RESET_PASSWORD } from "@ids";
import { useTranslation } from "@hooks";
import { CaptchaInput, useCaptcha } from "@organisms/captcha-input";
import { Colours } from "@styles";

interface IProps {
  disableSubmit: boolean;
  email: string;
  emailError: string;
  isSubmitting: boolean;
  onCancelPress: () => void;
  onEmailChange: (email: string) => void;
  onSubmitPress: () => void;
  captcha: ReturnType<typeof useCaptcha>;
  error: string;
}

const ResetPasswordScreen: FunctionComponent<IProps> = ({
  disableSubmit,
  email,
  emailError,
  isSubmitting,
  onCancelPress,
  onEmailChange,
  onSubmitPress,
  captcha,
  error,
}) => {
  const translations = useTranslation([
    "screens.reset_password.heading",
    "screens.reset_password.subheading",
    "screens.reset_password.cta_label",
    "labels.cta.back",
    "screens.reset_password.submitting",
  ]);

  return (
    <CentredScreen
      backgroundImage={require("@assets/centred-screen/forestBackground.png")}
      style={styles.wrapper}
      BackgroundGradient={<UnauthorisedGradient />}
    >
      <Pad height={120} />
      <Heading style={styles.heading} label={translations["screens.reset_password.heading"]} />
      <Pad height={9} />
      <Blurb wrapperStyle={styles.blurbWrapper} label={translations["screens.reset_password.subheading"]} />
      <Pad height={21} />
      <TextInput
        testID={INPUT_RESET_PASSWORD}
        errorMessage={emailError}
        hasError={!!emailError}
        onChange={onEmailChange}
        type={TextInput.Types.EMAIL}
        value={email}
      />
      <Pad height={15} />
      {!error ? null : (
        <Box pl={30} pr={30} pb={10} pt={10}>
          <TextTemplate type={"l2"} color={Colours.lightRed} textAlign="center">
            {error}
          </TextTemplate>
        </Box>
      )}
      <Pad height={15} />
      <Button
        isLoading={isSubmitting}
        disabled={disableSubmit || isSubmitting}
        translationKey={isSubmitting ? "screens.reset_password.submitting" : "screens.reset_password.cta_label"}
        onPress={onSubmitPress}
      />
      <Pad height={10} />
      <LinkButton translationKey="labels.cta.back" onPress={onCancelPress} />
      <CaptchaInput {...captcha} />
    </CentredScreen>
  );
};

export default ResetPasswordScreen;
