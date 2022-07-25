import React, { FC, memo } from "react";
import { View } from "react-native";
import { ItemSlotSkeleton } from "../item-slot/item-slot-skeleton";
import { YuCoinPowerSkeleton } from "../yu-coin-power/yu-coin-power-skeleton";
import { AVATAR_HEIGHT, AVATAR_WIDTH, styles } from "./styles";
import { EmptyMaleBody } from "@components/molecules/yumoji/assets/empty-male-body-svg";
import { Colours } from "@styles";

export const YumojiAndSlotsSkeleton = memo(() => {
  return (
    <View style={styles.wrapper}>
      <YumojiAvatar />
      <SlotsWrapper>
        <YuCoinPowerSkeleton />
        {Array.from({ length: 5 }).map((_, index) => (
          <ItemSlotSkeleton key={index} />
        ))}
      </SlotsWrapper>
    </View>
  );
});

const SlotsWrapper: FC = ({ children }) => <View style={styles.slotsWrapper}>{children}</View>;

const YumojiAvatar = () => (
  <View style={styles.yumojiWrapper}>
    <EmptyMaleBody
      width={AVATAR_WIDTH}
      height={AVATAR_HEIGHT}
      body={Colours.metallic.m100}
      shadow={Colours.metallic.m100}
    />
  </View>
);
