import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { GetRewards_getRewards_uiSettings } from "../../../../graphql/_core/schema";
import { getCloudinaryUrl } from "../../../../services/cloudinary/index";
import { Text } from "../../../atoms";
import styles from "./locked-overlay.styles";

interface IProps {
    code: string;
    settings?: GetRewards_getRewards_uiSettings;
}

const LockedOverlay: SFC<IProps> = ({ code, settings }) => (
    <View style={styles.lockedContainer}>
        <View style={styles.lockedWhiteSpace}>
            <Image
                resizeMethod="resize"
                resizeMode="contain"
                style={{
                    height: (settings && settings.logoHeight) || 30,
                    width: (settings && settings.logoWidth) || 100
                }}
                source={getCloudinaryUrl({
                    transformation: [
                        {
                            effect: "grayscale"
                        },
                        {
                            effect: "replace_color:white"
                        }
                    ],
                    url: `reward/logo/${code}`
                })}
            />
            <Text bold={true} style={styles.voucherText}>
                locked
            </Text>
        </View>
    </View>
);

export default LockedOverlay;
