import { BUTTON_INTRO_SCREEN } from "@ids";
import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./screen-3.styles";
import { IScreenProps } from "./screen.models";

class OnboardingScreenThree extends React.PureComponent<IScreenProps> {
    public render() {
        const { onPressNext, onPressPrevious } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.contentWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image
                            resizeMode="cover"
                            style={styles.image}
                            source={require("../../../../../../assets/intro/onboarding-app-3.png")}
                        />
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <TouchableOpacity onPress={onPressNext} style={styles.button} testID={BUTTON_INTRO_SCREEN(3)} />
                        <TouchableOpacity onPress={onPressPrevious} style={styles.button} />
                    </View>
                </View>
            </View>
        );
    }
}

export default OnboardingScreenThree;
