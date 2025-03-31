import * as React from "react";
import { memo } from "react";
import { Box, TextTemplate, UnauthorisedGradient } from "@atoms";
import { LinkButton, CentredScreen } from "@molecules";
import { Style } from "@styles";
import { StyleSheet } from "react-native";
import { t } from "@locale";
import { CaptchaInput, useCaptcha } from "@organisms/captcha-input";

interface IProps {
  email: string;
  showLoginWithPassword: boolean;
  isResending: boolean;
  onPressBack: () => void;
  onPressLoginWithPassword: () => void;
  onPressResend: () => void;
  captcha: ReturnType<typeof useCaptcha>;
}

const LoginConfirmScreen = ({
  email,
  showLoginWithPassword,
  onPressBack,
  onPressLoginWithPassword,
  captcha,
  onPressResend,
  isResending,
}: IProps) => {
  return (
    <CentredScreen
      backgroundImage={require("@assets/centred-screen/forestBackground.png")}
      style={styles.wrapper}
      BackgroundGradient={<UnauthorisedGradient />}
    >
      <Box pt={100} pb={40} pl={30} pr={30}>
        <TextTemplate type="h2">{t("screens.login_confirm.heading", { email })}</TextTemplate>
      </Box>
      {showLoginWithPassword ? (
        <LinkButton translationKey="labels.cta.login_with_password" onPress={onPressLoginWithPassword} />
      ) : null}
      <LinkButton
        translationKey={isResending ? "screens.login_confirm.resending_link" : "screens.login_confirm.resend_link"}
        onPress={onPressResend}
        disabled={isResending}
      />
      <LinkButton translationKey="labels.cta.back" onPress={onPressBack} />

      <CaptchaInput {...captcha} />
    </CentredScreen>
  );
};

export default memo(LoginConfirmScreen);

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
