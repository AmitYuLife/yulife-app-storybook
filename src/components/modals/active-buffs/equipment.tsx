import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { GetActiveBuffsOverlayQuery, gql, useFragment } from "@graphql/__generated";
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
          <PackageCardPerks
            key={index}
            // the following is not a react hook, it's a simple mapper
            // eslint-disable-next-line react-hooks/rules-of-hooks
            leftIcon={useFragment(gql("RemoteImageFragmentDoc"), buff.icon)}
            title={buff.title}
            description={buff.description}
          />
        ))}
      </View>
    </View>
  );
});

export default Equipment;
