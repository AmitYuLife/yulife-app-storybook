import React, { PureComponent } from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./screen-1.styles";
import { IScreenProps } from "./screen.models";

class OnboardingScreenOne extends PureComponent<IScreenProps> {
    public render() {
        const { onPressNext } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPressNext}
                style={styles.wrapper}
            >
                <Image
                    resizeMethod="resize"
                    resizeMode="contain"
                    style={styles.image}
                    source={require("../../../../../../assets/intro/onboarding-app-1.png")}
                />
            </TouchableOpacity>
        );
    }
}

export default OnboardingScreenOne;
