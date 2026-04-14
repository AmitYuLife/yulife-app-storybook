import { useState, useEffect, useCallback, useMemo } from "react";
import { memo } from "react";
import { Button, LinkButton, ShortCodeInput } from "@molecules";
import { t } from "@locale";
import { CaptchaInput, useCaptcha } from "@organisms/captcha-input";
import LoginFormWrapper from "../subcomponents/login-form-wrapper";
import { Alert } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { openInbox, EmailException } from "react-native-email-link";
import { LinkButtonSpacing } from "../subcomponents/link-button-spacing";
import { BUTTON_SUBMIT_SHORT_CODE, INPUT_SHORT_CODE } from "@ids";

import { StyleSheet } from "@styles";

interface IProps {
  email: string;
  showLoginWithPassword: boolean;
  isResending: boolean;
  isRedeemingOtp: boolean;
  isSubmittingShortCode: boolean;
  shortCodeLength: number | null;
  shortCode: string;
  onChangeShortCode: (value: string) => void;
  onPressBack: () => void;
  onPressLoginWithPassword: () => void;
  onPressResend: () => void;
  onSubmitShortCode: (code: string) => void;
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
  isSubmittingShortCode,
  shortCodeLength,
  shortCode,
  onChangeShortCode,
  onSubmitShortCode,
  setHasOpenedEmailApp,
}: IProps) => {
  const [lastResendTime, setLastResendTime] = useState<number>(Date.now());
  const [cooldownSeconds, setCooldownSeconds] = useState<number>(COOLDOWN_DURATION_SECONDS);

  const isCooldownActive = useMemo(() => cooldownSeconds > 0 || isResending, [cooldownSeconds, isResending]);

  const handleSubmitShortCode = useCallback(() => {
    if (shortCode.length === shortCodeLength) {
      onSubmitShortCode(shortCode);
    }
  }, [shortCode, shortCodeLength, onSubmitShortCode]);

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

      Alert.alert(
        t("screens.login_confirm.generic_email_error.title"),
        t("screens.login_confirm.generic_email_error.message")
      );
    }
  }, [setHasOpenedEmailApp]);

  const handleResend = useCallback(() => {
    if (isCooldownActive) {
      return;
    }

    onPressResend();
    onChangeShortCode("");
    setLastResendTime(Date.now());
    setCooldownSeconds(COOLDOWN_DURATION_SECONDS);
  }, [isCooldownActive, onPressResend]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

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
          {shortCodeLength ? t("screens.login_confirm.short_code_description") : t("screens.login_confirm.description")}
        </TextTemplate>
      </Box>

      {shortCodeLength ? (
        <Box ph={30} gap={24}>
          <ShortCodeInput
            testID={INPUT_SHORT_CODE}
            value={shortCode}
            onChange={onChangeShortCode}
            onSubmit={onSubmitShortCode}
            length={shortCodeLength}
          />
          <Button
            testID={BUTTON_SUBMIT_SHORT_CODE}
            size="Large"
            onPress={handleSubmitShortCode}
            translationKey="screens.login_confirm.submit_short_code"
            isLoading={isSubmittingShortCode}
            disabled={shortCode.length !== shortCodeLength || isSubmittingShortCode}
          />
        </Box>
      ) : (
        <Button size="Large" onPress={handleOpenEmail} translationKey="screens.login_confirm.open_email" />
      )}

      <LinkButtonSpacing>
        <LinkButton
          translationKey={isCooldownActive ? "screens.login_confirm.cooldown" : "screens.login_confirm.resend_link"}
          translationArgs={{
            seconds: cooldownSeconds,
          }}
          onPress={handleResend}
          disabled={isCooldownActive}
          wrapperStyle={shortCodeLength ? styles.linkButtonCentered : styles.linkButton}
          underline={!isCooldownActive}
        />
        {showLoginWithPassword ? (
          <LinkButton
            translationKey="screens.login_confirm.login_with_password"
            onPress={onPressLoginWithPassword}
            wrapperStyle={shortCodeLength ? styles.linkButtonCentered : styles.linkButton}
            underline={true}
          />
        ) : null}
      </LinkButtonSpacing>
      <CaptchaInput {...captcha} />
    </LoginFormWrapper>
  );
};

const styles = StyleSheet.create({
  linkButton: {
    alignSelf: "flex-start",
  },
  linkButtonCentered: {
    alignSelf: "center",
  },
});

export default memo(LoginConfirmScreen);
