import React, { useContext, FC, useCallback, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TouchableOpacityWithDelay, Yumoji } from "@components/molecules";
import { Style } from "@styles";
import { YuScreenContext } from "../../context/yu-screen.context";
import { navigateToYumojiBuilder } from "../../navigation/navigateToYumojiBuilder";
import { YuCoinPower } from "../yu-coin-power/yu-coin-power";

export const AvatarAndEquipment = memo(() => {
  const { yumojiRemoteUrl } = useContext(YuScreenContext);

  return (
    <View style={styles.wrapper}>
      <YumojiAvatar uri={yumojiRemoteUrl} />
      <EquipmentWrapper>
        <YuCoinPower />
      </EquipmentWrapper>
    </View>
  );
});

const EquipmentWrapper: FC = ({ children }) => <View style={styles.equipmentWrapper}>{children}</View>;

const AVATAR_HEIGHT_TO_WIDTH_RATIO = 328 / 160;
const AVATAR_WIDTH = Style.DEVICE_WIDTH / 2;
const AVATAR_HEIGHT = AVATAR_WIDTH * AVATAR_HEIGHT_TO_WIDTH_RATIO;

const YumojiAvatar = ({ uri }: { uri: string }) => {
  const editYumoji = useCallback(() => navigateToYumojiBuilder({ heading: "Edit your Yumoji" }), []);

  if (!uri) {
    return null;
  }

  return (
    <TouchableOpacityWithDelay onPress={editYumoji} style={styles.avatarWrapper}>
      <Yumoji width={AVATAR_WIDTH} height={AVATAR_HEIGHT} testID="YUMOJI_EQUIPMENT" uri={uri} />
    </TouchableOpacityWithDelay>
  );
};

const AVATAR_MARGIN_TOP = Style.adjust(28);
const ALLOWANCE = Style.adjust(8);
const TOTAL_HEIGHT = AVATAR_HEIGHT + AVATAR_MARGIN_TOP + ALLOWANCE;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    height: TOTAL_HEIGHT,
  } as ViewStyle,
  avatarWrapper: {
    position: "absolute",
    top: AVATAR_MARGIN_TOP,
    left: Style.adjust(8),
    width: Style.DEVICE_WIDTH / 2.1,
    alignItems: "center",
  } as ViewStyle,
  equipmentWrapper: {
    width: Style.DEVICE_WIDTH / 1.9,
    marginLeft: "auto",
    marginRight: Style.adjust(16),
    marginTop: Style.adjust(32),
  } as ViewStyle,
});
