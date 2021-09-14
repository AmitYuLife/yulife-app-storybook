import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { GetActiveBuffsOverlay_getActiveBuffsOverlay_equipment } from "@graphql/_core/schema";
import { SlotIcon } from "@atoms";
import { PackageCardPerks } from "@molecules";
import styles from "./active-buffs.styles";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";

interface IProps {
  item: GetActiveBuffsOverlay_getActiveBuffsOverlay_equipment;
}

const Equipment = memo(({ item }: IProps) => {
  const slot = useMemo(
    () => ({
      status: YuProductStatus.active,
      itemUrl: item.iconUri,
      backgroundUrl: item.slotUri,
      name: "",
    }),
    [item.iconUri, item.slotUri]
  );

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemImageWrapper}>
        <SlotIcon slot={slot} />
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
