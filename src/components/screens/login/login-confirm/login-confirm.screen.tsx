import { useState, useEffect, useCallback, useMemo } from "react";
import { memo } from "react";
import { Button, LinkButton } from "@molecules";
import { t } from "@locale";
import { CaptchaInput, useCaptcha } from "@organisms/captcha-input";
import LoginFormWrapper from "../subcomponents/login-form-wrapper";
import { Alert, StyleSheet } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { openInbox, EmailException } from "react-native-email-link";
import Logger from "@services/logging/logger";

interface IProps {
  email: string;
  showLoginWithPassword: boolean;
  isResending: boolean;
  isRedeemingOtp: boolean;
  onPressBack: () => void;
  onPressLoginWithPassword: () => void;
  onPressResend: () => void;
  captcha: ReturnType<typeof useCaptcha>;
  setHasOpenedEmailApp: () => void;
}

const COOLDOWN_DURATION_SECONDS = 30;

const LoginConfirmScreen = ({
  email,
  showLoginWithPassword,
  onPressBack,
  onPressLoginWithPassword,
  captcha,
  onPressResend,
  isResending,
  isRedeemingOtp,
  setHasOpenedEmailApp,
}: IProps) => {
  const [lastResendTime, setLastResendTime] = useState<number>(Date.now());
  const [cooldownSeconds, setCooldownSeconds] = useState<number>(COOLDOWN_DURATION_SECONDS);

  const isCooldownActive = useMemo(() => cooldownSeconds > 0 || isResending, [cooldownSeconds, isResending]);

  const handleOpenEmail = useCallback(async () => {
    setHasOpenedEmailApp();

    try {
      await openInbox();
    } catch (error) {
      if (error instanceof EmailException) {
        Alert.alert(
          t("screens.login_confirm.no_email_app_installed.title"),
          t("screens.login_confirm.no_email_app_installed.message")
        );
        return;
      }

      Logger.error(error, {
        location: "login-confirm-screen.handleOpenEmail",
      });
    }
  }, [setHasOpenedEmailApp]);

  const handleResend = useCallback(() => {
    if (isCooldownActive) {
      return;
    }

    onPressResend();
    setLastResendTime(Date.now());
    setCooldownSeconds(COOLDOWN_DURATION_SECONDS);
  }, [isCooldownActive, onPressResend]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isCooldownActive) {
      interval = setInterval(() => {
        const diff = Math.round((Date.now() - lastResendTime) / 1000);
        setCooldownSeconds(Math.max(0, COOLDOWN_DURATION_SECONDS - diff));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isCooldownActive, lastResendTime]);

  return (
    <LoginFormWrapper
      heading={t("screens.login_confirm.heading", { email })}
      onPressBack={onPressBack}
      variant="magicLink"
      showFullScreenLoader={isRedeemingOtp}
    >
      <Box ph={30} pb={24}>
        <TextTemplate type="b1" textAlign="left">
          {t("screens.login_confirm.description")}
        </TextTemplate>
      </Box>
      <Button size="Large" onPress={handleOpenEmail} translationKey="screens.login_confirm.open_email" />
      <Box ph={22} pb={24} pt={16}>
        <LinkButton
          translationKey={isCooldownActive ? "screens.login_confirm.cooldown" : "screens.login_confirm.resend_link"}
          translationArgs={{
            seconds: cooldownSeconds,
          }}
          onPress={handleResend}
          disabled={isCooldownActive}
          wrapperStyle={styles.linkButton}
          underline={!isCooldownActive}
        />
        {showLoginWithPassword ? (
          <LinkButton
            translationKey="screens.login_confirm.login_with_password"
            onPress={onPressLoginWithPassword}
            wrapperStyle={styles.linkButton}
            underline={true}
          />
        ) : null}
      </Box>
      <CaptchaInput {...captcha} />
    </LoginFormWrapper>
  );
};

const styles = StyleSheet.create({
  linkButton: {
    alignSelf: "flex-start",
  },
});

export default memo(LoginConfirmScreen);
