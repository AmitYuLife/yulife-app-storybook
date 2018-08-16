import * as React from "react";
import { View, Image } from "react-native";
import { Text } from "../../../atoms";
import styles from "./locked-overlay.styles";
import { getCloudinaryUrl } from "../../../../services/cloudinary/index";
import { GetRewards_getRewards_uiSettings } from "../../../../graphql/_core/schema";

interface IProps {
    code: string;
    settings: GetRewards_getRewards_uiSettings;
}

const LockedOverlay: React.SFC<IProps> = ({ code, settings }) => (
    <View style={styles.lockedContainer}>
        <View style={styles.lockedWhiteSpace}>
            <Image
                resizeMethod="resize"
                resizeMode="contain"
                style={{
                    height: (settings && settings.logoHeight) || 30,
                    width: (settings && settings.logoWidth) || 100,
                }}
                source={getCloudinaryUrl({
                    url: `reward/logo/${code}`,
                    transformation: [
                        {
                            effect: "grayscale",
                        },
                        {
                            effect: "replace_color:white",
                        },
                    ],
                })}
            />
            <Text bold={true} style={styles.voucherText}>
                locked
            </Text>
        </View>
    </View>
);

export default LockedOverlay;
