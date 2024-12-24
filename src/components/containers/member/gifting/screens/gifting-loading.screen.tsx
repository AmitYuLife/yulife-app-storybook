import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Loading } from "@atoms";
import { GenericHeadingPad } from "@organisms";
import { Style } from "@styles";

const GiftingIntroScreen = () => {
  return (
    <View style={styles.screenWidth}>
      <GenericHeadingPad />
      <Box ph={16} flex={1} justifyContent="center" alignItems="center">
        <Loading />
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWidth: {
    width: Style.DEVICE_WIDTH,
  },
});

export default memo(GiftingIntroScreen);
