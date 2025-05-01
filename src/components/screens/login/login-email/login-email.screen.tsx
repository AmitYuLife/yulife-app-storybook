import { useCallback, useMemo, useState } from "react";
import { memo } from "react";
import { Box, Pad, TextTemplate } from "@atoms";
import { Button, TextInput } from "@molecules";
import { BUTTON_LOGIN, INPUT_LOGIN_EMAIL } from "@ids";
import { CaptchaInput, useCaptcha } from "@organisms/captcha-input";
import { Colours, Style } from "@styles";
import { t } from "@locale";
import { LoginFormWrapper } from "../subcomponents/login-form-wrapper";
import { StyleSheet } from "react-native";

interface IProps {
  email: string;
  emailError: string;
  isSubmitting: boolean;
  onPressBack: () => void;
  onPressSubmit: () => void;
  onEmailChange: (email: string) => void;
  captcha: ReturnType<typeof useCaptcha>;
  magicLinkError: string;
}

const LoginEmailScreen = ({
  email,
  emailError,
  magicLinkError,
  isSubmitting,
  onPressBack,
  onPressSubmit,
  onEmailChange,
  captcha,
}: IProps) => {
  const [showEmailError, setShowEmailError] = useState(false);

  const disableSubmit = useMemo(() => !email || !!emailError || isSubmitting, [email, emailError, isSubmitting]);

  const handleSubmit = useCallback(() => {
    if (emailError) {
      setShowEmailError(true);
      return;
    }

    setShowEmailError(false);
    onPressSubmit();
  }, [onPressSubmit, emailError]);

  return (
    <LoginFormWrapper heading={t("screens.login_email.heading")} onPressBack={onPressBack}>
      <TextInput
        testID={INPUT_LOGIN_EMAIL}
        errorMessage={showEmailError ? emailError : ""}
        hasError={!!(showEmailError && emailError)}
        onChange={onEmailChange}
        type={TextInput.Types.EMAIL}
        value={email}
        maxLength={320}
        style={styles.input}
      />

      <Pad height={40} />

      <Button
        testID={BUTTON_LOGIN(disableSubmit)}
        isLoading={isSubmitting}
        disabled={disableSubmit}
        translationKey={isSubmitting ? "screens.login_email.submitting" : "screens.login_email.cta_label"}
        onPress={handleSubmit}
      />

      {!magicLinkError ? null : (
        <Box py={10} px={30}>
          <TextTemplate type={"l2"} color={Colours.lightRed} textAlign="center">
            {magicLinkError}
          </TextTemplate>
        </Box>
      )}

      <Pad height={24} />

      <CaptchaInput {...captcha} />
    </LoginFormWrapper>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: Style.adjust(30),
  },
});

export default memo(LoginEmailScreen);
