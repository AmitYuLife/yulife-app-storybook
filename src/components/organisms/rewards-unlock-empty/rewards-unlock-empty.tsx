import { Box, TextTemplate, Image } from "@atoms";
import { memo } from "react";
import { NAV_BAR, Style, StyleSheet } from "@styles";
import { View } from "react-native";
import { t } from "@locale";

const RewardsUnlockEmpty = () => {
  return (
    <View style={styles.container}>
      <Box style={styles.contentContainer} gap={40}>
        <Box justifyContent="center" alignItems="center" gap={16}>
          <TextTemplate color="white" textAlign="center" type="h3">
            {t("screens.rewards_unlock.empty.heading")}
          </TextTemplate>
          <TextTemplate type="b2" color="white" textAlign="center">
            {t("screens.rewards_unlock.empty.description")}
          </TextTemplate>
        </Box>
      </Box>
      <Box justifyContent="center" alignItems="center" py={32}>
        <Image source={require("./assets/unlock-empty-state-asset.png")} width={Style.DEVICE_WIDTH} />
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: NAV_BAR.HEIGHT,
  },
  contentContainer: { paddingHorizontal: Style.adjust(20) },
});

export default memo(RewardsUnlockEmpty);
