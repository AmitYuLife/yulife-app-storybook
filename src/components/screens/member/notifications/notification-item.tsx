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
    if (!item?.imageUrl) {
      return fallbackImage;
    }

    return { uri: item.imageUrl };
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
