import { ImageSource } from "expo-image";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";

type ItemDetailsItemRewardProps = {
  image: ImageSource;
  label: string;
};

const ItemDetailsItemReward = ({ image, label }: ItemDetailsItemRewardProps) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default memo(ItemDetailsItemReward);

const ITEM_WIDTH = Style.DEVICE_WIDTH / 2 - Style.adjust(40);
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: ITEM_WIDTH,
    marginBottom: Style.adjust(15),
  },
  labelContainer: { paddingHorizontal: 10 },
});
