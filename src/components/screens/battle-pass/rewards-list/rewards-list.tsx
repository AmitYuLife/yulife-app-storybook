import { Box, TextTemplate } from "@atoms";
import { DONATIONS_LIST } from "@ids";
import DonationListItem, { IDonationListItem } from "@organisms/donation-list-item/donation-list-item";
import { Style } from "@styles";
import { memo } from "react";
import { StyleSheet, View } from "react-native";

interface IRewardsListProps {
  donationTemplates: IDonationListItem[];
  showCoinAnimation: boolean;
  disclaimer?: string;
}

export const RewardsList = memo(({ donationTemplates, showCoinAnimation, disclaimer }: IRewardsListProps) => {
  return (
    <View style={styles.container} testID={DONATIONS_LIST}>
      <Box gap={20}>
        {donationTemplates.map((item) => (
          <DonationListItem {...item} showAnimation={showCoinAnimation} key={item.id} />
        ))}
        {disclaimer ? (
          <View style={styles.consentWrapper}>
            <TextTemplate type="l3" textAlign="center">
              {disclaimer}
            </TextTemplate>
          </View>
        ) : null}
      </Box>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingTop: Style.adjust(15),
    paddingBottom: Style.adjust(30),
  },
  consentWrapper: {
    marginTop: Style.adjust(16),
  },
});
