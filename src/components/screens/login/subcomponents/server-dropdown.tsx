import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navigation } from "@navigation/main";
import { showOverlayWithChild } from "@modals/blurred-overlay/showOverlayWithChild";
import { ListPicker, TouchableOpacityWithDelay } from "@molecules";
import { MODALS } from "@navigation/constants";
import { TextTemplate } from "@atoms";
import icon from "@atoms/icon";
import region from "@services/region";
import { Colours, Style } from "@styles";
import { useDispatch } from "react-redux";
import { setRegionConfig } from "@redux/app/app.actions";
import { useTranslation } from "@hooks";

export const ServerDropdown = memo(() => {
  const dispatch = useDispatch();
  const translations = useTranslation(["screens.login.server_location.short", "screens.login.server_location.long"]);
  const [server, setServer] = useState(region.getPreferredRegion());
  const handlePress = async () => {
    const items = region.OPTIONS.map((option) => ({
      ...option,
      onPress: async () => {
        const newValue = option.key;
        region.setRegion(newValue);
        dispatch(setRegionConfig());
        setServer(newValue);
        await Navigation.dismissOverlay(MODALS.blurredOverlay);
      },
    }));

    const child = <ListPicker instruction={translations["screens.login.server_location.long"]} items={items} />;

    await showOverlayWithChild(child);
  };

  return (
    <View style={styles.wrapper}>
      <TextTemplate type="l3">{translations["screens.login.server_location.short"]}</TextTemplate>
      <TouchableOpacityWithDelay onPress={handlePress} style={styles.touchable} accessibilityLabel={server}>
        <View style={styles.innerWrapper}>
          <icon.GlobeIcon />
          <View style={styles.textWrapper}>
            <TextTemplate type="b2b">{server}</TextTemplate>
          </View>
          <icon.ArrowIcon direction="down" />
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
