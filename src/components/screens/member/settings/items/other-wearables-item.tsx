import React, { memo, useCallback } from "react";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { t } from "@locale";
import ItemTitle from "./item-title";
import { Platform, View } from "react-native";
import styles from "./item.styles";

const OtherWearablesItem = () => {
  const onPress = useCallback(() => {
    const platform = Platform.select({ ios: "Apple Health", android: "Google Fit" });
    showYuModal({
      component: {
        id: MODALS.info,
        name: MODALS.info,
        passProps: {
          onPress: () => Navigation.dismissModal(MODALS.info),
          type: "otherWearables",
          heading: t("screens.info_modal.other_wearables.heading", { platform }),
          ctaLabel: t("screens.info_modal.other_wearables.cta_label"),
        },
      },
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <ItemTitle name={t("screens.info_modal.other_wearables.item")} onPressInfo={onPress} />
    </View>
  );
};

export default memo(OtherWearablesItem);
