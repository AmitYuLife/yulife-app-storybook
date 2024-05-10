import { Pad, TextTemplate, YuCoinMiniSvg } from "@atoms";
import { InviteIcon } from "@atoms/icon/invite-icon";
import { SecondaryButton } from "@components/molecules";
import { t } from "@locale";
import { Style } from "@styles";
import { VoidFunction, addCommasToNumber } from "@utils";
import { Image, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";

export const LeaderboardReferColleagueComponent = ({
  onReferralsButtonPress,
}: {
  onReferralsButtonPress: VoidFunction;
}) => {
  const { data } = useQuery(gql("GetReferralRewardAmountDocument"));
  const referralAmount = data?.getReferralRewardAmount?.yuCoinAmount;

  return (
    <View>
      <Image
        source={require("@assets/leaderboards/refer-a-colleague/refer-a-colleague.png")}
        style={styles.referColleagueImage}
      />

      <Pad height={Style.adjust(8)} />

      <TextTemplate type="b2b" textAlign="center">
        {t("screens.leaderboard.refer_a_colleague.title")}
      </TextTemplate>

      <Pad height={Style.adjust(8)} />
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

      <Pad height={Style.adjust(20)} />

      <SecondaryButton
        label={t("labels.cta.invite")}
        size="Large"
        leftIcon={<InviteIcon />}
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
  referColleagueImage: {
    width: Style.adjust(105),
    height: Style.adjust(69),
    alignSelf: "center",
  },
});
