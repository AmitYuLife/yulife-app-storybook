import React from "react";
import WebView from "react-native-webview";
import { View, KeyboardAvoidingView } from "react-native";
import Config from "react-native-config";
import { Style, TOP_BAR, StyleSheet } from "@styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { IS_DEVELOP } from "@utils";

import { WEBVIEW } from "@ids";
import { AppHandBackPayload, useWebView } from "@app/hooks/useWebView";

export interface Props {
  uri: string;
  handleCloseWebView: () => void;
  title: string;
  onAppHandBack?: (payload: AppHandBackPayload) => void;
  onBothLinksFail?: () => void;
}

export function WebViewScreen(props: Props) {
  const { uri, handleCloseWebView, title, onAppHandBack } = props;
  const { handlePostMessage, handleInsideLinks, onRenderProcessGone, error, onError } = useWebView({ onAppHandBack });

  if (error) {
    // the error boundary expects an error to be thrown in side of a render,
    // doing so in a callback doesn't seem to trigger the error boundary's lifecycle methods
    throw new Error("There was an error loading the webview");
  }

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
