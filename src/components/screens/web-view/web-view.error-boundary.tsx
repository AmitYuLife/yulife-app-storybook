import React, { useEffect } from "react";
import Logger from "@services/logger/logger";
import { Linking, SafeAreaView } from "react-native";
import { GenericHeadingAbsolute } from "@organisms";

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
    Logger.notify(error, { url: this.props.uri });
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

const WebViewFallback: React.FC<WebViewFallbackProps> = (props) => {
  useEffect(() => {
    async function openURL() {
      try {
        await Linking.openURL(props.url);
      } catch {
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
};
