import * as React from "react";
import { SFC } from "react";
import { Image } from "react-native";
import { Button, CentredScreen, Stars, Text } from "../../../../../atoms";
import Assets from "./assets";
import data from "./challenge-failed.data";
import styles from "./challenge-failed.styles";

interface IProps {
    onPress: () => void;
}

const ChallengeFailedScreen: SFC<IProps> = ({ onPress }) => (
    <CentredScreen style={styles.wrapper} footerImage={CentredScreen.FooterImages.MOUNTAINS}>
        <Stars />
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
