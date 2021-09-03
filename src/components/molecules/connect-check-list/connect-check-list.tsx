import React, { memo, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ChecklistInfoCard } from "@atoms";
import { Style } from "@styles";
import { GoogleFitIcon } from "@atoms/icon/google-fit-icon";
import { SamsungHealthIcon } from "@atoms/icon/samsung-health-icon";

enum DevicePackageType {
  SAMSUNG = "samsung",
  GOOGLE = "google",
}

const ConnectCheckList = () => {
  const [selectedPackage, setSelectedPackage] = useState(DevicePackageType.GOOGLE);

  const list = useMemo(
    () => ({
      samsung: [
        {
          label: "Steps",
          checked: true,
        },
        {
          label: "Meditation",
          checked: false,
        },
        {
          label: "3rd party apps",
          checked: false,
        },
      ],
      googleFit: [
        {
          label: "Steps",
          checked: true,
        },
        {
          label: "Meditation",
          checked: true,
        },
        {
          label: "3rd party apps",
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
          title="Samsung Health"
          description="Does not support all activities for full experience & rewards"
          isSelected={selectedPackage === DevicePackageType.SAMSUNG}
          onPress={() => setSelectedPackage(DevicePackageType.SAMSUNG)}
          list={list.samsung}
        />
      </View>
      <ChecklistInfoCard
        icon={<GoogleFitIcon />}
        title="Google Fit"
        description="Supports all activities for the full experience & rewards"
        isSelected={selectedPackage === DevicePackageType.GOOGLE}
        onPress={() => setSelectedPackage(DevicePackageType.GOOGLE)}
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
    marginRight: Style.adjust(16),
  },
});

export default memo(ConnectCheckList);
