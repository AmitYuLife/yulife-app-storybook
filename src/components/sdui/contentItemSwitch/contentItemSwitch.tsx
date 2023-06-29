import React, { memo, useCallback, useState } from "react";
import { ContentItemSwitch as GqlSwitch } from "@graphql/_core/schema";
import { Switch } from "@molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";

type Props = GqlSwitch & {
  testID?: string;
};

export const ContentItemSwitch = memo((props: Props) => {
  const { onPress, defaultValue, styles, wrapperStyles } = props;

  const [value, setValue] = useState<boolean>(defaultValue);
  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onPress);

  const onValueChange = useCallback(() => {
    setValue((prev) => !prev);
    handleSduiAction();
  }, [handleSduiAction]);

  return (
    <Switch
      wrapperStyles={mapServerStyles(wrapperStyles)}
      styles={mapServerStyles(styles)}
      value={value}
      onPress={onValueChange}
      disabled={false}
    />
  );
});
