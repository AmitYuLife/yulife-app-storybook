import { Box } from "@atoms";
import { Markdown } from "@components/molecules";
import { t } from "@locale";
import { Colours, Style, StyleSheet, templateTextMarkdownStyles } from "@styles";
import { memo } from "react";
import { Platform } from "react-native";

const PathwaysTitle = () => {
  return (
    <Box>
      <Markdown
        markdownStyles={markdownStyles}
        text={t("screens.pathways.powered_by_unity", { yunityUrl: require("../../assets/yunity.png") })}
      />
    </Box>
  );
};

export default memo(PathwaysTitle);

const markdownStyles = StyleSheet.create({
  paragraph: {
    paddingVertical: 0,
  },
  text: {
    ...templateTextMarkdownStyles.b2,
    color: Colours.neutral.white,
  },
  imageWrapper: {
    width: Style.adjust(43),
    height: Style.adjust(17),
  },
  image: {
    width: Style.adjust(43),
    height: Style.adjust(17),
    bottom: Style.adjust(
      Platform.select({
        ios: 2,
        android: -2,
      })
    ),
  },
});
