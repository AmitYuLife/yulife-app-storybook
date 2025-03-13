import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";
import ConfirmHcaptcha from "@hcaptcha/react-native-hcaptcha";
import { WebViewMessageEvent } from "react-native-webview";
import { CaptchaCancelledError } from "./types";
import { t } from "@locale";
import { Box } from "@atoms";
import { Markdown } from "@components/molecules";
import { Colours, templateTextStyles } from "@styles";

export type HcaptchaHandle = {
  execute: () => Promise<string>;
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
  const [resolveFunction, setResolveFunction] = useState<((value: string | null) => void) | null>(null);
  const [rejectFunction, setRejectFunction] = useState<((reason?: Error) => void) | null>(null);
  const captchaRef = useRef<ConfirmHcaptcha>(null);

  useImperativeHandle(ref, () => ({
    execute: () => {
      return new Promise<string>((resolve, reject) => {
        setResolveFunction(() => resolve);
        setRejectFunction(() => reject);

        captchaRef?.current?.show();
      });
    },
  }));

  const onMessage = useCallback(
    (event: WebViewMessageEvent & { markUsed?: () => void }) => {
      if (event && event.nativeEvent.data) {
        if (["open"].includes(event.nativeEvent.data)) {
          // we don't care about the open event
          return;
        }

        if (["cancel", "expired"].includes(event.nativeEvent.data)) {
          captchaRef?.current?.hide();
          rejectFunction?.(new CaptchaCancelledError("Captcha cancelled"));
        } else if (["error"].includes(event.nativeEvent.data)) {
          // an error occurred, so we need to hide the captcha and resolve with null
          captchaRef?.current?.hide();
          resolveFunction?.(null);
        } else {
          captchaRef?.current?.hide();
          const token = event.nativeEvent.data;
          event.markUsed?.();
          resolveFunction?.(token);
        }
      }
    },
    [resolveFunction, rejectFunction]
  );

  return (
    <Box pl={40} pr={40} pt={0}>
      <Markdown text={t("captcha_input.hcaptcha_disclaimer")} markdownStyles={markdownStyles} />
      <ConfirmHcaptcha siteKey={siteKey} size={size} onMessage={onMessage} ref={captchaRef} />
    </Box>
  );
});

const markdownStyles = {
  text: {
    ...templateTextStyles.l1,
    textAlign: "center",
  },
  link: {
    color: Colours.gray,
    textDecorationLine: "underline",
    alignSelf: "flex-start",
  },
};
