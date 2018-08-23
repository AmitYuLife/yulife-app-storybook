import * as React from "react";
import { SFC } from "react";
import { Platform, StyleSheet, View } from "react-native";
import {
    Button,
    CentredScreen,
    CoinConfetti,
    Heading,
    Pad,
} from "../../atoms";
import styles from "./collect-reward.modal.styles";

interface IProps {
    date?: string;
    onPress: () => void;
}

const CollectReward: SFC<IProps> = ({ onPress, date }) => (
    <View style={StyleSheet.absoluteFill}>
        <CentredScreen style={styles.centredScreen}>
            <CoinConfetti isExpanded={true} coins={1} />
            <Pad height={8} />
            <View style={styles.dateWrapper}>
                {!date ? null : (
                    <Heading
                        size={Heading.Sizes.SMALL}
                        bold={true}
                        label={date}
                    />
                )}
            </View>
            <Pad height={14} />
            <Button
                type={Button.Types.PRIMARY_SMALL}
                label={"collect"}
                onPress={onPress}
            />
            <Pad
                height={Platform.OS === "ios" ? 100 : 50}
            />
        </CentredScreen>
    </View>
);

export default CollectReward;
