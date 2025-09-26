import { memo } from "react";
import { Image, View } from "react-native";
import { TextTemplate, YuCoinMiniSvg } from "@atoms";
import { InviteIcon } from "@atoms/icon/invite-icon";
import { SecondaryButton } from "@components/molecules";
import { t } from "@locale";
import { Style, StyleSheet } from "@styles";
import { VoidFunction, addCommasToNumber } from "@utils";
import { Box } from "@atoms";

interface IProps {
  referralAmount: number;
  onReferralsButtonPress: VoidFunction;
}

const UserReferral = ({ onReferralsButtonPress, referralAmount }: IProps) => {
  return (
    <View>
      <Image source={require("@assets/refer-a-colleague/refer-a-colleague.png")} style={styles.referColleagueImage} />
      <TextTemplate type="b2b" textAlign="center">
        {t("user_referral.title")}
      </TextTemplate>
      <View style={styles.referralAmountWrapper}>
        {!referralAmount ? null : (
          <Box justifyContent="center" flexDirection="row">
            <TextTemplate type="b2" textAlign="center">
              {t("user_referral.description.reward")}{" "}
              <TextTemplate type="b2b">
                {t("user_referral.description.amount", {
                  yuCoinValue: addCommasToNumber(referralAmount),
                })}
              </TextTemplate>
            </TextTemplate>
            <YuCoinMiniSvg size={24} style={styles.yuCoin} />
          </Box>
        )}
        <TextTemplate type="b2" textAlign="center">
          {t("user_referral.description.action")}
        </TextTemplate>
      </View>
      <SecondaryButton
        translationKey="labels.cta.invite"
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

export default memo(UserReferral);
