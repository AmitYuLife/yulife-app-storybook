import { TextTemplate } from "@atoms";
import React, { memo, useCallback, useMemo, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Colours, Style } from "@styles";
import { EyeOpenIcon } from "@atoms/icon/eye-open-icon";
import { EyeClosedIcon } from "@atoms/icon/eye-closed-icon";
import { PressableWithDelay } from "@molecules";

interface IProps {
  value: string | number;
  description?: string;
  currency: string;
}

interface IFormattedValues {
  [key: string]: {
    value: IProps["value"];
    description: IProps["description"];
  };
}

const ShowAndHideBalance = ({ value, currency, description }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const visiblePropName = useMemo(() => (isVisible ? "show" : "hide"), [isVisible]);

  const formattedValues: IFormattedValues = useMemo(
    () => ({
      show: {
        value,
        description: description ? description.replace("%{value}", `${currency}${value}`) : null,
      },
      hide: {
        value: "*******",
        description: description ? description.replace("%{value}", `${currency}*******`) : null,
      },
    }),
    [value, description, currency]
  );

  const onPress = useCallback(() => setIsVisible((visible) => !visible), []);

  return (
    <View>
      <View style={styles.wrapper}>
        <TextTemplate type="b2b">
          {currency}
          {formattedValues[visiblePropName].value}
        </TextTemplate>
        <View style={styles.icon}>
          <PressableWithDelay onPress={onPress}>{isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}</PressableWithDelay>
        </View>
      </View>
      {!description ? null : (
        <View style={styles.description}>
          <TextTemplate type="l1">{formattedValues[visiblePropName].description}</TextTemplate>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderColor: "#E3E3E1",
    borderWidth: 1,
    padding: Style.adjust(16),
    backgroundColor: Colours.neutral.white,
    borderRadius: 8,
    flexDirection: "row",
  },
  description: {
    marginTop: Style.adjust(24),
  },
  icon: {
    alignItems: "flex-end",
    flex: 1,
  },
});

export default memo(ShowAndHideBalance);
