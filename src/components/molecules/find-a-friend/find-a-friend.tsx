import { MagnifyingGlass, Pad, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { VoidFunction } from "@utils";
import { StyleSheet, View } from "react-native";
import { t } from "@locale";
import { InviteIcon } from "@atoms/icon/invite-icon";
import { memo } from "react";
import { SecondaryButton } from "@molecules";

const FindAFriend = ({
  loading,
  onPress,
  records = [],
}: {
  loading: boolean;
  onPress: VoidFunction;
  records?: unknown[];
}) => {
  return (
    <View style={styles.magnifyingGlassWrapper}>
      <MagnifyingGlass height={Style.adjust(70)} width={Style.adjust(70)} />
      <View style={styles.noResultsTextWrapper}>
        <TextTemplate type="b2" textAlign="center">
          {getMagnifyingGlassCopy(loading, records)}
        </TextTemplate>
        <Pad height={Style.adjust(24)} />
        {loading || records?.length ? null : (
          <SecondaryButton translationKey="labels.cta.invite" leftIcon={<InviteIcon size={16} />} onPress={onPress} />
        )}
      </View>
    </View>
  );
};

const getMagnifyingGlassCopy = (loading: boolean, records: unknown[]) => {
  if (!loading && !records?.length) {
    return t("screens.leaderboard.search.friends_not_found");
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
