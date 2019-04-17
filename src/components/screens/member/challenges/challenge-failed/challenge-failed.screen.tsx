import { IThemeStore } from "@app/redux/theme/theme.reducer";
import { Button, CentredScreen, Stars, Text } from "@atoms/index";
import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Assets from "./assets";
import data from "./challenge-failed.screen.data";
import styles from "./challenge-failed.screen.styles";

interface IProps {
    level?: number;
    onPress: () => void;
    theme: IThemeStore["challengeFailedScreen"];
}

export default function ChallengeFailedScreen({
    level,
    onPress,
    theme: { backgroundImage, backgroundStyle, footerStyle }
}: IProps) {
    return (
        <CentredScreen
            style={StyleSheet.flatten([styles.wrapper, backgroundStyle]) as any}
            footerImage={backgroundImage}
        >
            <Stars />
            <View style={styles.levelWrapper}>
                <Image source={Assets.levelLine} />
                <Text style={styles.level}>{`level ${level}`}</Text>
            </View>
            <Text bold={true} style={styles.heading}>
                {data.heading}
            </Text>
            <Image style={styles.face} source={Assets.face} />
            <Text style={StyleSheet.flatten([styles.footer, footerStyle])}>{data.footer}</Text>
            <Button onPress={onPress} label={data.cta} type={Button.Types.PRIMARY_GREYSCALE_SMALL} />
        </CentredScreen>
    );
}
