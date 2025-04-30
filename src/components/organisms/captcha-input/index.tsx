import React, { useMemo } from "react";
import { TestCaptchaHandle, TestCaptcha } from "./test-captcha";
import { HcaptchaHandle, Hcaptcha } from "./hcaptcha";
import { CaptchaResponse } from "./types";

export type CaptchaConfig = {
  hcaptchaSiteKey?: string;
  enabledCaptchaProviders?: string[];
};

type CaptchaRefType = TestCaptchaHandle | HcaptchaHandle | null;

interface Props {
  config: CaptchaConfig;
  selectedCaptchaProvider: string | null;
  captchaRef: React.MutableRefObject<CaptchaRefType>;
}

const selectProvider = (config: CaptchaConfig) => {
  if (config?.enabledCaptchaProviders?.includes("hcaptcha") && config?.hcaptchaSiteKey) {
    return "hcaptcha";
  }

  if (config?.enabledCaptchaProviders?.includes("test-provider")) {
    return "test-provider";
  }

  return null;
};

export const useCaptcha = (config: CaptchaConfig) => {
  const captchaRef = React.useRef<CaptchaRefType>(null);

  const reset = () => {
    captchaRef.current?.reset?.();
  };

  const selectedCaptchaProvider = useMemo(() => {
    const provider = selectProvider(config);
    reset();

    return provider;
  }, [config]);

  const submit = async (): Promise<CaptchaResponse | null> => {
    if (selectedCaptchaProvider === "hcaptcha") {
      const ref = captchaRef as React.MutableRefObject<HcaptchaHandle>;

      const result = await ref.current.execute();

      reset();

      return {
        provider: selectedCaptchaProvider,
        result: result.result,
        debugInfo: result.debugInfo,
      };
    }

    if (selectedCaptchaProvider === "test-provider") {
      const ref = captchaRef as React.MutableRefObject<TestCaptchaHandle>;

      const result = await ref.current.execute();

      reset();

      return {
        provider: selectedCaptchaProvider,
        result: result.result,
        debugInfo: result.debugInfo,
      };
    }

    return null;
  };

  return {
    selectedCaptchaProvider,
    captchaRef,
    config,
    submit,
  };
};

export const CaptchaInput = ({ selectedCaptchaProvider, config, captchaRef }: Props) => {
  if (selectedCaptchaProvider === "hcaptcha") {
    return <Hcaptcha ref={captchaRef} siteKey={config?.hcaptchaSiteKey} size={"invisible"} />;
  }

  if (selectedCaptchaProvider === "test-provider") {
    return <TestCaptcha ref={captchaRef} />;
  }

  return null;
};
