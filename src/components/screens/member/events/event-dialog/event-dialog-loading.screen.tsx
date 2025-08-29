import React, { FC } from "react";
import { View } from "react-native";
import { SkeletonLoading } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { GenericHeadingAbsolute } from "@organisms";

interface Props {
  onLeftIconPress: () => void;
}

const EventDialogLoadingScreen: FC<Props> = ({ onLeftIconPress }: Props) => {
  return (
    <View style={style.wrapper}>
      <View style={style.wrapper2}>
        <View style={style.rewardWrapper}>
          <View style={style.leftRewardWrapper}>
            <SkeletonLoading style={style.circle} />
            <SkeletonLoading style={style.smallMediumLineSpace} />
          </View>
          <View style={style.rightRewardWrapper}>
            <SkeletonLoading style={style.circle} />
            <SkeletonLoading style={style.smallMediumLineSpace} />
          </View>
        </View>

        {["id1", "id2", "id3"].map((id) => (
          <View style={style.itemWrapper3} key={id}>
            <SkeletonLoading style={style.mediumCircle} />
            <View style={style.itemWrapper4}>
              <SkeletonLoading style={style.smallLineSpace} />
              <SkeletonLoading style={style.mediumBigLineSpace} />
              <SkeletonLoading style={style.mediumBigLineSpace} />
            </View>
          </View>
        ))}
      </View>

      <GenericHeadingAbsolute onLeftIconPress={onLeftIconPress} backgroundColor="transparent" />
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: { flexGrow: 1 },
  wrapper2: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    marginTop: Style.adjust(172),
    backgroundColor: Colours.metallic.m100,
    borderTopLeftRadius: Style.adjust(8),
    borderTopRightRadius: Style.adjust(8),
    padding: Style.adjust(24),
  },
  rewardWrapper: {
    height: Style.adjust(170),
    flexDirection: "row",
  },
  leftRewardWrapper: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(8),
    marginEnd: Style.adjust(4),
  },
  rightRewardWrapper: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(8),
    marginStart: Style.adjust(4),
  },
  circle: {
    height: Style.adjust(88),
    width: Style.adjust(88),
    borderRadius: Style.adjust(44),
    marginBottom: Style.adjust(24),
  },
  smallMediumLineSpace: {
    height: Style.adjust(12),
    width: Style.adjust(88),
    borderRadius: Style.adjust(8),
  },
  smallLineSpace: {
    height: Style.adjust(12),
    width: Style.adjust(56),
    borderRadius: Style.adjust(8),
  },
  mediumCircle: {
    height: Style.adjust(30),
    width: Style.adjust(30),
    borderRadius: Style.adjust(15),
  },
  whiteMediumBigLineSpace: {
    height: Style.adjust(14),
    width: Style.adjust(252),
    borderRadius: Style.adjust(12),
    backgroundColor: Colours.neutral.white,
    marginTop: Style.adjust(24),
  },
  mediumBigLineSpace: {
    height: Style.adjust(14),
    width: Style.adjust(227),
    borderRadius: Style.adjust(12),
    marginTop: Style.adjust(14),
  },
  itemWrapper3: {
    height: Style.adjust(112),
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(8),
    marginTop: Style.adjust(16),
    padding: Style.adjust(16),
    flexDirection: "row",
  },
  itemWrapper4: {
    marginStart: Style.adjust(24),
    paddingTop: Style.adjust(8),
  },
});

export default EventDialogLoadingScreen;
