import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { WebViewScreen } from "./web-view.screen";
import { withProvider } from "@components/storybook/withProvider";
import { WebViewErrorBoundary } from "./web-view.error-boundary";

const voidFunc = (): void => null;

storiesOf("WebView", module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .add("WebView", () => {
    return (
      <WebViewErrorBoundary
        handleCloseWebView={voidFunc}
        title="Broken mcbrokey face"
        onBothLinksFail={voidFunc}
        uri="https://calisthenicsskills.com/home"
      >
        <WebViewScreen title="Web View" handleCloseWebView={voidFunc} uri="https://calisthenicsskills.com/home" />
      </WebViewErrorBoundary>
    );
  });
