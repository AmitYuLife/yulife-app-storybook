import React, { memo, useContext, useEffect } from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import { Style, Colours } from "@styles";
import { ItemSet } from "./item-set/item-set";
import { useQueryOnScreenSeenOnce } from "@hooks";
import { YuScreenProductSlots } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YU_SCREEN_PRODUCTS_SLOTS } from "@graphql/yuscreen";
import { YUSCREEN_AVATAR } from "@ids";
import { YumojiCreationPrompt } from "../../subcomponents";
import { TextTemplate } from "@atoms";
import { Yumoji, TouchableOpacityWithDelay } from "@molecules";
import { ItemBottom } from "./item-set/item-bottom";
import { YuScreenContext } from "../../../context/yu-screen.context";
import { navigateToYumojiBuilder } from "../../../navigation/navigateToYumojiBuilder";
import { ROUTES } from "@navigation/constants";

const _AvatarAndEquipment = () => {
  const [, { data: yuScreenProductSlots }] = useQueryOnScreenSeenOnce<YuScreenProductSlots>(
    GQL_QUERY_GET_YU_SCREEN_PRODUCTS_SLOTS,
    ROUTES.yuScreen
  );

  const { setPopover, yumojiRemoteUrl } = useContext(YuScreenContext);

  useEffect(() => {
    if (!yumojiRemoteUrl) {
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
  }, [yuScreenProductSlots, setPopover, yumojiRemoteUrl]);

  return (
    <View>
      <View style={styles.wrapper} testID={YUSCREEN_AVATAR}>
        <ItemSet items={yuScreenProductSlots?.getYuScreenProductSlots.left} />
        <TouchableOpacityWithDelay onPress={navigateToYumojiBuilder} style={styles.avatarWrapper}>
          <Yumoji
            width={AVATAR_WIDTH}
            height={AVATAR_HEIGHT}
            emptyWidth={EMPTY_AVATAR_WIDTH}
            emptyHeight={EMPTY_AVATAR_HEIGHT}
            testID="YUMOJI_EQUIPMENT"
            uri={yumojiRemoteUrl}
          />
        </TouchableOpacityWithDelay>
        <ItemSet items={yuScreenProductSlots?.getYuScreenProductSlots.right} />
      </View>
      {!yumojiRemoteUrl ? <YumojiCreationPrompt /> : null}
      {yuScreenProductSlots?.getYuScreenProductSlots.bottom.length > 0 ? (
        <>
          <View style={styles.itemSetWrapper}>
            <ItemBottom items={yuScreenProductSlots?.getYuScreenProductSlots.bottom} />
          </View>
          <View style={styles.itemSetTextWrapper}>
            <TextTemplate textAlign="center" type="l2b" color={Colours.metallic.m500}>
              Provided by your employer
            </TextTemplate>
          </View>
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
  itemSetTextWrapper: {
    marginTop: Style.adjust(8),
  },
});

export const AvatarAndEquipment = memo(_AvatarAndEquipment);
