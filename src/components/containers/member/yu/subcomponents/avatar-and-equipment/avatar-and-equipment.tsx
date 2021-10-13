import React, { memo, useCallback, useContext, useEffect } from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { useSelector } from "react-redux";
import { Style, Colours } from "@styles";
import { ItemSet } from "./item-set/item-set";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer, YuScreenProductSlots } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER, GQL_QUERY_GET_YU_SCREEN_PRODUCTS_SLOTS } from "@graphql/yuscreen";
import { YUSCREEN_AVATAR } from "@ids";
import { AvatarCreationPrompt } from "../../subcomponents";
import { Text } from "@atoms";
import { Yumoji, TouchableOpacityWithDelay } from "@molecules";
import { ItemBottom } from "./item-set/item-bottom";
import { YuScreenContext } from "../../context/yu-screen.context";
import { getUserFeatures } from "@redux/user/user.selectors";
import { navigateToAvatarCreationScreen } from "../../navigation/navigateToAvatarCreationScreen";

const _AvatarAndEquipment = () => {
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, { fetchPolicy: "cache-first" }); // We cannot use cache-only as fetch policy, this query is refetch on avatar update
  const { data: yuScreenProductSlots } = useQuery<YuScreenProductSlots>(GQL_QUERY_GET_YU_SCREEN_PRODUCTS_SLOTS, {
    fetchPolicy: "cache-and-network",
  });
  const features = useSelector(getUserFeatures);

  const editYumoji = useCallback(
    () =>
      navigateToAvatarCreationScreen({ useNewYumojiBuilder: features.newYumojiBuilder, heading: "Edit your Yumoji" }),
    []
  );

  const { setPopover, hasYumoji } = useContext(YuScreenContext);

  const avatarUri = data?.getYulifer?.avatarRemoteFiles?.pngFull;

  useEffect(() => {
    if (!hasYumoji) {
      return;
    }

    if (!yuScreenProductSlots?.getYuScreenProductSlots) {
      return setPopover(null);
    }

    const left = Object.values(yuScreenProductSlots?.getYuScreenProductSlots?.left)
      .map((item, index) => ({
        popover: item?.popover,
        index,
        product: {
          status: item.status,
          productId: item.productId,
        },
      }))
      .filter((item) => !!item.popover);

    const queuedPopoverLeft = left[0];
    if (queuedPopoverLeft?.popover && queuedPopoverLeft.product) {
      const {
        popover: { id, message },
        index,
        product: { productId, status },
      } = queuedPopoverLeft;
      return setPopover({
        id,
        message,
        index,
        product: {
          productId,
          status,
        },
        side: "left",
      });
    }

    const right = Object.values(yuScreenProductSlots?.getYuScreenProductSlots?.right)
      .map((item, index) => ({
        popover: item?.popover,
        index,
        product: {
          status: item.status,
          productId: item.productId,
        },
      }))
      .filter((item) => !!item.popover);

    const queuedPopoverRight = right[0];
    if (queuedPopoverRight?.popover && queuedPopoverRight.product) {
      const {
        popover: { id, message },
        index,
        product: { productId, status },
      } = queuedPopoverRight;
      return setPopover({
        id,
        message,
        index,
        product: {
          productId,
          status,
        },
        side: "right",
      });
    }

    return setPopover(null);
  }, [yuScreenProductSlots, setPopover, hasYumoji]);

  return (
    <View>
      <View style={styles.wrapper} testID={YUSCREEN_AVATAR}>
        <ItemSet items={yuScreenProductSlots?.getYuScreenProductSlots.left} />
        <TouchableOpacityWithDelay onPress={editYumoji} style={styles.avatarWrapper}>
          <Yumoji
            width={AVATAR_WIDTH}
            height={AVATAR_HEIGHT}
            emptyWidth={EMPTY_AVATAR_WIDTH}
            emptyHeight={EMPTY_AVATAR_HEIGHT}
            testID="YUMOJI_EQUIPMENT"
            uri={avatarUri}
          />
        </TouchableOpacityWithDelay>
        <ItemSet items={yuScreenProductSlots?.getYuScreenProductSlots.right} />
      </View>
      {!avatarUri ? <AvatarCreationPrompt /> : null}
      {yuScreenProductSlots?.getYuScreenProductSlots.bottom.length > 0 ? (
        <>
          <View style={styles.itemSetWrapper}>
            <ItemBottom items={yuScreenProductSlots?.getYuScreenProductSlots.bottom} />
          </View>
          <Text bold={true} style={styles.itemSetText}>
            Provided by your employer
          </Text>
        </>
      ) : null}
    </View>
  );
};

const BASE_PADDING = Style.adjust(22);
const AVATAR_WIDTH = Style.adjust(160) * 0.95;
const AVATAR_HEIGHT = Style.adjust(328) * 0.95;
const EMPTY_AVATAR_WIDTH = Style.adjust(111);
const EMPTY_AVATAR_HEIGHT = Style.adjust(298);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    height: Style.adjust(328),
    justifyContent: "space-between",
    paddingLeft: BASE_PADDING,
    paddingRight: BASE_PADDING,
  } as ViewStyle,
  avatarWrapper: {
    marginTop: "auto",
    width: AVATAR_WIDTH,
    height: AVATAR_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  itemSetWrapper: {
    alignSelf: "center",
    marginTop: 26,
  },
  itemSetText: {
    color: Colours.metallic.m500,
    marginTop: 8,
    textAlign: "center",
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: Style.adjust(0.4),
  },
});

export const AvatarAndEquipment = memo(_AvatarAndEquipment);
