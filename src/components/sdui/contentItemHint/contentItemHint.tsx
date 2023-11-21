import React, { memo } from "react";
import { View } from "react-native";
import Hint from "@components/molecules/hint/hint";
import { ContentItemHint as GqlHint } from "@graphql/_core/schema";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";

export const ContentItemHint = memo((props: GqlHint) => {
  const { hintTitle, description, hintImage, onPress, styles } = props;

  const mappedServerStyle = mapServerStyles(styles) || {};
  const { handleSduiAction: handlePress } = useSduiCallbackFunctionOrReduxAction(onPress);

  return (
    <View style={mappedServerStyle}>
      <Hint label={hintTitle} description={description} image={hintImage} onPress={onPress && handlePress} />
    </View>
  );
});
