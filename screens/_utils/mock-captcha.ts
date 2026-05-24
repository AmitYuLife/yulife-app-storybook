import type { useCaptcha } from "@organisms/captcha-input";

type CaptchaHookResult = ReturnType<typeof useCaptcha>;

/** Minimal captcha mock for auth screens that accept `ReturnType<typeof useCaptcha>`. */
export const mockCaptcha = (): CaptchaHookResult => ({
  selectedCaptchaProvider: null,
  captchaRef: { current: null },
  config: {
    enabledCaptchaProviders: [],
  },
  submit: async () => null,
});
