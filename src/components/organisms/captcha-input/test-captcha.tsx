import React, { Ref, useImperativeHandle } from "react";
import { Alert } from "react-native";
import { CaptchaHandleExecuteResponse } from "./types";

export type TestCaptchaHandle = {
  execute: () => Promise<CaptchaHandleExecuteResponse>;
  reset?: () => void;
};

interface ITestCaptchaProps {
  ref?: Ref<TestCaptchaHandle>;
}

const options = ["INVALID", "PASS", "FAIL"];

/**
 * Simple detox-friendly captcha implementation for automated testing
 *
 * This gets included in the enabledCaptchaProviders when the api-server is run in detox mode
 */
export const TestCaptcha = ({ ref }: ITestCaptchaProps) => {
  useImperativeHandle(ref, () => ({
    execute: () => {
      return new Promise<CaptchaHandleExecuteResponse>((resolve) => {
        Alert.alert(
          `Captcha`,
          null,
          options.map((option) => ({
            text: option,
            onPress: () =>
              resolve({
                result: option,
                debugInfo: null,
              }),
          }))
        );
      });
    },
  }));

  return <></>;
};
