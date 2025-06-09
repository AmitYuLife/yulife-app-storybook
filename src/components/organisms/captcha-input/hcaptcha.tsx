import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";
import ConfirmHcaptcha from "@hcaptcha/react-native-hcaptcha";
import { WebViewMessageEvent } from "react-native-webview";
import { CaptchaCancelledError, CaptchaHandleExecuteResponse } from "./types";
import { t } from "@locale";
import { Box } from "@atoms";
import { Markdown } from "@components/molecules";
import { Colours, templateTextStyles } from "@styles";
import { StyleSheet } from "react-native";

export type HcaptchaHandle = {
  execute: () => Promise<CaptchaHandleExecuteResponse>;
  reset?: () => void;
};

interface HcaptchaProps {
  ref: React.RefObject<HcaptchaHandle>;
  siteKey: string;
  size: "normal" | "compact" | "invisible";
}

/**
 * Hcaptcha implementation of captchas
 */
export const Hcaptcha = forwardRef<HcaptchaHandle, HcaptchaProps>(({ siteKey, size }: HcaptchaProps, ref) => {
  const [resolveFunction, setResolveFunction] = useState<((value: CaptchaHandleExecuteResponse) => void) | null>(null);
  const [rejectFunction, setRejectFunction] = useState<((reason?: Error) => void) | null>(null);
  const captchaRef = useRef<ConfirmHcaptcha>(null);

  useImperativeHandle(ref, () => ({
    execute: () => {
      return new Promise<CaptchaHandleExecuteResponse>((resolve, reject) => {
        setResolveFunction(() => resolve);
        setRejectFunction(() => reject);

        captchaRef?.current?.show();
      });
    },
  }));

  const onMessage = useCallback(
    (
      event: WebViewMessageEvent & {
        success?: boolean;
        reset?: () => void;
        markUsed?: () => void;
        nativeEvent: { data: string; description?: string };
      }
    ) => {
      if (event && event.nativeEvent.data) {
        if (event.nativeEvent.data === "open") {
          // do nothing
        } else if (event.success) {
          captchaRef?.current?.hide();
          event.markUsed();

          const token = event.nativeEvent.data;
          resolveFunction?.({
            result: token,
            debugInfo: null,
          });
        } else if (["challenge-closed", "challenge-expired", "cancel"].includes(event.nativeEvent.data)) {
          event.reset?.();
          captchaRef?.current?.hide();

          rejectFunction?.(new CaptchaCancelledError("Captcha cancelled"));
        } /* other errors */ else {
          captchaRef?.current?.hide();

          resolveFunction?.({
            result: null,
            debugInfo: JSON.stringify({
              data: event.nativeEvent.data,
              description: event.nativeEvent.description || null,
            }),
          });
        }
      }
    },
    [resolveFunction, rejectFunction]
  );

  return (
    <Box pl={40} pr={40} pt={0}>
      <Markdown text={t("captcha_input.hcaptcha_disclaimer")} markdownStyles={markdownStyles} />
      <ConfirmHcaptcha siteKey={siteKey} size={size} onMessage={onMessage} ref={captchaRef} hasBackdrop={false} />
    </Box>
  );
});

const markdownStyles = StyleSheet.create({
  text: {
    ...templateTextStyles.l1,
    textAlign: "center",
  },
  link: {
    color: Colours.inkStrong,
    textDecorationLine: "underline",
    alignSelf: "flex-start",
  },
});
