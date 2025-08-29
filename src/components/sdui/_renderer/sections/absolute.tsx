import React, { useContext } from "react";
import { View, ViewStyle } from "react-native";
import { mapDynamicServerStyles, mapServerStyles } from "@components/sdui";
import { Renderer } from "../renderer";
import { SduiStateContext } from "@components/sdui/_context/SduiProvider";
import { GetSduiJourneyQuery } from "@graphql/__generated";

import { StyleSheet } from "@styles";
interface Props {
  items: GetSduiJourneyQuery["getSduiJourney"]["absolute"];
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
          <Renderer item={absoluteItem.item} />
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
