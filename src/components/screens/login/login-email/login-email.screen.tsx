import * as React from "react";
import { memo } from "react";
import { Box, Pad, TextTemplate, UnauthorisedGradient } from "@atoms";
import { Button, LinkButton, TextInput, CentredScreen, Pressable } from "@molecules";
import { BUTTON_LOGIN, INPUT_LOGIN_EMAIL } from "@ids";
import { useKeyboardListeners } from "@hooks";
import { CaptchaInput, useCaptcha } from "@organisms/captcha-input";
import { Colours, Style } from "@styles";
import { Keyboard, StyleSheet, View } from "react-native";
import { t } from "@locale";

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
  const isShowingKeyboard = useKeyboardListeners();

  const disableSubmit = !!emailError || isSubmitting;

  return (
    <CentredScreen
      backgroundImage={require("@assets/centred-screen/forestBackground.png")}
      style={styles.wrapper}
      BackgroundGradient={<UnauthorisedGradient />}
    >
      <Pressable
        delay={1000}
        style={styles.fullScreenWrapper}
        accessible={isShowingKeyboard ? true : false}
        importantForAccessibility={isShowingKeyboard ? "auto" : "no"}
        accessibilityLabel={t("screens.login.accessibility.hide_keyboard")}
        onPress={isShowingKeyboard ? Keyboard.dismiss : () => null}
      >
        <View />
      </Pressable>
      {isShowingKeyboard ? null : (
        <Box pt={100} pb={40} pl={30} pr={30}>
          <TextTemplate type="h2">{t("screens.login_email.heading")}</TextTemplate>
        </Box>
      )}
      <TextInput
        testID={INPUT_LOGIN_EMAIL}
        errorMessage={emailError}
        hasError={!!emailError}
        onChange={onEmailChange}
        type={TextInput.Types.EMAIL}
        value={email}
      />
      <Pad height={15} />
      {!magicLinkError ? null : (
        <Box pl={30} pr={30} pb={10} pt={10}>
          <TextTemplate type={"l2"} color={Colours.lightRed} textAlign="center">
            {magicLinkError}
          </TextTemplate>
        </Box>
      )}
      <Pad height={15} />
      <Button
        testID={BUTTON_LOGIN(disableSubmit)}
        isLoading={isSubmitting}
        disabled={disableSubmit || isSubmitting}
        translationKey={isSubmitting ? "screens.login_email.submitting" : "screens.login_email.cta_label"}
        onPress={onPressSubmit}
      />
      <Pad height={10} />
      <LinkButton translationKey="labels.cta.back" onPress={onPressBack} />
      <CaptchaInput {...captcha} />
    </CentredScreen>
  );
};

export default memo(LoginEmailScreen);

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(265),
  },
  flex: {
    flex: 1,
  },
  fullScreenWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
});
