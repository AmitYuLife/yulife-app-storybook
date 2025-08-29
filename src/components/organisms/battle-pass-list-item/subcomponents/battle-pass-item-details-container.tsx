import { memo } from "react";
import { Style, StyleSheet } from "@styles";
import { ItemDetailsContainer } from "@organisms";
import { useBattlePassItemDetailsModalItems } from "../helpers";

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
