import React, { memo, ComponentProps } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { SectionTitle } from "../";
import { Avatar } from "./avatar";
import { AvatarItems } from "./avatar-items";
import { Style } from "@styles";

type Props = ComponentProps<typeof AvatarItems> & ComponentProps<typeof Avatar>;

export const AvatarSection = memo(function ({
  loading,
  avatarUrl,
  avatar,
  onEditPress,
  isAvatarCreated,
  productsPersonal,
  onUnlockPress,
  onProductPress,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarAndProductsWrapper}>
        <View style={styles.avatarWrapper}>
          <Avatar
            isAvatarCreated={isAvatarCreated}
            avatar={avatar}
            avatarUrl={avatarUrl}
            onEditPress={onEditPress}
            loading={loading}
          />
        </View>
        <View style={styles.avatarItemsWrapper}>
          <SectionTitle title="Personal Protection" />
          <AvatarItems
            isAvatarCreated={isAvatarCreated}
            productsPersonal={productsPersonal}
            onUnlockPress={onUnlockPress}
            onProductPress={onProductPress}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingBottom: Style.adjust(30),
  } as ViewStyle,
  avatarWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  avatarAndProductsWrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(-10),
  } as ViewStyle,
  avatarItemsWrapper: {
    flex: 1,
    marginTop: Style.adjust(28),
  } as ViewStyle,
});
