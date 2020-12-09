import React, { useEffect } from "react";
import Logger from "@services/logging/logger";
import { Linking, SafeAreaView } from "react-native";
import GenericHeadingAbsolute from "@atoms/generic-heading/generic-heading-absolute";

interface Props {
  children: React.ReactNode;
  uri: string;
  title: string;
  onBothLinksFail: () => void;
  handleCloseWebView: () => void;
}

interface State {
  hasError: boolean;
}

export class WebViewErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    Logger.logMixpanelError(error, `@webview-${this.props.uri}`);
  }

  render() {
    const { onBothLinksFail, handleCloseWebView, uri, children, title } = this.props;

    if (this.state.hasError) {
      return (
        <WebViewFallback
          title={title}
          onBothLinksFail={onBothLinksFail}
          url={uri}
          handleCloseWebView={handleCloseWebView}
        />
      );
    }

    return children;
  }
}

interface WebViewFallbackProps {
  url: string;
  title: string;
  onBothLinksFail: () => void;
  handleCloseWebView: () => void;
}

function WebViewFallback(props: WebViewFallbackProps): JSX.Element {
  useEffect(() => {
    async function openURL() {
      const supported = await Linking.canOpenURL(props.url);

      if (supported) {
        await Linking.openURL(props.url);
      } else {
        props.onBothLinksFail();
      }
    }

    openURL();
  }, [props]);

  return (
    <SafeAreaView>
      <GenericHeadingAbsolute onRightIconPress={props.handleCloseWebView} heading={props.title} />
    </SafeAreaView>
  );
}
