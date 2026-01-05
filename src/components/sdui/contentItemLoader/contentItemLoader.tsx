import React, { memo, useEffect } from "react";
import { View } from "react-native";
import { ContentItemLoaderFragment as GqlLoader } from "@graphql/__generated";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import { Style, StyleSheet } from "@styles";
import AnimalLoader from "@organisms/animal-loader/animal-loader";

export const ContentItemLoader = memo((props: GqlLoader) => {
  const { onLoad, styles } = props;

  const mappedServerStyle = mapServerStyles(styles) || {};
  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onLoad);

  useEffect(() => {
    handleSduiAction();
  }, [handleSduiAction]);

  return (
    <View style={[defaultStyles.container, mappedServerStyle]}>
      <AnimalLoader isLoading={true} />
    </View>
  );
});

const defaultStyles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: Style.DEVICE_WIDTH,
  },
});
