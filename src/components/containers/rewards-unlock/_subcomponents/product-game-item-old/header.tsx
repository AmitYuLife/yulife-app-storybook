import { Box, TextTemplate } from "@atoms";
import { ContentItemWrapper } from "@components/sdui";
import { Colours, Style, StyleSheet } from "@styles";
import { ComponentProps, memo } from "react";
import { Image } from "react-native";

type Props = {
  icon?: {
    uri?: string;
  };
  info?: ComponentProps<typeof ContentItemWrapper>;
  title: string;
};

export const Header = memo(({ icon, info, title }: Props) => (
  <Box pl={16} pr={16} flexDirection="row">
    {!icon?.uri ? null : (
      <Box overflow="hidden" br={56}>
        <Image source={icon} width={56} style={styles.icon} />
      </Box>
    )}
    <Box pt={4} pb={4} pl={8} pr={8} maxWidth={Style.DEVICE_WIDTH - Style.adjust(120)}>
      <TextTemplate numberOfLines={1} type="b1b" color={Colours.neutral.n900}>
        {title}
      </TextTemplate>
      {!info ? null : <ContentItemWrapper {...info} />}
    </Box>
  </Box>
));

const styles = StyleSheet.create({
  icon: {
    borderRadius: Style.adjust(56),
    height: Style.adjust(56),
    width: Style.adjust(56),
  },
});
