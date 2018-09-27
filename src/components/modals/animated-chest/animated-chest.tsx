import * as React from "react";
import { PureComponent } from "react";
import { Animated, Image, StyleSheet, View, ViewStyle } from "react-native";
import { Button, ChestCoin, Text } from "../../atoms";
import styles from "./animated-chest.styles";
import assets from "./assets";

interface IProps {
    ctaLabel: string;
    heading: string;
    isLocked?: boolean;
    onPressCta: () => void;
    onPressCtaSecondary?: () => void;
}

export default class AnimatedChest extends PureComponent<IProps> {
    private animationDelay: NodeJS.Timer;
    private lidYOffset = new Animated.Value(-35);
    private coinYOffset = new Animated.Value(500);
    private confettiScale = new Animated.Value(0);
    private confettiOpacity = new Animated.Value(0);

    public componentWillUnmount() {
        if (this.animationDelay) {
            clearTimeout(this.animationDelay);
        }
    }

    public componentDidUpdate(prevProps: IProps): void {
        const isUnlocked = prevProps.isLocked && !this.props.isLocked;

        if (isUnlocked) {
            this.animate();
        }
    }

    public componentDidMount(): void {
        if (this.props.isLocked) {
            return null;
        }

        this.animationDelay = global.setTimeout(this.animate, 500);
    }

    public render() {
        const { ctaLabel, heading, isLocked, onPressCta, onPressCtaSecondary } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                    {isLocked ? (
                        <Image source={assets.chestLocked} />
                    ) : (
                        <>
                            <Animated.Image
                                style={{
                                    opacity: this.confettiOpacity,
                                    transform: [
                                        {
                                            scale: this.confettiScale
                                        }
                                    ]
                                }}
                                resizeMode="contain"
                                source={assets.chestBackground}
                            />
                            <View style={styles.chestWrapper}>
                                <Animated.View
                                    style={StyleSheet.flatten([
                                        styles.lidWrapper,
                                        { transform: [{ translateY: this.lidYOffset }] }
                                    ] as ViewStyle)}
                                >
                                    <Image source={assets.chestLid} />
                                </Animated.View>
                                <Animated.View
                                    style={StyleSheet.flatten([
                                        styles.chestCoinWrapper,
                                        { transform: [{ translateY: this.coinYOffset }] }
                                    ] as ViewStyle)}
                                >
                                    <ChestCoin />
                                </Animated.View>
                                <View style={styles.chestBaseWrapper}>
                                    <Image source={assets.chestBase} />
                                </View>
                            </View>
                        </>
                    )}
                </View>
                <Text bold={true} style={styles.heading}>
                    {heading}
                </Text>
                <Button type={Button.Types.PRIMARY_MEDIUM} label={ctaLabel} onPress={onPressCta} />
                {onPressCtaSecondary && (
                    <Button
                        wrapperStyle={styles.secondaryCtaWrapper}
                        type={Button.Types.LINK}
                        onPress={onPressCtaSecondary}
                        label="later"
                    />
                )}
            </View>
        );
    }

    private animate = () => {
        const sequenceOne = Animated.spring(this.lidYOffset, {
            toValue: -60,
            useNativeDriver: true
        });
        const raiseCoin = Animated.spring(this.coinYOffset, {
            friction: 7,
            toValue: 24,
            useNativeDriver: true
        });

        const expandConfetti = Animated.spring(this.confettiScale, {
            toValue: 1,
            useNativeDriver: true
        });

        const showConfetti = Animated.spring(this.confettiOpacity, {
            toValue: 1,
            useNativeDriver: true
        });

        const sequenceTwo = Animated.parallel([raiseCoin, expandConfetti, showConfetti]);

        Animated.sequence([sequenceOne, sequenceTwo]).start();
    }
}
