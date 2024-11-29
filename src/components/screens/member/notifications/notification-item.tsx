import { TextTemplate } from "@atoms";
import { BoxOption } from "@components/molecules";
import { ArrowButton } from "@components/molecules/arrow-button";
import { Message } from "@leanplum/react-native-sdk";
import { Colours, Style } from "@styles";
import moment from "moment";
import React, { memo, useCallback, useMemo, useState } from "react";
// eslint-disable-next-line no-restricted-imports
import { Image, StyleSheet, Text, View } from "react-native";
import { useNotifications } from "@hooks";
import { t } from "@locale";

const fallbackImage = require("@assets/notification/default_thumbnail.png");

interface IProps {
  onOpen: ReturnType<typeof useNotifications>["onOpen"];
  item: Message;
}

const NotificationItem = ({ onOpen, item }: IProps) => {
  const [hasFailedToLoadImage, setHasFailedToLoadImage] = useState<boolean>(false);

  const date = useMemo(() => {
    const time = moment(item.deliveryTimestamp);
    if (time.isAfter(moment().startOf("day"))) {
      return time.format(t("format.time_short"));
    }

    return time.format(t("format.date_readable_short"));
  }, [item]);

  const onPress = useCallback(() => {
    onOpen(item.messageId, item.data);
  }, [item, onOpen]);

  const onError = useCallback(() => {
    setHasFailedToLoadImage(true);
  }, []);

  const imageSource = useMemo(() => {
    const schema = "https:/";
    const url = item?.imageUrl;

    if (!url) {
      return fallbackImage;
    }

    /**
     * Sometimes leanplum returns a bad url like this:
     * file:///Users/person/Library/Developer/CoreSimulator/Devices/7D3E5EF5-BB53-4F92-A685-22EE5DFC86DE/data/Containers/Data/Application/5FB682F4-7BF5-4329-969A-75E694CA3F2B/Library/Caches/Leanplum_Resources/https:/assets.prod.leanplum.com/app_P6T8dYxx6FJk8eaiuFu3ybbWFUpFE143saI79E94ATs/RHluby1NYXItV0MtMDMtTm90aWZpY2F0aW9uLUFzc2V0XzY0eDY0LnBuZw==
     * We want to try and extract the real url from this string
     *
     * Note: The url schema from leanplum is missing a slash, so we need to add it
     */
    if (!url.startsWith(schema)) {
      const [_, splitUrl] = url.split(schema);

      return splitUrl ? { uri: `${schema}/${splitUrl}` } : fallbackImage;
    }

    return { uri: url };
  }, [item]);

  return (
    <BoxOption isSelected={false} onPress={onPress} innerWrapperStyle={styles.wrapper} innerHeight={Style.adjust(110)}>
      <>
        <Image onError={onError} source={hasFailedToLoadImage ? fallbackImage : imageSource} style={styles.image} />
        <View style={styles.contentWrapper}>
          <Text>{item.title}</Text>
          <TextTemplate type="l1" numberOfLines={1}>
            {item.subtitle}
          </TextTemplate>
          <TextTemplate type="l1">
            {date} {item?.data?.category ? `• ${item?.data.category}` : ""}
          </TextTemplate>
        </View>
        <ArrowButton color={Colours.primary.p600} />
      </>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: Style.adjust(12),
    alignItems: "center",
    overflow: "hidden",
  },
  contentWrapper: {
    overflow: "hidden",
    paddingHorizontal: Style.adjust(14),
    flex: 1,
    height: Style.adjust(70),
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: Style.adjust(70),
    height: Style.adjust(70),
    borderRadius: Style.adjust(10),
  },
});

export default memo(NotificationItem);
