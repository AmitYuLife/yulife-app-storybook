import { StyleSheet, View } from "react-native";
import { memo } from "react";
import { Image, TextTemplate } from "@atoms";
import { HeroCardFooter as HeroCardFooterProps } from "@utils/heroCards";
import { Style } from "@styles";

const HeroCardFooter = ({ left, right, fontColor }: HeroCardFooterProps) => {
  return (
    <View style={styles.footerWrapper}>
      {!left.icon && !left.text ? null : (
        <View style={styles.flexRow}>
          {!left.icon ? null : (
            <Image
              source={{ uri: left.icon }}
              width={Style.adjust(16)}
              tintColor={fontColor}
              suppressLoadingUi={true}
            />
          )}
          {!left.text ? null : (
            <TextTemplate type="l2b" color={fontColor}>
              {left.text}
            </TextTemplate>
          )}
        </View>
      )}
      {!right.icon && !right.text ? null : (
        <View style={styles.flexRow}>
          {!right.icon ? null : (
            <Image
              source={{ uri: right.icon }}
              width={Style.adjust(16)}
              tintColor={fontColor}
              suppressLoadingUi={true}
            />
          )}
          {!right.text ? null : (
            <TextTemplate type="l2b" color={fontColor}>
              {right.text}
            </TextTemplate>
          )}
        </View>
      )}
    </View>
  );
};

export default memo(HeroCardFooter);

const styles = StyleSheet.create({
  footerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingRight: Style.adjust(16),
    paddingBottom: Style.adjust(16),
    marginTop: Style.adjust(8),
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Style.adjust(4),
  },
});
