import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { ImageSource } from "expo-image";
import { memo } from "react";
import { StyleSheet, View } from "react-native";

interface IBattlePassRewardExplanationItemProps {
  icon: ImageSource;
  label: string;
}

const BattlePassRewardExplanationItem = ({ icon, label }: IBattlePassRewardExplanationItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={styles.icon}
        suppressLoadingUi={true}
        width={Style.adjust(22)}
        height={Style.adjust(22)}
      />
      <View style={styles.labelContainer}>
        <TextTemplate type="b2">{label} </TextTemplate>
      </View>
    </View>
  );
};

export default memo(BattlePassRewardExplanationItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: Style.adjust(10),
    justifyContent: "center",
    gap: Style.adjust(20),
    paddingBottom: Style.adjust(8),
  },
  icon: {
    marginTop: Style.adjust(2),
  },
  labelContainer: {
    flex: 1,
  },
});
