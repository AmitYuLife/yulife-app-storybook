import React, { useCallback, useState } from "react";
import WebView from "react-native-webview";
import { View, StyleSheet, KeyboardAvoidingView, Linking, Platform } from "react-native";
import Config from "react-native-config";
import {
  ShouldStartLoadRequest,
  WebViewMessageEvent,
  WebViewRenderProcessGoneEvent,
} from "react-native-webview/lib/WebViewTypes";
import { Style, TOP_BAR } from "@styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { IS_DEVELOP } from "@utils";
import { REGION } from "@locale";
import Logger from "@services/logging/logger";
import { WEBVIEW } from "@ids";

export type AppHandBackPayload = {
  type: "otp";
  otp: string;
  email: string;
  region: REGION;
};

export interface Props {
  uri: string;
  handleCloseWebView: () => void;
  title: string;
  onAppHandBack?: (payload: AppHandBackPayload) => void;
  onBothLinksFail?: () => void;
}

export function WebViewScreen(props: Props) {
  const { uri, handleCloseWebView, title, onAppHandBack } = props;
  const [hasError, setErrorState] = useState(false);

  const handlePostMessage = useCallback(
    (event: WebViewMessageEvent) => {
      try {
        const parsedData = JSON.parse(event.nativeEvent.data);

        if (parsedData.type === "appHandBack" && parsedData.payload.type === "otp") {
          onAppHandBack({
            type: "otp",
            otp: parsedData.payload.otp,
            email: parsedData.payload.email,
            region: parsedData.payload.region,
          });
        }
      } catch (err) {
        Logger.error(err, {
          location: "handlePostMessage",
        });
      }
    },
    [onAppHandBack]
  );

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

  if (hasError) {
    // the error boundary expects an error to be thrown in side of a render,
    // doing so in a callback doesn't seem to trigger the error boundary's lifecycle methods
    throw new Error("There was an error loading the webview");
  }

  const onRenderProcessGone = useCallback((e: WebViewRenderProcessGoneEvent) => {
    setErrorState(e.nativeEvent.didCrash);
  }, []);

  const onError = useCallback(() => {
    setErrorState(true);
  }, []);

  return (
    <View>
      <GenericHeadingPad />
      <View style={styles.webViewWrapper}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={80}
          style={styles.flex}
          contentContainerStyle={styles.flex}
        >
          <WebView
            onRenderProcessGone={onRenderProcessGone}
            onError={onError}
            style={{ width: Style.DEVICE_WIDTH }}
            source={{ uri, headers: { yu_client_token: Config.YU_CLIENT_TOKEN } }}
            onShouldStartLoadWithRequest={handleInsideLinks}
            onMessage={handlePostMessage}
            webviewDebuggingEnabled={IS_DEVELOP}
            testID={WEBVIEW}
          />
        </KeyboardAvoidingView>
      </View>
      <GenericHeadingAbsolute hideBorder={false} onRightIconPress={handleCloseWebView} heading={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  webViewWrapper: {
    height: Style.DEVICE_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD,
    width: "100%",
  },
  flex: {
    flex: 1,
  },
});
