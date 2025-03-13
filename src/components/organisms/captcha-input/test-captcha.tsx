import React, { forwardRef, useImperativeHandle } from "react";
import { Alert } from "react-native";

export type TestCaptchaHandle = {
  execute: () => Promise<string>;
  reset?: () => void;
};

const options = ["INVALID", "PASS", "FAIL"];

/**
 * Simple detox-friendly captcha implementation for automated testing
 *
 * This gets included in the enabledCaptchaProviders when the api-server is run in detox mode
 */
export const TestCaptcha = forwardRef<TestCaptchaHandle>((_, ref) => {
  useImperativeHandle(ref, () => ({
    execute: () => {
      return new Promise<string>((resolve) => {
        Alert.alert(
          `Captcha`,
          null,
          options.map((option) => ({
            text: option,
            onPress: () => resolve(option),
          }))
        );
      });
    },
  }));

  return <></>;
});
