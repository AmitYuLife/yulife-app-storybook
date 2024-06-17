import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { Colours, Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { HeroCardBadge as HeroCardBadgeProps } from "@utils/heroCards";
import { HERO_CARD_BADGE } from "@ids";

const HeroCardBadge = ({ text, icon }: HeroCardBadgeProps) => {
  if (!icon && !text) {
    return null;
  }

  return (
    <View style={styles.label} testID={HERO_CARD_BADGE(text)}>
      {!icon ? null : <Image source={{ uri: icon }} width={Style.adjust(16)} />}
      <TextTemplate type="l1b" color={Colours.neutral.white}>
        {text}
      </TextTemplate>
    </View>
  );
};

export default memo(HeroCardBadge);

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    height: Style.adjust(24),
    paddingVertical: Style.adjust(4),
    paddingHorizontal: Style.adjust(10),
    borderRadius: Style.adjust(12),
    top: Style.adjust(-12),
    left: Style.adjust(12),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: Style.adjust(4),
    backgroundColor: Colours.status.er300,
  },
});
