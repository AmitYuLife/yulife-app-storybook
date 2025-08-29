import { memo } from "react";
import { View } from "react-native";
import { Box, Image, TextTemplate } from "@atoms";
import { GenericHeadingPad } from "@organisms";
import { Style, StyleSheet } from "@styles";
import { t } from "@locale";

const IMAGE_SIZE = Style.adjust(286);

type Props = {
  selectedUsersCount: number;
};

const GiftingSuccessScreen = ({ selectedUsersCount }: Props) => (
  <View style={styles.screenWidth}>
    <GenericHeadingPad />
    <Box ph={16}>
      <Box justifyContent="center" alignItems="center">
        <Image
          source={require("@assets/gifting/success-illustration.webp")}
          style={styles.image}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
      </Box>
      <Box mt={-16}>
        <TextTemplate type="h2" textAlign="center">
          {t("screens.gifting.success.title", { smart_count: selectedUsersCount })}
        </TextTemplate>
      </Box>
      <Box mt={16}>
        <TextTemplate type="b2" textAlign="center">
          {t("screens.gifting.success.description", { smart_count: selectedUsersCount })}
        </TextTemplate>
      </Box>
    </Box>
  </View>
);

const styles = StyleSheet.create({
  screenWidth: {
    width: Style.DEVICE_WIDTH,
  },
  image: {
    height: Style.adjust(320),
    width: Style.adjust(320),
  },
});

export default memo(GiftingSuccessScreen);
