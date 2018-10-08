import * as React from "react";
import { PureComponent } from "react";
import { StyleSheet, Text, WebView } from "react-native";
import styles from "./member-zone.screen.styles";

interface IProps {
    error: string;
    loading: boolean;
    uri: string;
}

class SignUpScreen extends PureComponent<IProps> {

    public render() {
        const { error, loading, uri } = this.props;

        return (
            <>
                {loading && <Text>LOADING</Text>}
                {error && <Text>ERROR!!</Text>}
                <WebView
                    originWhitelist={["*"]} // TODO set correct origin white list
                    scalesPageToFit={true}
                    source={{ uri }}
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
