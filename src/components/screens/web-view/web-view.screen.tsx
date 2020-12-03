import React, { useState } from "react";
import WebView from "react-native-webview";
import { SafeAreaView, View, StyleSheet, KeyboardAvoidingView, Linking } from "react-native";
import { Style, TOP_BAR } from "@styles";
import { GenericHeading } from "@atoms";
import Config from "react-native-config";
import { ShouldStartLoadRequest } from "react-native-webview/lib/WebViewTypes";

export interface Props {
  uri: string;
  handleCloseWebView: () => void;
  title: string;
}

export function WebViewScreen(props: Props) {
  const { uri, handleCloseWebView, title } = props;
  const [hasError, setErrorState] = useState(false);

  const handleInsideLinks = (event: ShouldStartLoadRequest) => {
    if (!event.url.toLowerCase().startsWith("http")) {
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

  return (
    <SafeAreaView>
      <GenericHeading onRightIconPress={handleCloseWebView} heading={title} />

      <View style={styles.webViewWrapper}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={80}
          style={styles.flex}
          contentContainerStyle={styles.flex}
        >
          <WebView
            onRenderProcessGone={(e) => setErrorState(e.nativeEvent.didCrash)}
            onError={() => setErrorState(true)}
            style={{ width: Style.DEVICE_WIDTH }}
            source={{ uri, headers: { yu_client_token: Config.YU_CLIENT_TOKEN } }}
            onShouldStartLoadWithRequest={handleInsideLinks}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  webViewWrapper: {
    height: Style.DEVICE_HEIGHT - TOP_BAR.HEIGHT_WITH_PADDING - 20,
    width: "100%",
  },
  flex: {
    flex: 1,
  },
});
