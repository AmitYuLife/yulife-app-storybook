import { BUTTON_INTRO_SCREEN } from "@ids";
import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./screen-2.styles";
import { IScreenProps } from "./screen.models";

class OnboardingScreenTwo extends React.PureComponent<IScreenProps> {
    public render() {
        const { onPressNext, onPressPrevious } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.contentWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={require("../../../../../../assets/intro/onboarding-app-2.png")}
                        />
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity onPress={onPressNext} style={styles.button} testID={BUTTON_INTRO_SCREEN(2)} />
                        <TouchableOpacity onPress={onPressPrevious} style={styles.button} />
                    </View>
                </View>
            </View>
        );
    }
}

export default OnboardingScreenTwo;
