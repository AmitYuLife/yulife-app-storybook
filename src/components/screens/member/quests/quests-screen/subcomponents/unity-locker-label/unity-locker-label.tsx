import React, { PureComponent } from "react";
import { View } from "react-native";
import { Pad, Text } from "../../../../../../atoms";
import styles, { padHeight } from "./unity-locker-label.styles";

class TransitionToUnity extends PureComponent {
    public render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.textWrapper}>
                    <Pad height={padHeight} />
                    <Text bold={true} style={styles.text}>
                        unlock at level 49
                    </Text>
                </View>
            </View >
        );
    }
}

export default TransitionToUnity;
