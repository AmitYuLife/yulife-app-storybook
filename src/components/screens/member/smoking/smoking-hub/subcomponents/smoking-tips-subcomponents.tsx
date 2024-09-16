import { Image, TextTemplate } from "@atoms";
import { HealthSmokingStateTip } from "@redux/health-smoking/health-smoking.types";
import { View } from "react-native";
import { smokingTipsStyles } from "./smoking-tips.styles";
import { Style } from "@styles";

export const renderItem = ({ item }: { item: HealthSmokingStateTip }) => {
  if (!item) {
    return null;
  }

  const { id, title, description, icon } = item;

  return (
    <View key={id} style={smokingTipsStyles.card}>
      {!icon ? null : <Image source={icon} width={Style.adjust(48)} height={Style.adjust(48)} />}
      <View style={smokingTipsStyles.textWrapper} testID={id}>
        {!title ? null : <TextTemplate type="l1b">{title}</TextTemplate>}
        {!description ? null : <TextTemplate type="l1">{description}</TextTemplate>}
      </View>
    </View>
  );
};

export const Separator = () => <View style={smokingTipsStyles.separator} />;
