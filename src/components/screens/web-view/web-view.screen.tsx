import React from "react";
import WebView from "react-native-webview";
import { KeyboardAvoidingView } from "react-native";
import Config from "react-native-config";
import { Style, StyleSheet } from "@styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { IS_DEVELOP } from "@utils";

import { WEBVIEW } from "@ids";
import { AppHandBackPayload, useWebView } from "@app/hooks/useWebView";
import { Box } from "@atoms";

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
    <Box flex={1}>
      <GenericHeadingPad hideBorder={false} />
      <Box flex={1} w="100%">
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
      </Box>
      <GenericHeadingAbsolute hideBorder={false} onRightIconPress={handleCloseWebView} heading={title} />
    </Box>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
