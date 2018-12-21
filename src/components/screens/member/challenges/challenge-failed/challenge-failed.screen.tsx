import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, CentredScreen, Stars, Text } from "../../../../atoms";
import Assets from "./assets";
import data from "./challenge-failed.screen.data";
import styles from "./challenge-failed.screen.styles";

interface IProps {
    level?: number;
    onPress: () => void;
}

const ChallengeFailedScreen: SFC<IProps> = ({ level, onPress }) => {
    const style = getStyle(level);

    return (
        <CentredScreen style={styles.wrapper} footerImage={style.backgroundImage}>
            <Stars />
            <View style={styles.levelWrapper}>
                <Image source={Assets.levelLine} />
                <Text style={styles.level}>{`level ${level}`}</Text>
            </View>
            <Text bold={true} style={styles.heading}>
                {data.heading}
            </Text>
            <Image style={styles.face} source={Assets.face} />
            <Text style={StyleSheet.flatten([styles.footer, style.footerStyle])}>{data.footer}</Text>
            <Button onPress={onPress} label={data.cta} type={Button.Types.PRIMARY_GREYSCALE_SMALL} />
        </CentredScreen>
    );
};

export default ChallengeFailedScreen;

const getStyle = (level: number): any => {
    const world = Math.floor(level / 50);
    switch (world) {
        case 1:
            return { backgroundImage: "challenge_failed_ocean", footerStyle: styles.footerWhite };
        case 0:
        default:
            return { backgroundImage: "challenge_failed_forest", footerStyle: styles.footerGray };
    }
};
