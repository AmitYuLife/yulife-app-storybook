import { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";
import { TextTemplate } from "@atoms";
import { DuelEntry } from "../../subcomponents";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { DuelSkeleton } from "../../subcomponents/duel-skeleton/duel-skeleton";
import { useQueryOnScreenSeen } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { t } from "@locale";
import { gql } from "@graphql/__generated";

const DuelsTomorrow = () => {
  const [, { data, loading }] = useQueryOnScreenSeen(gql("GetDuelsTomorrowDocument"), ROUTES.duelsHub, {
    fetchPolicy: "no-cache",
  });

  const duels = data?.getDuelsTomorrow || [];
  const userId = useSelector(getCurrentUserId);

  const isEmpty = duels.length === 0;

  if (loading) {
    return (
      <View style={styles.skeletonWrapper}>
        <DuelSkeleton length={2} />
      </View>
    );
  }

  if (isEmpty) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <TextTemplate type="b2b">{t("modals.duels.hub.tomorrow_title")}</TextTemplate>
      <View style={styles.entriesWrapper}>
        {duels.map((duel) => (
          <DuelEntry key={duel.id} duel={duel} userId={userId} type="tomorrow" />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: Style.adjust(24) } as ViewStyle,
  entriesWrapper: { flex: 1, marginTop: Style.adjust(16) } as ViewStyle,
  skeletonWrapper: {
    flex: 1,
    height: Style.adjust(100),
    marginBottom: Style.adjust(20),
    marginHorizontal: -Style.adjust(24),
    overflow: "hidden",
  } as ViewStyle,
});

export default memo(DuelsTomorrow);
