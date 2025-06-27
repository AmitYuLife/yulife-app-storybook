import { useCallback, useState } from "react";
import { WebViewMessageEvent } from "react-native-webview";
import Logger from "@services/logging/logger";
import { WebViewRenderProcessGoneEvent, ShouldStartLoadRequest } from "react-native-webview/lib/WebViewTypes";
import { Linking, Platform } from "react-native";
import { REGION } from "@locale";
import { useDispatch } from "react-redux";
import { SduiActionType } from "@redux/_core/types";

export type AppHandBackPayload = {
  type: "otp";
  otp: string;
  email: string;
  region: REGION;
};

interface Props {
  onAppHandBack: (payload: AppHandBackPayload) => void;
}

export const useWebView = ({ onAppHandBack }: Props) => {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const handlePostMessage = useCallback(
    async (event: WebViewMessageEvent) => {
      try {
        const parsedData = JSON.parse(event.nativeEvent.data);
        switch (parsedData.type) {
          case "appHandBack":
            if (parsedData.payload.type === "otp") {
              onAppHandBack({
                type: "otp",
                otp: parsedData.payload.otp,
                email: parsedData.payload.email,
                region: parsedData.payload.region,
              });
            }

            break;

          case "sduiActions":
            //check if it's a valid sdui action
            if (!parsedData.payload.actions || !Array.isArray(parsedData.payload.actions)) {
              Logger.error(new Error("Invalid SDUI actions received"), {
                location: "webview.sduiActions",
                data: parsedData.payload.actions,
              });
              return;
            }

            for (const action of parsedData.payload.actions) {
              //check if it's a valid sdui action type
              if (!Object.values(SduiActionType).includes(action.type)) {
                Logger.error(new Error("Invalid SDUI action type"), {
                  location: "webview.sduiActions",
                  data: action,
                });
              }

              dispatch({
                type: action.type,
                payload: { serverPayload: JSON.stringify(action.payload) },
              });
            }
        }
      } catch (err) {
        Logger.error(err, {
          location: "handlePostMessage",
        });
      }
    },
    [onAppHandBack]
  );

  const onRenderProcessGone = useCallback((e: WebViewRenderProcessGoneEvent) => {
    setError(e.nativeEvent.didCrash);
  }, []);

  const onError = useCallback(() => {
    setError(true);
  }, []);

  const handleInsideLinks = (event: ShouldStartLoadRequest) => {
    if (!event.url.toLowerCase().startsWith("http")) {
      // Ios treats the url "about:blank" as a supported url, but cannot handle it within the web-view.
      // needs to keep the loading status to true when this happens
      if (Platform.OS === "ios" && event.url.toLowerCase() === "about:blank") {
        return true;
      }

      Linking.openURL(event.url);
      return false;
    }

    return true;
  };

  return {
    handlePostMessage,
    onRenderProcessGone,
    handleInsideLinks,
    onError,
    error,
  };
};
