import React from "react";
import { WebViewScreen } from "@components/screens/web-view/web-view.screen";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { WebViewErrorBoundary } from "@components/screens/web-view/web-view.error-boundary";

export interface WebViewContainerProps {
  uri: string;
  title: string;
  onBothLinksFail?: () => void;
}

function handleCloseWebView() {
  Navigation.dismissModal(ROUTES.webView);
}

function WebViewContainer(props: WebViewContainerProps) {
  const { uri, title, onBothLinksFail = () => null } = props;

  return (
    <WebViewErrorBoundary
      uri={uri}
      title={title}
      onBothLinksFail={onBothLinksFail}
      handleCloseWebView={handleCloseWebView}
    >
      <WebViewScreen uri={uri} title={title} handleCloseWebView={handleCloseWebView} />
    </WebViewErrorBoundary>
  );
}

export default WebViewContainer;
