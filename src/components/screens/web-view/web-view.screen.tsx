import React, { useState } from "react";
import WebView from "react-native-webview";
import { SafeAreaView, View, StyleSheet } from "react-native";
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
        <WebView
          onRenderProcessGone={(e) => {
            console.log("WebView crash:", e.nativeEvent.didCrash);
            setErrorState(e.nativeEvent.didCrash);
          }}
          onError={() => {
            setErrorState(true);
          }}
          style={{ width: Style.DEVICE_WIDTH }}
          source={{ uri }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  webViewWrapper: {
    height: "100%",
    width: "100%",
  },
});
