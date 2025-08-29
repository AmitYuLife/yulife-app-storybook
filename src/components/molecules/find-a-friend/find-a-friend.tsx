import { MagnifyingGlass, Pad, TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { VoidFunction } from "@utils";
import { View } from "react-native";
import { t } from "@locale";
import { InviteIcon } from "@atoms/icon/invite-icon";
import { memo } from "react";
import { SecondaryButton } from "@molecules";

const FindAFriend = ({
  loading,
  onPress,
  records = [],
  showReferral,
}: {
  loading: boolean;
  onPress: VoidFunction;
  records?: unknown[];
  showReferral: boolean;
}) => {
  return (
    <View style={styles.magnifyingGlassWrapper}>
      <MagnifyingGlass height={Style.adjust(70)} width={Style.adjust(70)} />
      <View style={styles.noResultsTextWrapper}>
        <TextTemplate type="b2" textAlign="center">
          {getMagnifyingGlassCopy(loading, records, showReferral)}
        </TextTemplate>
        <Pad height={Style.adjust(24)} />
        {loading || records?.length || !showReferral ? null : (
          <SecondaryButton translationKey="labels.cta.invite" leftIcon={<InviteIcon size={16} />} onPress={onPress} />
        )}
      </View>
    </View>
  );
};

const getMagnifyingGlassCopy = (loading: boolean, records: unknown[], showReferral: boolean) => {
  if (!loading && !records?.length) {
    return showReferral
      ? t("screens.leaderboard.search.friends_not_found")
      : t("screens.leaderboard.search.friends_not_found_no_referrals");
  }

  return t("screens.leaderboard.search.loading_state");
};

const styles = StyleSheet.create({
  magnifyingGlassWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Style.adjust(16),
  },
  noResultsTextWrapper: {
    minHeight: Style.adjust(70),
    maxWidth: Style.adjust(278),
    marginTop: Style.adjust(32),
  },
});

export default memo(FindAFriend);
