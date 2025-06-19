import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Image, TextTemplate } from "@atoms";
import { GenericHeadingPad } from "@organisms";
import { Style } from "@styles";
import { useTranslation } from "@hooks";

const IMAGE_SIZE = Style.adjust(240);

const GiftingLimitReachedScreen = () => {
  const t = useTranslation(["screens.gifting.limit_reached.title", "screens.gifting.limit_reached.description"]);
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <View style={styles.screenWidth}>
        <GenericHeadingPad />
        <Box ph={16}>
          <Box justifyContent="center" alignItems="center">
            <Image
              source={require("@assets/gifting/sending-limit-illustration.webp")}
              style={styles.image}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
            />
          </Box>
          <Box mt={16}>
            <TextTemplate type="h2" textAlign="center">
              {t["screens.gifting.limit_reached.title"]}
            </TextTemplate>
          </Box>
          <Box mt={16}>
            <TextTemplate type="b2" textAlign="center">
              {t["screens.gifting.limit_reached.description"]}
            </TextTemplate>
          </Box>
        </Box>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWidth: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
  image: {
    height: Style.adjust(320),
    width: Style.adjust(320),
  },
});

export default memo(GiftingLimitReachedScreen);
