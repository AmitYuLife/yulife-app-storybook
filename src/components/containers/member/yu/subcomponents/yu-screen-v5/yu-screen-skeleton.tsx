import React from "react";
import NameAndLevelSkeleton from "@components/molecules/name-and-level/name-and-level-skeleton";
import { EmptyMaleBody } from "@components/molecules/yumoji/assets/empty-male-body-svg";
import { Colours } from "@styles";
import { AVATAR_WIDTH, AVATAR_HEIGHT, styles } from "./yu-screen.styles";
import { View } from "react-native";

export const YuScreenSkeleton = () => (
  <>
    <NameAndLevelSkeleton hideWorldIcon={true} />
    <View style={styles.yumojiWrapper}>
      <EmptyMaleBody
        width={AVATAR_WIDTH}
        height={AVATAR_HEIGHT}
        body={Colours.metallic.m100}
        shadow={Colours.metallic.m100}
      />
    </View>
  </>
);
