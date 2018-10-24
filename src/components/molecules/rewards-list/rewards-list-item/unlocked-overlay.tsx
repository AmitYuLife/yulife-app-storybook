import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { GetRewards_getRewards_uiSettings } from "../../../../graphql/_core/schema";
import { getCloudinaryUrl } from "../../../../services/cloudinary/index";
import { Text } from "../../../atoms";
import { renderExchange, renderLinkType, renderValue } from "./unlocked-overlay.helpers";
import styles from "./unlocked-overlay.styles";

interface IProps {
    code: string;
    cost: number;
    linkType?: string;
    rewardCurrency: string;
    rewardValue: number;
    settings?: GetRewards_getRewards_uiSettings;
}

const UnlockedOverlay: SFC<IProps> = ({ code, cost, linkType, rewardCurrency, rewardValue, settings }) => (
    <View style={styles.unlockedContainer}>
        <Image
            resizeMethod="resize"
            resizeMode="contain"
            style={{
                height: (settings && settings.logoHeight) || 30,
                width: (settings && settings.logoWidth) || 100
            }}
            source={getCloudinaryUrl({
                url: `reward/logo/${code}`
            })}
        />
        <Text bold={true} style={styles.voucherText}>
            {rewardCurrency === "LINK" ? renderLinkType(linkType) : renderValue(rewardValue, rewardCurrency)}
        </Text>
        <Text style={styles.costText}>{renderExchange(cost, rewardCurrency)}</Text>
    </View>
);

export default UnlockedOverlay;
