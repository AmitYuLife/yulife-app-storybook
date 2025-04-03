import { useState, useEffect, useCallback, useMemo } from "react";
import { memo } from "react";
import { LinkButton } from "@molecules";
import { t } from "@locale";
import { CaptchaInput, useCaptcha } from "@organisms/captcha-input";
import LoginFormWrapper from "../subcomponents/login-form-wrapper";
import { StyleSheet } from "react-native";
import { Box, TextTemplate } from "@atoms";

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
  const [cooldownSeconds, setCooldownSeconds] = useState(30);
  const isCooldownActive = useMemo(() => cooldownSeconds > 0 || isResending, [cooldownSeconds, isResending]);

  const handleResend = useCallback(() => {
    if (isCooldownActive) {
      return;
    }

    onPressResend();
    setCooldownSeconds(30);
  }, [isCooldownActive, onPressResend]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isCooldownActive) {
      interval = setInterval(() => {
        setCooldownSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isCooldownActive]);

  return (
    <LoginFormWrapper
      heading={t("screens.login_confirm.heading", { email })}
      onPressBack={onPressBack}
      variant="magicLink"
    >
      <Box ph={30} pb={24}>
        <TextTemplate type="b1" textAlign="left">
          {t("screens.login_confirm.description")}
        </TextTemplate>
      </Box>
      <Box ph={22} pb={24}>
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
