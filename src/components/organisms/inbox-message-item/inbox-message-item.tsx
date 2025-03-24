import { memo, useCallback, useState } from "react";
import { ImageSource } from "expo-image";
import { Box, TextTemplate, Image } from "@atoms";
import { ArrowButton, Pressable } from "@components/molecules";
import { Colours, Style } from "@styles";
import { VoidFunction } from "@utils";
import { INBOX_MESSAGE_ITEM, NOTIFICATION_PINK_DOT_ARROW, PINK_DOT } from "@ids";

type Props = {
  onPress?: VoidFunction;
  imageSource: ImageSource;
  badgeSource: ImageSource | null;
  title: string;
  subtitle: string;
  timestamp: string;
  category?: string;
  showNotificationDot: boolean;
};

const FALLBACK_IMAGE = require("@assets/notification/default_thumbnail.png");

const InboxMessageItem = ({
  onPress,
  imageSource,
  badgeSource,
  title,
  subtitle,
  timestamp,
  showNotificationDot,
  category,
}: Props) => {
  const [hasFailedToLoadImage, setHasFailedToLoadImage] = useState(false);

  const onError = useCallback(() => {
    setHasFailedToLoadImage(true);
  }, []);

  return (
    <Pressable onPress={onPress}>
      <Box flexDirection="row" overflow="hidden" justifyContent="center" alignItems="center" mh={16}>
        <Box br={8} overflow="hidden" size={64} justifyContent="center">
          <Box
            bg={Colours.metallic.m100}
            w={badgeSource ? 56 : 64}
            mr={badgeSource ? "auto" : 0}
            mt={badgeSource ? "auto" : 0}
            rounded={!!badgeSource}
            overflow="hidden"
          >
            <Image
              onError={onError}
              source={hasFailedToLoadImage ? FALLBACK_IMAGE : imageSource}
              width={Style.adjust(badgeSource ? 56 : 64)}
            />
          </Box>
          {badgeSource ? (
            <Box
              position="absolute"
              bg={Colours.metallic.m100}
              top={0}
              right={0}
              rounded={true}
              overflow="hidden"
              borderWidth={2}
              borderColor={Colours.neutral.white}
              w={24}
              h={24}
              justifyContent="center"
              alignItems="center"
            >
              <Image source={badgeSource} width={16} />
            </Box>
          ) : null}
        </Box>
        <Box
          overflow="hidden"
          ph={16}
          pt={8}
          flex={1}
          height={78}
          gap={4}
          justifyContent="center"
          testID={INBOX_MESSAGE_ITEM(title)}
        >
          <TextTemplate
            type="l1b"
            numberOfLines={1}
            color={Colours.neutral.n900}
            testID={NOTIFICATION_PINK_DOT_ARROW(title, showNotificationDot, !!onPress)}
          >
            {title}
          </TextTemplate>
          <TextTemplate type="l2" numberOfLines={2} color={Colours.neutral.n850}>
            {subtitle}
          </TextTemplate>
          <TextTemplate type="l2" numberOfLines={1} color={Colours.inkSubtle}>
            {timestamp} {category ? `• ${category}` : ""}
          </TextTemplate>
        </Box>
        <Box h="100%" justifyContent="center" alignItems="center" flexDirection="row">
          {showNotificationDot ? (
            <Box rounded={true} mr={4} h={8} w={8} bg={Colours.primary.p600} testID={PINK_DOT} />
          ) : null}
          {onPress ? <ArrowButton color={Colours.primary.p600} /> : null}
        </Box>
      </Box>
    </Pressable>
  );
};

export default memo(InboxMessageItem);
