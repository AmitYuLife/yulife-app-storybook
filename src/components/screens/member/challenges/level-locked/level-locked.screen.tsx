import * as React from "react";
import { PureComponent } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "../../../../atoms";
import assets from "./assets";
import styles from "./level-locked.styles";

interface IProps {
    level: number;
    onPressCta: () => void;
}

class LevelLockedScreen extends PureComponent<IProps> {
    public render() {
        const { level, onPressCta } = this.props;

        return (
            <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                    <Image source={assets.levelUnavailable} />
                </View>
                <Text bold={true} style={styles.heading}>
                    unlock at level {level}
                </Text>
                <Button type="PrimaryMedium" label="got it" onPress={onPressCta} />
            </View>
        );
    }
}

export default LevelLockedScreen;
