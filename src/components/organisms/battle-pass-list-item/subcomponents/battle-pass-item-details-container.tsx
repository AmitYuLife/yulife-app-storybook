import { memo } from "react";
import { StyleSheet } from "react-native";
import { Style } from "@styles";
import { useBattlePassItemDetailsModalItems } from "@organisms/battle-pass-list-item/helpers";
import { ItemDetailsContainer } from "@organisms";

interface IBattlePassItemDetailsContainer {
  milestoneId: string;
}

const BattlePassItemDetailsContainer = ({ milestoneId }: IBattlePassItemDetailsContainer) => {
  const { error, isLoading, details } = useBattlePassItemDetailsModalItems({ milestoneId });

  return (
    <ItemDetailsContainer
      isLoading={isLoading}
      details={!error ? details : []}
      containerStyles={styles.itemDetailsContainer}
    />
  );
};

const styles = StyleSheet.create({
  itemDetailsContainer: {
    paddingHorizontal: Style.adjust(30),
    marginTop: Style.adjust(30),
    paddingBottom: Style.adjust(20),
  },
});

export default memo(BattlePassItemDetailsContainer);
