import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { getProductIcon } from "../../../assets/getProductIcon";
import { Style, Colours } from "@styles";
import { toCapitalLetter } from "@services/utils";
import { YuProductStatus, YuItemSlot, CoverType } from "@graphql/_core/schema/globalTypes";

interface Props {
  isSelected: boolean;
  status: YuProductStatus;
  itemSlot: YuItemSlot;
  coverType?: CoverType;
}

export const ItemIcon = (props: Props) => {
  const { status, itemSlot } = props;

  const Icon = getProductIcon(itemSlot);

  return (
    <View style={styles.wrapper}>
      <View style={getForegroundStyle(props)} />
      <View style={getLightOverlay(props)} />
      <Icon width={Style.adjust(32)} height={Style.adjust(32)} status={status} />
      <View style={styles.slotWrapper}>
        <Text style={getFontStyle(props)} bold={true}>
          {getName(itemSlot)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: Style.adjust(64),
    width: Style.adjust(64),
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  slotWrapper: {
    marginTop: Style.adjust(4),
  } as ViewStyle,
});

function getForegroundStyle(props: Props) {
  const { status, coverType } = props;

  const defaultStyle = {
    borderWidth: 1,
    borderColor: Colours.neutral.n400,
    backgroundColor: Colours.neutral.n100,
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
  };

  if (status !== YuProductStatus.active) {
    return defaultStyle;
  }

  if (coverType === CoverType.common) {
    defaultStyle.backgroundColor = Colours.secondary.s40S1;
    defaultStyle.borderColor = Colours.secondary.s100S1;
  } else if (coverType === CoverType.rare) {
    defaultStyle.backgroundColor = Colours.secondary.s40S2;
    defaultStyle.borderColor = Colours.secondary.s100S2;
  } else if (coverType === CoverType.epic) {
    defaultStyle.backgroundColor = Colours.secondary.s40S3;
    defaultStyle.borderColor = Colours.secondary.s100S3;
  }

  return defaultStyle;
}

function getLightOverlay(props: Props) {
  const { status, itemSlot, coverType } = props;

  if (status === YuProductStatus.locked || !itemSlot) {
    return {};
  }

  let backgroundColor = "rgba(255,255,255,0.4)";

  if (status === YuProductStatus.active) {
    if (coverType === CoverType.common) {
      backgroundColor = Colours.secondary.s20S1;
    } else if (coverType === CoverType.rare) {
      backgroundColor = Colours.secondary.s20S2;
    } else if (coverType === CoverType.epic) {
      backgroundColor = Colours.secondary.s20S3;
    }
  }

  return {
    backgroundColor,
    borderRadius: 8,
    position: "absolute",
    top: Style.adjust(4),
    left: Style.adjust(4),
    right: Style.adjust(2),
    bottom: Style.adjust(2),
  } as ViewStyle;
}

function getFontStyle(props: Props) {
  const { isSelected, status, coverType } = props;
  const defaultStyle = {
    fontSize: Style.adjust(12),
    color: Colours.neutral.n400,
  } as TextStyle;

  if (isSelected) {
    defaultStyle.color = Colours.primary.p600;
  }

  if (status === YuProductStatus.active) {
    if (coverType === CoverType.common) {
      defaultStyle.color = Colours.secondary.s100S1;
    } else if (coverType === CoverType.rare) {
      defaultStyle.color = Colours.secondary.s100S2;
    } else if (coverType === CoverType.epic) {
      defaultStyle.color = Colours.secondary.s100S3;
    }
  }

  return defaultStyle;
}

function getName(item: YuItemSlot) {
  if (item === YuItemSlot.clockPendant) {
    return "Charm";
  }

  return toCapitalLetter(item);
}
