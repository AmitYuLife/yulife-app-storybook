import * as React from "react";
import { PureComponent } from "react";
import { NativeSyntheticEvent, StyleSheet, Text, WebView, WebViewMessageEventData } from "react-native";
import Config from "react-native-config";
import styles from "./sign-up.styles";

const injectScript = `
    window.postMessage = window.originalPostMessage || window.postMessage;
    var signUpBtn = document.getElementById("signup");
    signUpBtn.addEventListener('click', function(event) {
        window.postMessage("signedup");
    });
`;

interface IProps {
    error: string;
    loading: boolean;
    onError: (error: Error) => void;
    onLoad: () => void;
    onLoadEnd: () => void;
    onLoadStart: () => void;
    onMessage: (event: NativeSyntheticEvent<WebViewMessageEventData>) => void;
}

class SignUpScreen extends PureComponent<IProps> {

    public render() {
        const { error, loading, onError, onLoad, onLoadEnd, onLoadStart, onMessage } = this.props;

        return (
            <>
                {loading && <Text>LOADING</Text>}
                {error && <Text>ERROR!!</Text>}
                <WebView
                    originWhitelist={["*"]} // TODO set correct origin white list
                    injectedJavaScript={injectScript}
                    onError={onError}
                    onLoadStart={onLoadStart}
                    onLoadEnd={onLoadEnd}
                    onLoad={onLoad}
                    onMessage={onMessage}
                    scalesPageToFit={true}
                    source={{ uri: Config.SIGN_UP_URL }}
                    style={StyleSheet.flatten([
                        styles.webView,
                        loading ? styles.invisible : null
                    ])}
                />
            </>
        );
    }
}

export default SignUpScreen;
