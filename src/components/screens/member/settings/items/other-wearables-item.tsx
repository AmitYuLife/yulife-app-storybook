import React, { memo } from "react";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { t } from "@locale";
import ItemTitle from "./item-title";
import { View } from "react-native";
import styles from "./item.styles";

const OtherWearablesItem = () => {
  return (
    <View style={styles.wrapper}>
      <ItemTitle name={t("screens.infoModal.otherWearables.item")} onPressInfo={onPressInfo} />
    </View>
  );
};

const onPressInfo = () =>
  showYuModal({
    component: {
      id: MODALS.info,
      name: MODALS.info,
      passProps: {
        onPress: () => Navigation.dismissModal(MODALS.info),
        type: "otherWearables",
        heading: t("screens.infoModal.otherWearables.heading"),
        ctaLabel: t("screens.infoModal.otherWearables.ctaLabel"),
      },
    },
  });

export default memo(OtherWearablesItem);
