import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { showOverlayWithChild } from "@modals/blurred-overlay/showOverlayWithChild";
import { ListPicker, TouchableOpacityWithDelay } from "@molecules";
import { MODALS } from "@navigation/constants";
import { TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import region from "@services/region";
import { Colours, Style } from "@styles";
import { GlobeSvg } from "./globe-svg";

const COPY = {
  short: "Company location",
  long: `Please select your company's location`,
};

export const ServerDropdown = memo(() => {
  const [server, setServer] = useState(region.getPreferredRegion());
  const handlePress = async () => {
    const items = region.OPTIONS.map((option) => ({
      ...option,
      onPress: async () => {
        const newValue = option.key;
        await region.setRegion(newValue);
        setServer(newValue);
        await Navigation.dismissOverlay(MODALS.blurredOverlay);
      },
    }));

    const child = <ListPicker instruction={COPY.long} items={items} />;

    await showOverlayWithChild(child);
  };

  return (
    <View style={styles.wrapper}>
      <TextTemplate type="l3">{COPY.short}</TextTemplate>
      <TouchableOpacityWithDelay onPress={handlePress} style={styles.touchable}>
        <View style={styles.innerWrapper}>
          <GlobeSvg />
          <View style={styles.textWrapper}>
            <TextTemplate type="b2b">{server}</TextTemplate>
          </View>
          <ArrowIcon direction="down" />
        </View>
      </TouchableOpacityWithDelay>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  touchable: {
    borderRadius: 8,
    borderColor: Colours.neutral.n200,
    borderWidth: 1,
    padding: Style.adjust(4),
  },
  innerWrapper: {
    flexDirection: "row",
  },
  textWrapper: {
    paddingHorizontal: Style.adjust(8),
  },
});
