import React, { memo, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ChecklistInfoCard } from "@molecules";
import { Style } from "@styles";
import { GoogleFitIcon } from "@atoms/icon/google-fit-icon";
import { SamsungHealthIcon } from "@atoms/icon/samsung-health-icon";
import { FitKitHealthTrackingPlatform } from "@services/fitkit/fitkit.service";
import { t } from "@locale";

interface ConnectCheckListProps {
  setSelectedFitkitPlatform: (platform: FitKitHealthTrackingPlatform) => void;
}

const ConnectCheckList = (props: ConnectCheckListProps) => {
  const { setSelectedFitkitPlatform } = props;
  const [selectedPackage, setSelectedPackage] = useState<FitKitHealthTrackingPlatform>("GoogleFit");

  const onSelect = (platform: FitKitHealthTrackingPlatform) => {
    setSelectedFitkitPlatform(platform);
    setSelectedPackage(platform);
  };

  const list = useMemo(
    () => ({
      samsung: [
        {
          label: t("modals.switch_to_samsung_health.checklist_info_card.list.label_1"),
          checked: true,
        },
        {
          label: t("modals.switch_to_samsung_health.checklist_info_card.list.label_2"),
          checked: false,
        },
        {
          label: t("modals.switch_to_samsung_health.checklist_info_card.list.label_3"),
          checked: false,
        },
      ],
      googleFit: [
        {
          label: t("modals.switch_to_google_fit.checklist_info_card.list.label_1"),
          checked: true,
        },
        {
          label: t("modals.switch_to_google_fit.checklist_info_card.list.label_2"),
          checked: true,
        },
        {
          label: t("modals.switch_to_google_fit.checklist_info_card.list.label_3"),
          checked: true,
        },
      ],
    }),
    []
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.samsungWrapper}>
        <ChecklistInfoCard
          icon={<SamsungHealthIcon />}
          title={t("modals.switch_to_samsung_health.checklist_info_card.title")}
          description={t("modals.switch_to_samsung_health.checklist_info_card.description")}
          isSelected={selectedPackage === "SamsungHealth"}
          onPress={() => onSelect("SamsungHealth")}
          list={list.samsung}
        />
      </View>
      <ChecklistInfoCard
        icon={<GoogleFitIcon />}
        title={t("modals.switch_to_google_fit.checklist_info_card.title")}
        description={t("modals.switch_to_google_fit.checklist_info_card.description")}
        isSelected={selectedPackage === "GoogleFit"}
        onPress={() => onSelect("GoogleFit")}
        list={list.googleFit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  samsungWrapper: {
    marginEnd: Style.adjust(16),
  },
});

export default memo(ConnectCheckList);
