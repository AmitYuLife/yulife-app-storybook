import React, { PureComponent } from "react";
import { Animated, Image, View } from "react-native";
import assets from "./assets";
import styles from "./unity-locker-image.styles";

const darkCloudStart = -1300;
const mediumCloudStart = 200;
const whiteCloudStart = -1300;
const darkCloudEnd = -500;
const mediumCloudEnd = -500;
const whiteCloudEnd = -100;

class UnityLockerImage extends PureComponent {
    private darkCloudX = new Animated.Value(darkCloudStart);
    private mediumCloudX = new Animated.Value(mediumCloudStart);
    private whiteCloudX = new Animated.Value(whiteCloudStart);

    public animateIn = (callback?: () => void) => {
        const animateDarkCloud = Animated.spring(this.darkCloudX, {
            bounciness: 0,
            toValue: darkCloudEnd
        });
        const animateMediumCloud = Animated.spring(this.mediumCloudX, {
            bounciness: 0,
            toValue: mediumCloudEnd
        });
        const animateWhiteCloud = Animated.spring(this.whiteCloudX, {
            bounciness: 0,
            toValue: whiteCloudEnd
        });
        Animated.parallel([
            animateDarkCloud,
            animateMediumCloud,
            animateWhiteCloud
        ]).start(callback);
    }

    public animateOut = (callback?: () => void) => {
        const animateDarkCloud = Animated.spring(this.darkCloudX, {
            bounciness: 0,
            toValue: darkCloudStart
        });
        const animateMediumCloud = Animated.spring(this.mediumCloudX, {
            bounciness: 0,
            toValue: mediumCloudStart
        });
        const animateWhiteCloud = Animated.spring(this.whiteCloudX, {
            bounciness: 0,
            toValue: whiteCloudStart
        });
        Animated.parallel([
            animateDarkCloud,
            animateMediumCloud,
            animateWhiteCloud
        ]).start(callback);
    }

    public render() {
        return (
            <View style={styles.wrapper}>
                <Animated.View
                    style={[
                        styles.cloudWrapper,
                        {
                            transform: [
                                {
                                    translateX: this.darkCloudX
                                }
                            ]
                        }
                    ]}
                >
                    <Image
                        resizeMode="contain"
                        style={styles.cloud}
                        source={assets.darkCloud}
                    />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.mediumCloudWrapper,
                        {
                            transform: [
                                {
                                    translateX: this.mediumCloudX
                                }
                            ]
                        }
                    ]}
                >
                    <Image
                        resizeMode="contain"
                        style={styles.mediumCloud}
                        source={assets.mediumCloud}
                    />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.whiteCloudWrapper,
                        {
                            transform: [
                                {
                                    translateX: this.whiteCloudX
                                }
                            ]
                        }
                    ]}
                >
                    <Image
                        resizeMode="contain"
                        style={styles.whiteCloud}
                        source={assets.whiteCloud}
                    />
                </Animated.View>
            </View>
        );
    }
}

export default UnityLockerImage;
