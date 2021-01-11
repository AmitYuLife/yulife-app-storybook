import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import { ChipIconType } from "./chip.types";
import { HighBloodPressureSvg } from "./svg/high-blood-pressure";
import { HighCholesterolSvg } from "./svg/high-cholesterol";
import { EarNoseThroatSvg } from "./svg/ear-nose-throat";
import { DigestiveSvg } from "./svg/digestive";
import { EyeSvg } from "./svg/eye";
import { KidneysBladderSvg } from "./svg/kidneys-bladder";
import { LungsSvg } from "./svg/lungs";
import { MinorInjuriesSvg } from "./svg/minor-injuries";
import { MusclesJointsSvg } from "./svg/muscles-joints";
import { OtherSvg } from "./svg/other";
import { PregnancySvg } from "./svg/pregnancy";
import { SkinSvg } from "./svg/skin";
import Svg from "react-native-svg";
import media from "@styles/media";

interface Props {
  icon: ChipIconType;
}

const SIZE = Platform.select({
  ios: Style.adjust(40),
  android: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
        value: Style.adjust(32),
      },
    ],
    Style.adjust(40)
  ),
});

export const Icon = ({ icon }: Props) => {
  const SvgIcon = getSvgIcon(icon);

  return (
    <View style={styles.wrapper}>
      <Svg width={SIZE} height={SIZE} viewBox="0 0 40 40" fill="none">
        <SvgIcon />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    marginTop: Style.adjust(8),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(14),
    letterSpacing: 1,
    width: "100%",
  } as TextStyle,
  active: {
    color: Colours.ocean.up204,
  } as TextStyle,
});

function getSvgIcon(type: string) {
  switch (type) {
    case ChipIconType.DIGESTIVE:
      return DigestiveSvg;
    case ChipIconType.EARS_NOSE_THROAT:
      return EarNoseThroatSvg;
    case ChipIconType.EYE:
      return EyeSvg;
    case ChipIconType.HIGH_BLOOD_PRESSURE:
      return HighBloodPressureSvg;
    case ChipIconType.HIGH_CHOLESTEROL:
      return HighCholesterolSvg;
    case ChipIconType.KIDNEYS_BLADDER:
      return KidneysBladderSvg;
    case ChipIconType.LUNGS:
      return LungsSvg;
    case ChipIconType.MINOR_INJURIES:
      return MinorInjuriesSvg;
    case ChipIconType.MUSCLES_JOINTS:
      return MusclesJointsSvg;
    case ChipIconType.OTHER:
      return OtherSvg;
    case ChipIconType.PREGNANCY:
      return PregnancySvg;
    case ChipIconType.SKIN:
      return SkinSvg;
    default:
      return View;
  }
}
