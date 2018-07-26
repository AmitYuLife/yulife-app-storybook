import React, { SFC } from "react";
import { StyleSheet, Text, View } from "react-native";

const LoginScreen: SFC<{}> = () => (
    <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
    </View>
);

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        flex: 1,
        justifyContent: "center",
    },
    instructions: {
        color: "#333333",
        marginBottom: 5,
        textAlign: "center",
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
    },
});
