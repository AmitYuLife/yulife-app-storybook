import React, { PureComponent } from "react";
import { Animated, Image } from "react-native";
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
    private wrapperScale = new Animated.Value(0);
    private wrapperOpacity = new Animated.Value(0);

    public animateIn = (callback?: () => void) => {
        const scaleUp = Animated.timing(this.wrapperScale, {
            duration: 0,
            toValue: 1
        });
        const opacityUp = Animated.timing(this.wrapperOpacity, {
            duration: 0,
            toValue: 1
        });
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
        const cloudAnimation = Animated.parallel([
            animateDarkCloud,
            animateMediumCloud,
            animateWhiteCloud
        ]);
        Animated.sequence([
            scaleUp,
            opacityUp,
            cloudAnimation
        ]).start(callback);
    }

    public animateOut = (callback?: () => void) => {
        const scaleDown = Animated.timing(this.wrapperScale, {
            duration: 0,
            toValue: 0
        });
        const opacityDown = Animated.timing(this.wrapperOpacity, {
            duration: 0,
            toValue: 1
        });
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
        const cloudAnimation = Animated.parallel([
            animateDarkCloud,
            animateMediumCloud,
            animateWhiteCloud
        ]);
        Animated.sequence([
            cloudAnimation,
            opacityDown,
            scaleDown
        ]).start(callback);
    }

    public render() {
        return (
            <Animated.View
                style={[
                    styles.wrapper,
                    {
                        opacity: this.wrapperOpacity,
                        transform: [
                            {
                                scale: this.wrapperScale
                            }
                        ]
                    }
                ]}
            >
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
            </Animated.View>
        );
    }
}

export default UnityLockerImage;
