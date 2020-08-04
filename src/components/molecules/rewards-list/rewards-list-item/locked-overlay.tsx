import { Text } from "@atoms/index";
import { GetRewards_getRewards_uiSettings } from "@graphql/_core/schema";
import { getCloudinaryUrl } from "@services/cloudinary/index";
import * as React from "react";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./locked-overlay.styles";
import { LOCKED_REWARD_ITEM } from "@ids";

interface IProps {
  code: string;
  settings?: GetRewards_getRewards_uiSettings;
  testID?: string;
}

export default function LockedOverlay({ code, settings }: IProps) {
  const height = (settings && settings.logoHeight) || 30;
  const width = (settings && settings.logoWidth) || 100;
  return (
    <View style={styles.lockedContainer}>
      <View style={styles.lockedWhiteSpace}>
        <FastImage
          resizeMode="contain"
          style={{ height, width }}
          source={getCloudinaryUrl(`reward/logo/${code}`, {
            height,
            transformation: [{ effect: "grayscale" }, { effect: "replace_color:white" }],
            width,
          })}
        />
        <Text bold={true} style={styles.voucherText} testID={LOCKED_REWARD_ITEM(code)}>
          locked
        </Text>
      </View>
    </View>
  );
}
