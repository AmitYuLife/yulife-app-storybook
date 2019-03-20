import { BUTTON_INTRO_SCREEN } from "@ids";
import React, { PureComponent } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./screen-5.styles";
import { IScreenProps } from "./screen.models";

class OnboardingScreenFive extends PureComponent<IScreenProps> {
    public render() {
        const { onPressNext, onPressPrevious } = this.props;
        return (
            <View
                style={styles.wrapper}
            >
                <View style={styles.contentWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            source={require("../../../../../../assets/intro/onboarding-app-5.png")}
                        />
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity
                            onPress={onPressNext}
                            style={styles.button}
                            testID={BUTTON_INTRO_SCREEN(5)}
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

export default OnboardingScreenFive;
