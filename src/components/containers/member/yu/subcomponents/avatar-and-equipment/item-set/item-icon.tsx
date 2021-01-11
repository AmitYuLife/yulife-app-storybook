import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { employerItems } from "../../../yu-types";
import { getProductIcon } from "../../../assets/getProductIcon";
import { Style, Colours } from "@styles";
import { toCapitalLetter } from "@services/utils";
import { YuProductStatus, YuItemSlot } from "../../../../../../../graphql/_core/schema/globalTypes";

interface Props {
  isSelected: boolean;
  status: YuProductStatus;
  itemSlot: YuItemSlot;
}

export const ItemIcon = (props: Props) => {
  const { status, itemSlot } = props;

  const Icon = getProductIcon(itemSlot);

  return (
    <View style={styles.wrapper}>
      <View style={getForegroundStyle(props)} />
      <View style={getLightOverlay(props)} />
      <Icon style={getStyle(status)} width={Style.adjust(32)} height={Style.adjust(32)} />
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

function getStyle(status: YuProductStatus) {
  if (status === YuProductStatus.active) {
    return {};
  }

  return {
    opacity: 0.6,
  };
}

function getForegroundStyle(props: Props) {
  const { isSelected, itemSlot } = props;
  const isEmployerItem = employerItems.includes(itemSlot);

  const defaultStyle = {
    borderWidth: 1,
    borderColor: Colours.neutral.n400,
    backgroundColor: Colours.neutral.n200,
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8,
  };

  if (isSelected && !isEmployerItem) {
    defaultStyle.backgroundColor = Colours.primary.p100;
    defaultStyle.borderColor = Colours.primary.p600;
  }

  if (isEmployerItem) {
    defaultStyle.backgroundColor = Colours.blue.dp306;
    defaultStyle.borderColor = Colours.blue.dp305;
  }

  return defaultStyle;
}

function getLightOverlay(props: Props) {
  const { status, itemSlot } = props;

  if (status === YuProductStatus.locked || !itemSlot) {
    return {};
  }

  return {
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 8,
    position: "absolute",
    top: Style.adjust(4),
    left: Style.adjust(4),
    right: Style.adjust(2),
    bottom: Style.adjust(2),
  } as ViewStyle;
}

function getFontStyle(props: Props) {
  const defaultStyle = {
    fontSize: Style.adjust(12),
    color: Colours.neutral.n400,
  } as TextStyle;

  if (props.isSelected) {
    defaultStyle.color = Colours.primary.p600;
  }

  if (props.status === YuProductStatus.active) {
    defaultStyle.color = Colours.neutral.n700;
  }

  return defaultStyle;
}

function getName(item: YuItemSlot) {
  if (item === YuItemSlot.clockPendant) {
    return "Clock";
  }

  return toCapitalLetter(item);
}
