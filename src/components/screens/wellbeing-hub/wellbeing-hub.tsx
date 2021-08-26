import React, { FC } from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { YugiHeader } from "@atoms";
import WellBeingServiceCard from "@components/screens/wellbeing-hub/sub-components/wellbeing-service-card";
import WellBeingServiceCardSkeleton from "@components/screens/wellbeing-hub/sub-components/wellbeing-service-card-skeleton";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { GetWellbeingHubItems_wellbeingHubItems as WellbeingCard } from "@graphql/_core/schema";
import WellBeingServiceNoResults from "@components/screens/wellbeing-hub/sub-components/wellbeing-service-no-results";
import { WELLBEING_HUB_SCREEN, WELLBEING_HUB_SCROLL_VIEW } from "@ids";
import { TheOwlFenceIcon } from "@atoms/icon/the-owl-fence-icon";
import { YugiWellBeingIcon } from "@atoms/icon/yugi-wellbeing-icon";

interface IProps {
  loading: boolean;
  userFirstName: string;
  cards: WellbeingCard[];
  handleClose: () => void;
}

const WellBeingHub: FC<IProps> = ({ loading, userFirstName, cards, handleClose }) => {
  if (cards?.length === 0 && !loading) {
    return <WellBeingServiceNoResults handleClose={handleClose} />;
  }

  return (
    <View style={styles.flex} testID={WELLBEING_HUB_SCREEN}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} testID={WELLBEING_HUB_SCROLL_VIEW}>
        {loading ? null : (
          <View style={styles.header}>
            <YugiHeader
              title={`Hi ${userFirstName}!`}
              description="Welcome to this quick-access hub to all your company’s wellbeing benefits."
              icon={<YugiWellBeingIcon />}
            />
          </View>
        )}
        <View style={styles.wrapper}>
          <View style={styles.cardWrapper}>
            {loading ? (
              <WellBeingServiceCardSkeleton limit={5} />
            ) : (
              cards.map((card) => <WellBeingServiceCard key={card.id} card={card} />)
            )}
          </View>
        </View>
        <View style={styles.owl}>
          <TheOwlFenceIcon />
        </View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  header: {
    paddingTop: Style.adjust(32),
    paddingLeft: Style.adjust(24),
  },
  wrapper: {
    paddingLeft: Style.adjust(24),
  } as ViewStyle,
  container: {
    flexDirection: "row",
  } as ViewStyle,
  infoWrapper: {
    flex: 0.6,
  } as ViewStyle,
  description: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  yugiWellBeing: {
    flex: 0.4,
    alignItems: "flex-end",
  } as ViewStyle,
  cardWrapper: {
    marginTop: Style.adjust(40),
    alignItems: "center",
  } as ViewStyle,
  owl: {
    alignItems: "center",
    marginVertical: 40,
  } as ViewStyle,
});

export default WellBeingHub;
