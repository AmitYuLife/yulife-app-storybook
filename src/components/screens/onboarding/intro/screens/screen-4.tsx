import React, { PureComponent } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./screen-3.styles";
import { IScreenProps } from "./screen.models";

class OnboardingScreenFour extends PureComponent<IScreenProps> {
    public render() {
        const { onPressNext, onPressPrevious } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.contentWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image
                            resizeMode="cover"
                            style={styles.image}
                            source={require("../assets/onboarding-app-4.png")}
                        />
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity
                            onPress={onPressNext}
                            style={styles.button}
                        />
                        <TouchableOpacity
                            onPress={onPressPrevious}
                            style={styles.button}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default OnboardingScreenFour;
