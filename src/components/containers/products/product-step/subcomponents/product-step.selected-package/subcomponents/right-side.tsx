import React, { memo, useContext } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";
import { ProductStepContext } from "../../../product-step.context";
import { LOCAL_ANSWER_KEY } from "../../../utils";
import { SlotIcon } from "../../product-step.slot-icon";

interface Props {
  customerProductId: string;
  coverType: CoverType;
  backgroundUrl: string;
}

export const RightSide = memo(({ customerProductId, coverType, backgroundUrl }: Props) => {
  const { dynamicData } = useContext(ProductStepContext);

  return (
    <View style={styles.wrapper}>
      <SlotIcon
        backgroundUrl={backgroundUrl}
        worldId={dynamicData[LOCAL_ANSWER_KEY.WorldId] as YuWorld}
        coverType={coverType as CoverType}
        customerProductId={customerProductId}
        shouldDisplayPackageType={true}
        size={Style.adjust(80)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: "auto",
  } as ViewStyle,
});
