import { ImageSource } from "expo-image";
import { memo } from "react";
import YumojiRewardPickerItem from "./yumoji-reward-picker-item";
import { StyleSheet, View } from "react-native";

interface IYumojiRewardPickerProps {
  activeItem: string;
  onPress: (item: string) => void;
  items: {
    id: string;
    image: ImageSource;
  }[];
}

const YumojiRewardPicker = ({ items, activeItem, onPress }: IYumojiRewardPickerProps) => {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <YumojiRewardPickerItem
          key={item.id}
          image={item.image}
          noneSelected={!activeItem}
          onPress={() => onPress(item.id)}
          isActive={item.id === activeItem}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default memo(YumojiRewardPicker);
