import React, { useCallback } from "react";
import { WebViewScreen } from "@components/screens/web-view/web-view.screen";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { WebViewErrorBoundary } from "@components/screens/web-view/web-view.error-boundary";
import { useBackHandler } from "@hooks";
import { useDispatch } from "react-redux";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { AppHandBackPayload } from "@app/hooks/useWebView";

export interface WebViewContainerProps {
  uri: string;
  title: string;
  onBothLinksFail?: () => void;
  onClose?: (dispatch: Dispatch<AnyAction>) => void;
  onAppHandBack?: (payload: AppHandBackPayload) => void;
}

function closeWebView() {
  Navigation.dismissModal(ROUTES.webView);
}

function WebViewContainer(props: WebViewContainerProps) {
  const { uri, title, onBothLinksFail = () => null, onClose = (_) => null, onAppHandBack = () => null } = props;
  const dispatch = useDispatch();

  const handleCloseWebView = useCallback(() => {
    closeWebView();
    onClose(dispatch);
    return true;
  }, [dispatch, onClose]);

  useBackHandler(handleCloseWebView);

  return (
    <WebViewErrorBoundary
      uri={uri}
      title={title}
      onBothLinksFail={onBothLinksFail}
      handleCloseWebView={handleCloseWebView}
    >
      <WebViewScreen uri={uri} title={title} handleCloseWebView={handleCloseWebView} onAppHandBack={onAppHandBack} />
    </WebViewErrorBoundary>
  );
}

export default WebViewContainer;
