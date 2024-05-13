import { memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextTemplate, YuCoinMiniSvg } from "@atoms";
import { InviteIcon } from "@atoms/icon/invite-icon";
import { SecondaryButton } from "@components/molecules";
import { t } from "@locale";
import { Style } from "@styles";
import { VoidFunction, addCommasToNumber } from "@utils";

interface IProps {
  referralAmount: number;
  onReferralsButtonPress: VoidFunction;
}

const LeaderboardReferColleagueComponent = ({ onReferralsButtonPress, referralAmount }: IProps) => {
  return (
    <View>
      <Image
        source={require("@assets/leaderboards/refer-a-colleague/refer-a-colleague.png")}
        style={styles.referColleagueImage}
      />
      <TextTemplate type="b2b" textAlign="center">
        {t("screens.leaderboard.refer_a_colleague.title")}
      </TextTemplate>
      <View style={styles.referralAmountWrapper}>
        {!referralAmount ? null : (
          <TextTemplate type="b2" textAlign="center">
            {t("screens.leaderboard.refer_a_colleague.description.reward")}{" "}
            <TextTemplate type="b2b">
              {t("screens.leaderboard.refer_a_colleague.description.amount", {
                yuCoinValue: addCommasToNumber(referralAmount),
              })}
            </TextTemplate>
            <YuCoinMiniSvg size={24} style={styles.yuCoin} />
          </TextTemplate>
        )}
        <TextTemplate type="b2" textAlign="center">
          {t("screens.leaderboard.refer_a_colleague.description.action")}
        </TextTemplate>
      </View>
      <SecondaryButton
        label={t("labels.cta.invite")}
        size="Large"
        leftIcon={<InviteIcon size={16} />}
        onPress={onReferralsButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  yuCoin: {
    transform: [{ translateY: Style.adjust(2) }],
    marginHorizontal: Style.adjust(4),
  },
  referralAmountWrapper: {
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(20),
  },
  referColleagueImage: {
    width: Style.adjust(105),
    height: Style.adjust(69),
    alignSelf: "center",
    marginBottom: Style.adjust(8),
  },
});

export default memo(LeaderboardReferColleagueComponent);
