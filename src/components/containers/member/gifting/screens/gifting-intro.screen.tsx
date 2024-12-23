import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Image, TextTemplate } from "@atoms";
import { GenericHeadingPad } from "@organisms";
import { Style } from "@styles";
import { useTranslation } from "@hooks";

const IMAGE_SIZE = Style.adjust(240);

const GiftingIntroScreen = () => {
  const t = useTranslation(["screens.gifting.intro.title", "screens.gifting.intro.description"]);
  return (
    <View style={styles.screenWidth}>
      <GenericHeadingPad />
      <Box ph={16}>
        <Box justifyContent="center" alignItems="center">
          <Image
            source={require("@assets/gifting/p2p-intro-illustration.webp")}
            style={styles.image}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
        </Box>
        <Box mt={16}>
          <TextTemplate type="h2" textAlign="center">
            {t["screens.gifting.intro.title"]}
          </TextTemplate>
        </Box>
        <Box mt={16}>
          <TextTemplate type="b2" textAlign="center">
            {t["screens.gifting.intro.description"]}
          </TextTemplate>
        </Box>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWidth: {
    width: Style.DEVICE_WIDTH,
  },
  image: {
    height: Style.adjust(320),
    width: Style.adjust(320),
  },
});

export default memo(GiftingIntroScreen);
