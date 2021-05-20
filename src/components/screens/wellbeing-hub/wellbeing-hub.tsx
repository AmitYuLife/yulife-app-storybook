import React, { FC } from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";
import YugiWellBeing from "@components/screens/wellbeing-hub/assets/yugi-wellbeing";
import TheOwlFence from "@components/screens/wellbeing-hub/assets/the-owl-fence";
import WellBeingServiceCard from "@components/screens/wellbeing-hub/sub-components/wellbeing-service-card";
import WellBeingServiceCardSkeleton from "@components/screens/wellbeing-hub/sub-components/wellbeing-service-card-skeleton";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { GetWellbeingHubItems_wellbeingHubItems as WellbeingCard } from "@graphql/_core/schema";
import WellBeingServiceNoResults from "@components/screens/wellbeing-hub/sub-components/wellbeing-service-no-results";
import { TEXT_TEMPLATE, WELLBEING_HUB_SCREEN, WELLBEING_HUB_SCROLL_VIEW } from "@ids";

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
        <View style={styles.wrapper}>
          {loading ? null : (
            <View style={styles.container}>
              <View style={styles.infoWrapper}>
                <TextTemplate type="h3" testID={TEXT_TEMPLATE(userFirstName)}>{`Hi ${userFirstName}!`}</TextTemplate>
                <View style={styles.description}>
                  <TextTemplate type="b2">
                    Welcome to this quick-access hub to all your company’s wellbeing benefits.
                  </TextTemplate>
                </View>
              </View>
              <View style={styles.yugiWellBeing}>
                <YugiWellBeing />
              </View>
            </View>
          )}
          <View style={styles.cardWrapper}>
            {loading ? (
              <WellBeingServiceCardSkeleton limit={5} />
            ) : (
              cards.map((card) => <WellBeingServiceCard key={card.id} card={card} />)
            )}
          </View>
        </View>
        <View style={styles.owl}>
          <TheOwlFence />
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
  wrapper: {
    paddingLeft: Style.adjust(24),
    paddingTop: Style.adjust(32),
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
