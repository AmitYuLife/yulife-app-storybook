import { memo, useMemo } from "react";
import moment from "moment";
import { t } from "@locale";
import { InboxMessageItem } from "@organisms";
import { parseJSON } from "@utils";

type Data = { category?: string; source?: string; onPress?: string };

const fallbackImage = require("@assets/notification/default_thumbnail.png");

interface IProps {
  onOpen: (messageId: string, data: Data) => void;
  item: {
    iconImageUrl?: string;
    messageId: string;
    deliveryTimestamp: string;
    title: string;
    subtitle: string;
    imageUrl?: string;
    data?: Data;
    isRead: boolean;
  };
}

const NotificationItem = ({ onOpen, item }: IProps) => {
  const date = useMemo(() => {
    const time = moment(item.deliveryTimestamp);
    if (time.isAfter(moment().startOf("day"))) {
      return time.format(t("format.time_short"));
    }

    return time.format(t("format.date_readable_short"));
  }, [item]);

  const onPress = useMemo(() => {
    if (item.data?.source === "api") {
      const { isValid } = parseJSON(item.data.onPress, ["type"]);

      if (!isValid) {
        return;
      }
    }

    return () => onOpen(item.messageId, item.data);
  }, [item, onOpen]);

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

  const messageItemProps = useMemo(() => {
    return {
      badgeSource: item.iconImageUrl ? { uri: item.iconImageUrl } : null,
      title: item.title,
      subtitle: item.subtitle,
      showNotificationDot: onPress && !item.isRead,
      category: item?.data?.category,
    };
  }, [item.iconImageUrl, item.title, item.subtitle, item.isRead, item.data?.category, onPress]);

  return <InboxMessageItem onPress={onPress} imageSource={imageSource} timestamp={date} {...messageItemProps} />;
};

export default memo(NotificationItem);
