import { Button, CentredScreen, Stars, Text } from "@atoms/index";
import { getCurrentWorld } from "@services/utils";
import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { GetMobileCopy_getMobileCopy_screens_challenges_failed } from "../../../../../graphql/_core/schema";
import Assets from "./assets";
import styles from "./challenge-failed.screen.styles";

interface IProps {
    level?: number;
    onPress: () => void;
    copy: GetMobileCopy_getMobileCopy_screens_challenges_failed;
}

export default function ChallengeFailedScreen({ level, onPress, copy }: IProps) {
    const { backgroundImage, backgroundStyle, footerStyle, buttonType, starType } = getStyle(level);

    return (
        <CentredScreen
            style={StyleSheet.flatten([styles.wrapper, backgroundStyle]) as any}
            footerImage={backgroundImage}
        >
            <Stars type={starType} />
            <View style={styles.levelWrapper}>
                <Image source={Assets.levelLine} />
                <Text style={styles.level}>{`level ${level}`}</Text>
            </View>
            <Text bold={true} style={styles.heading}>
                {copy.heading}
            </Text>
            <Image style={styles.face} source={Assets.face} />
            <Text style={StyleSheet.flatten([styles.footer, footerStyle])}>{copy.footer}</Text>
            <Button onPress={onPress} label={copy.ctaLabel} type={buttonType} />
        </CentredScreen>
    );
}

function getStyle(currentLevel: number): any {
    switch (getCurrentWorld(currentLevel)) {
        case 3:
            return {
                backgroundImage: "challenge_mountain",
                backgroundStyle: { backgroundColor: "rgb(255, 226, 230)" },
                buttonType: Button.Types.PRIMARY_SMALL,
                footerStyle: styles.footerGray,
                starType: "mountain"
            };
        case 2:
            return {
                backgroundImage: "challenge_failed_desert",
                backgroundStyle: { backgroundColor: "#fffbcd" },
                buttonType: Button.Types.PRIMARY_GREYSCALE_SMALL,
                footerStyle: styles.footerGray,
                starType: null
            };
        case 1:
            return {
                backgroundImage: "challenge_failed_ocean",
                backgroundStyle: null,
                buttonType: Button.Types.PRIMARY_GREYSCALE_SMALL,
                footerStyle: styles.footerWhite,
                starType: null
            };
        case 0:
        default:
            return {
                backgroundImage: "challenge_failed_forest",
                backgroundStyle: null,
                buttonType: Button.Types.PRIMARY_GREYSCALE_SMALL,
                footerStyle: styles.footerGray,
                starType: null
            };
    }
}
