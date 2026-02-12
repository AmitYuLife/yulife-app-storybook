import { Box, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Colours, Style } from "@styles";
import { memo } from "react";
import { Image } from "react-native";

const PathwaysTitle = () => {
  return (
    <Box flexDirection="row" alignItems="center">
      <TextTemplate type="b2" color={Colours.neutral.white}>
        {t("screens.pathways.powered_by_yunity")}
      </TextTemplate>
      <Box mt={-1}>
        <Image source={require("../../assets/yunity.png")} style={styles.image} />
      </Box>
    </Box>
  );
};

export default memo(PathwaysTitle);

const styles = {
  image: {
    width: Style.adjust(43),
    height: Style.adjust(17),
  },
};
