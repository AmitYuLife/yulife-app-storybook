import { View } from "react-native";
import { memo } from "react";
import { Colours, Style, StyleSheet } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { HeroCardBadge as HeroCardBadgeProps } from "@utils/heroCards";
import { HERO_CARD_BADGE } from "@ids";

export const HERO_CARD_BADGE_HEIGHT = Style.adjust(24);

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
    height: HERO_CARD_BADGE_HEIGHT,
    paddingVertical: 4, // purposefully avoiding Style.adjust, as this helps with pixel-perfect positioning on Android
    paddingHorizontal: Style.adjust(10),
    borderRadius: HERO_CARD_BADGE_HEIGHT / 2,
    top: -HERO_CARD_BADGE_HEIGHT / 2,
    start: HERO_CARD_BADGE_HEIGHT / 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: Style.adjust(4),
    backgroundColor: Colours.status.er300,
  },
});
