import { Style } from "@styles/index";
import * as React from "react";
import { ActivityIndicator, Animated, StyleSheet, Text, View } from "react-native";
import { NormalHeader } from "react-native-spring-scrollview";

export default class YulifeRefreshHeader extends NormalHeader {
    public render() {
        return (
            <View style={styles.container}>
                {this.renderIcon()}
                <View style={styles.rContainer}>
                    <Text style={styles.text}>{this.getTitle()}</Text>
                </View>
            </View>
        );
    }

    private renderIcon = () => {
        const s = this.state.status;

        if (s === "refreshing" || s === "rebound") {
            return <ActivityIndicator color={"gray"} />;
        }

        const { maxHeight, offset } = this.props;

        return (
            <Animated.Image
                source={require("../../../../node_modules/react-native-spring-scrollview/Customize/res/arrow.png")}
                style={{
                    transform: [
                        {
                            rotate: offset.interpolate({
                                inputRange: [-maxHeight - 1 - 10, -maxHeight - 10, -50, -49],
                                outputRange: ["180deg", "180deg", "0deg", "0deg"]
                            })
                        }
                    ]
                }}
            />
        );
    };

    private getTitle = () => {
        const s = this.state.status;
        if (s === "pulling" || s === "waiting") {
            return "Pull down to refresh";
        } else if (s === "pullingEnough") {
            return "Release to refresh";
        } else if (s === "refreshing") {
            return "Refreshing ...";
        } else if (s === "pullingCancel") {
            return "Give up refreshing";
        } else if (s === "rebound") {
            return "Refresh completed";
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    rContainer: {
        marginLeft: 20
    },
    text: {
        fontFamily: Style.FONT_FAMILY_PRIMARY,
        marginVertical: 5,
        fontSize: 12,
        color: "#666",
        textAlign: "center",
        width: 140
    }
});
