import { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { TextTemplate } from "@atoms";
import { DuelEntry } from "../../subcomponents";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { useQuery } from "@apollo/client";
import { DuelSkeleton } from "../../subcomponents/duel-skeleton/duel-skeleton";
import { EMPTY_DUELS_HUB } from "@ids";
import { t } from "@locale";
import { gql } from "@graphql/__generated";

const DuelsToday = () => {
  const { data, loading } = useQuery(gql("GetDuelsTodayDocument"), {
    fetchPolicy: "no-cache",
  });
  const duels = data?.getDuelsToday || [];
  const isEmpty = duels.length === 0;
  const userId = useSelector(getCurrentUserId);

  if (loading) {
    return (
      <View>
        <TextTemplate type="b2b">{t("modals.duels.hub.today_title")}</TextTemplate>
        <View style={styles.skeletonWrapper}>
          <DuelSkeleton length={2} />
        </View>
      </View>
    );
  }

  if (isEmpty) {
    return (
      <View style={styles.sectionWrapper}>
        <TextTemplate type="b2b">{t("modals.duels.hub.today_title")}</TextTemplate>
        <View style={styles.emptyWrapper} testID={EMPTY_DUELS_HUB}>
          <TextTemplate type="b2b" color={Colours.neutral.n500}>
            {t("modals.duels.hub.today_empty")}
          </TextTemplate>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.sectionWrapper}>
      <TextTemplate type="b2b">{t("modals.duels.hub.today_title")}</TextTemplate>
      <View style={styles.wrapper}>
        {duels.map((duel) => (
          <DuelEntry key={duel.id} userId={userId} type="today" duel={duel} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyWrapper: {
    flex: 1,
    marginVertical: Style.adjust(16),
    height: Style.adjust(38),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  } as ViewStyle,
  skeletonWrapper: {
    flex: 1,
    height: Style.adjust(100),
    marginVertical: Style.adjust(16),
    marginHorizontal: -Style.adjust(24),
    overflow: "hidden",
  } as ViewStyle,
  wrapper: { flex: 1, marginVertical: Style.adjust(16) } as ViewStyle,
  sectionWrapper: {
    marginBottom: Style.adjust(40),
  } as ViewStyle,
});

export default memo(DuelsToday);
