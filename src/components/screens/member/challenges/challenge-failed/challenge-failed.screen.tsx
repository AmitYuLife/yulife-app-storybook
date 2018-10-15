import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { Button, CentredScreen, Stars, Text } from "../../../../atoms";
import Assets from "./assets";
import data from "./challenge-failed.screen.data";
import styles from "./challenge-failed.screen.styles";

interface IProps {
    level?: number;
    onPress: () => void;
}

const ChallengeFailedScreen: SFC<IProps> = ({ level, onPress }) => (
    <CentredScreen style={styles.wrapper} footerImage={CentredScreen.FooterImages.MOUNTAINS}>
        <Stars />
        <View style={styles.levelWrapper}>
            <Image source={Assets.levelLine} />
            <Text style={styles.level}>
                {`level ${level}`}
            </Text>
        </View>
        <Text bold={true} style={styles.heading}>{data.heading}</Text>
        <Image style={styles.face} source={Assets.face} />
        <Text style={styles.footer}>{data.footer}</Text>
        <Button
            onPress={onPress}
            label={data.cta}
            type={Button.Types.PRIMARY_GREYSCALE_SMALL}
        />
    </CentredScreen>
);

export default ChallengeFailedScreen;
