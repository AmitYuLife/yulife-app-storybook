import { addCommasToNumber } from "@utils";
import { CloseSvg } from "@atoms";
import { InviteIcon } from "@atoms/icon/invite-icon";
import { Colours, Style, StyleSheet } from "@styles";
import { memo, useEffect, useState } from "react";
import { Navigation } from "@navigation/main";
import { SecondaryButton, TouchableOpacityWithDelay } from "@components/molecules";
import Markdown from "@components/molecules/markdown/markdown";
import { LEADERBOARD_REFERRAL_REMINDER, LEADERBOARD_REFERRAL_REMINDER_CLOSE } from "@ids";
import { t } from "@locale";
import { View } from "react-native";

interface IItemsProps {
  componentId: string;
  referralAmount: number;
  goToReferralInformation: () => Promise<void>;
}

const LeaderboardListReferralReminder = ({ componentId, referralAmount, goToReferralInformation }: IItemsProps) => {
  const [showReferralReminder, setShowReferralReminder] = useState(true);

  useEffect(() => {
    // dismissal only lasts for as long as the user is on the screen
    // whenever the user navigates back to the given screen, show the referral reminder again
    const screenEventListener = Navigation.events().registerComponentListener(
      { componentDidAppear: () => setShowReferralReminder(true) },
      componentId
    );

    return screenEventListener.remove;
  }, [componentId]);

  if (!showReferralReminder) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.referColleagueView} testID={LEADERBOARD_REFERRAL_REMINDER}>
        {!referralAmount ? null : (
          <Markdown
            text={t("user_referral.list_item", {
              yuCoinValue: addCommasToNumber(referralAmount),
            })}
          />
        )}
        <View style={styles.referralButton}>
          <SecondaryButton
            translationKey="labels.cta.invite"
            size="Large"
            leftIcon={<InviteIcon size={Style.adjust(16)} />}
            onPress={goToReferralInformation}
          />
        </View>
        <TouchableOpacityWithDelay
          onPress={() => setShowReferralReminder(false)}
          style={styles.closeIconWrapper}
          testID={LEADERBOARD_REFERRAL_REMINDER_CLOSE}
        >
          <CloseSvg stroke={Colours.neutral.n900} accessible={false} size={Style.adjust(16)} />
        </TouchableOpacityWithDelay>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
  },
  referralButton: {
    marginTop: Style.adjust(16),
  },
  referColleagueView: {
    position: "relative",
    paddingHorizontal: Style.adjust(16),
    paddingVertical: Style.adjust(14),
    borderRadius: Style.adjust(8),
    borderWidth: Style.adjust(1),
    borderColor: Colours.neutral.n150,
    marginBottom: Style.adjust(24),
  },
  closeIconWrapper: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: Style.adjust(8),
  },
});

export default memo(LeaderboardListReferralReminder);
