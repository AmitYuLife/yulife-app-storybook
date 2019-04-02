import * as React from "react";
import { SFC } from "react";
import { Blurb, Button, CentredScreen, CoinConfetti, Heading, Pad } from "../../../atoms";
import data from "./signup-reward.screen.data";
import styles from "./signup-reward.screen.styles";

interface IProps {
    isLoading: boolean;
    onCollectPress: () => void;
    reward: number;
}

const SignUpRewardScreen: SFC<IProps> = ({ isLoading, onCollectPress, reward }) => (
    <CentredScreen footerImage="forest">
        <Pad height={74} />
        <CoinConfetti coins={reward} />
        <Heading style={styles.heading} label={data.heading} />
        <Pad height={10} />
        <Blurb wrapperStyle={styles.blurbWrapper} label={data.blurb} />
        <Pad height={26} />
        <Button
            type={Button.Types.PRIMARY_SMALL}
            label={data.buttonLabel}
            onPress={onCollectPress}
            isLoading={isLoading}
            disabled={isLoading}
        />
    </CentredScreen>
);

export default SignUpRewardScreen;
