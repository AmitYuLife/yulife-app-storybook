import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Loading } from "@atoms";
import { GenericHeadingPad } from "@organisms";
import { Style } from "@styles";

const GiftingLoadingScreen = () => {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <View style={styles.screenWidth}>
        <GenericHeadingPad />
        <Box ph={16} flex={1} justifyContent="center" alignItems="center">
          <Loading />
        </Box>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWidth: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
  },
});

export default memo(GiftingLoadingScreen);
