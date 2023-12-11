import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { GetActiveBuffsOverlayQuery } from "@graphql/__generated";
import { PackageCardPerks, SlotIcon } from "@molecules";
import styles from "./active-buffs.styles";

interface IProps {
  item: GetActiveBuffsOverlayQuery["getActiveBuffsOverlay"]["equipment"][0];
}

const Equipment = memo(({ item }: IProps) => {
  const slot = useMemo(
    () => ({
      itemUrl: item.iconUri,
      backgroundUrl: item.slotUri,
      name: "",
    }),
    [item.iconUri, item.slotUri]
  );

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemImageWrapper}>
        <SlotIcon {...slot} />
      </View>
      <View style={styles.perksContainer}>
        {item.buffs.map((buff, index) => (
          <PackageCardPerks key={index} leftIcon={buff.icon} title={buff.title} description={buff.description} />
        ))}
      </View>
    </View>
  );
});

export default Equipment;
