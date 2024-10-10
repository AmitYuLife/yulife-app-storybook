import { Box, TextTemplate } from "@atoms";
import { CalendarBicolorIcon } from "@atoms/icon/calendar-bicolor";
import { Style, Colours } from "@styles";
import { memo } from "react";
import { Image } from "@atoms";

type Props = {
  title?: string;
  description?: string;
  startDateCopy?: string;
  heroImage?: {
    uri?: string;
  };
};

export const FutureGame = memo(({ title, description, startDateCopy, heroImage }: Props) => (
  <Box mt={24} ml={16} mr={16} br={8} bg="#0D59A5" p={16} overflow="hidden">
    <Box position="absolute" right={0} top={0} bottom={0}>
      <Image source={heroImage} width={148} />
    </Box>
    <Box w={(Style.DEVICE_WIDTH - 48) / 2}>
      {!title ? null : (
        <TextTemplate color={Colours.neutral.white} type="b2b">
          {title}
        </TextTemplate>
      )}
      {!description ? null : (
        <Box mt={4}>
          <TextTemplate color={Colours.neutral.white} type="l2">
            {description}
          </TextTemplate>
        </Box>
      )}
      {!startDateCopy ? null : (
        <Box pt={4} pl={6} pb={4} pr={16} mt={16} bg={Colours.neutral.white} br={4} flexDirection="row">
          <CalendarBicolorIcon />
          <Box ml={8} justifyContent="center" alignItems="center">
            <TextTemplate type="l2b">{startDateCopy}</TextTemplate>
          </Box>
        </Box>
      )}
    </Box>
  </Box>
));
