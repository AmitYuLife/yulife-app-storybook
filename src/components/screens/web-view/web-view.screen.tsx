import React, { useState } from "react";
import WebView from "react-native-webview";
import { SafeAreaView, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Style } from "@styles";
import { GenericHeading } from "@atoms";

export interface Props {
  uri: string;
  handleCloseWebView: () => void;
  title: string;
}

export function WebViewScreen(props: Props) {
  const { uri, handleCloseWebView, title } = props;
  const [hasError, setErrorState] = useState(false);

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
            source={{ uri }}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  webViewWrapper: {
    height: Style.DEVICE_HEIGHT - GenericHeading.GENERIC_HEADING_HEIGHT - 20,
    width: "100%",
  },
  flex: {
    flex: 1,
  },
});
