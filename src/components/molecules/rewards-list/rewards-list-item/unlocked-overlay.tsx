import * as React from "react";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { GetRewards_getRewards_uiSettings } from "../../../../graphql/_core/schema";
import { getCloudinaryUrl } from "../../../../services/cloudinary/index";
import { Text } from "../../../atoms";
import { renderExchange, renderValue } from "./unlocked-overlay.helpers";
import styles from "./unlocked-overlay.styles";

interface IProps {
    code: string;
    cost: number;
    linkType?: string;
    rewardCurrency: string;
    rewardValue: number;
    settings?: GetRewards_getRewards_uiSettings;
}

export default function UnlockedOverlay({ code, cost, linkType, rewardCurrency, rewardValue, settings }: IProps) {
    const height = (settings && settings.logoHeight) || 30;
    const width = (settings && settings.logoWidth) || 100;

    return (
        <View style={styles.unlockedContainer}>
            <FastImage
                resizeMode="contain"
                style={{ height, width }}
                source={getCloudinaryUrl(`reward/logo/${code}`, {
                    height,
                    width
                })}
            />
            <Text bold={true} style={styles.voucherText}>
                {settings && settings.offerHeading
                    ? settings.offerHeading
                    : renderValue(rewardValue, rewardCurrency, linkType)}
            </Text>
            <Text style={styles.costText}>
                {settings && settings.offerSubheading ? settings.offerSubheading : renderExchange(cost, rewardCurrency)}
            </Text>
        </View>
    );
}
