import { ImageSource } from "expo-image";
import { memo } from "react";
import { View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";

type ItemDetailsItemProps = {
  icon: ImageSource;
  label: string;
};

const ItemDetailsItem = ({ icon, label }: ItemDetailsItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={styles.icon}
        suppressLoadingUi={true}
        width={Style.adjust(22)}
        height={Style.adjust(22)}
      />
      <View style={styles.labelContainer} accessibilityLabel={label} accessible={true}>
        <TextTemplate type="b2">{label}</TextTemplate>
      </View>
    </View>
  );
};

export default memo(ItemDetailsItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: Style.adjust(10),
    justifyContent: "center",
    gap: Style.adjust(20),
    paddingBottom: Style.adjust(15),
  },
  icon: {
    marginTop: Style.adjust(2),
  },
  labelContainer: {
    flex: 1,
  },
});
