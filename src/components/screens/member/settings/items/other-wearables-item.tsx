import React, { memo, useCallback } from "react";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { t } from "@locale";
import ItemTitle from "./item-title";
import { Platform, View } from "react-native";
import styles from "./item.styles";

const OtherWearablesItem = () => {
  const onPress = useCallback(() => {
    const platform = Platform.select({ ios: t("apple_health"), android: t("google_fit") });
    showYuModal({
      component: {
        id: MODALS.info,
        name: MODALS.info,
        passProps: {
          onPress: () => Navigation.dismissModal(MODALS.info),
          type: "otherWearables",
          heading: t("screens.info_modal.other_wearables.heading", { platform }),
          ctaLabel: t("labels.cta.got_it"),
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
