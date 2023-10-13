import { TextTemplate } from "@atoms";
import { BoxOption } from "@components/molecules";
import { ArrowButton } from "@components/molecules/arrow-button";
import { Message } from "@leanplum/react-native-sdk";
import { Colours, Style } from "@styles";
import moment from "moment";
import React, { memo, useCallback, useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNotifications } from "@hooks";

interface IProps {
  onOpen: ReturnType<typeof useNotifications>["onOpen"];
  item: Message;
}

const NotificationItem = ({ onOpen, item }: IProps) => {
  const date = useMemo(() => {
    const time = moment(item.deliveryTimestamp);
    if (time.isAfter(moment().startOf("day"))) {
      return time.format("h:mm A");
    }

    return time.format("DD MMM");
  }, [item]);

  const onPress = useCallback(() => {
    onOpen(item.messageId, item.data);
  }, [item, onOpen]);

  return (
    <BoxOption isSelected={false} onPress={onPress} innerWrapperStyle={styles.wrapper} innerHeight={Style.adjust(110)}>
      <>
        <Image
          source={!item.imageUrl ? require("@assets/notification/default_thumbnail.png") : { uri: item.imageUrl }}
          style={styles.image}
        />
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
