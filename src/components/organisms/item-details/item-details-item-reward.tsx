import { ImageSource } from "expo-image";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Image, TextTemplate } from "@atoms";
import { Style } from "@styles";

type ItemDetailsItemRewardProps = {
  image: ImageSource;
  label: string;
};

const ItemDetailsItemReward = ({ image, label }: ItemDetailsItemRewardProps) => {
  return (
    <Box alignItems="center" width={"100%"} mb={15} px={ITEM_PADDING}>
      <Image
        source={image}
        resizeMode="contain"
        suppressLoadingUi={true}
        width={ITEM_WIDTH - Style.adjust(20)}
        height={ITEM_WIDTH - Style.adjust(20)}
      />
      <View style={styles.labelContainer}>
        <TextTemplate textAlign="center" type="b2b" numberOfLines={3}>
          {label}
        </TextTemplate>
      </View>
    </Box>
  );
};

export default memo(ItemDetailsItemReward);

const ITEM_PADDING = 20;
const ITEM_WIDTH = Style.DEVICE_WIDTH / 2 - Style.adjust(ITEM_PADDING * 2);
const styles = StyleSheet.create({
  labelContainer: { paddingHorizontal: 10 },
});
