import React, { useContext } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { mapDynamicServerStyles, mapServerStyles } from "@components/sdui";
import { renderItemContent } from "../renderer";
import { SduiStateContext } from "@components/sdui/_context/SduiProvider";
import { AbsoluteContentItem } from "@graphql/__generated";

interface Props {
  items: Array<AbsoluteContentItem>;
}

export const Absolute = ({ items }: Props) => {
  const sduiState = useContext(SduiStateContext);

  if (!items?.length) {
    return null;
  }

  return (
    <>
      {items.map((absoluteItem, absoluteItemIndex) => (
        <View
          /**
           * @TODO Add id fields to all ContentItems
           * for example: ContentItemForm
           */
          key={(absoluteItem.item as any).id || absoluteItemIndex}
          style={[
            styles.default,
            mapServerStyles(absoluteItem.styles),
            mapDynamicServerStyles(absoluteItem.dynamicStyles, sduiState.bus),
          ]}
          pointerEvents="box-none"
        >
          {renderItemContent(absoluteItem.item)}
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  default: {
    position: "absolute",
  } as ViewStyle,
});
