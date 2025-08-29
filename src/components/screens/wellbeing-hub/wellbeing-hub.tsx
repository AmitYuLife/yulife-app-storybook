import React, { FC } from "react";
import { ScrollView, View, ViewStyle } from "react-native";
import { GetWellbeingHubItemsQuery } from "@graphql/__generated";
import { t } from "@locale";
import { Colours, Style, StyleSheet } from "@styles";
import { ChipList } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { WELLBEING_HUB_SCREEN, WELLBEING_HUB_SCROLL_VIEW, WELLBEING_SERVICE_CARD } from "@ids";
import { TheOwlFenceIcon } from "@atoms/icon/the-owl-fence-icon";
import { YugiWellBeingIcon } from "@atoms/icon/yugi-wellbeing-icon";
import { ChipProps } from "@components/molecules/chip-list/chip-list";
import WellBeingServiceCard from "./sub-components/wellbeing-service-card";
import WellBeingServiceCardSkeleton from "./sub-components/wellbeing-service-card-skeleton";
import WellBeingServiceEmptyList from "./sub-components/wellbeing-service-empty-list";
import WellbeingHeader from "./sub-components/wellbeing-header";
import FirstTimeContentLocationSelection from "../member/content-location/first-time-content-location-selection";
import { BusinessAccountState } from "@components/molecules/business-picker";
interface IProps {
  loading: boolean;
  userFirstName: string;
  categoryChips: ChipProps[];
  cards: GetWellbeingHubItemsQuery["listItems"];
  location: GetWellbeingHubItemsQuery["location"];
  selectedCategory?: string;
  handleWellbeingLocationPress: () => void;
  handleClose: () => void;
  businessAccountState: BusinessAccountState;
}

const WellBeingHub: FC<IProps> = ({
  loading,
  categoryChips,
  userFirstName,
  cards,
  handleClose,
  handleWellbeingLocationPress,
  location,
  businessAccountState,
}) => {
  // can't use negation as we need to ignore null and undefined
  const shouldShowFirstTimeModal = location?.hasUserSelectedContentLocation === false;

  const isEmpty = !cards?.length && !loading && !shouldShowFirstTimeModal;

  if (isEmpty) {
    return (
      <View style={styles.flex} testID={WELLBEING_HUB_SCREEN}>
        <GenericHeadingPad />
        <View style={styles.header}>
          <WellbeingHeader
            title={t("screens.wellbeing_hub.header_title", { name: userFirstName })}
            description={t("screens.wellbeing_hub.header_description")}
            icon={<YugiWellBeingIcon />}
            businessAccountState={businessAccountState}
          />
        </View>
        <WellBeingServiceEmptyList />

        <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
      </View>
    );
  }

  return (
    <View style={styles.flex} testID={WELLBEING_HUB_SCREEN}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} testID={WELLBEING_HUB_SCROLL_VIEW} stickyHeaderIndices={[1]}>
        <View style={styles.header}>
          <WellbeingHeader
            title={t("screens.wellbeing_hub.header_title", { name: userFirstName })}
            description={t("screens.wellbeing_hub.header_description")}
            icon={<YugiWellBeingIcon />}
            businessAccountState={businessAccountState}
          />
        </View>
        <View style={styles.categoryChipsContainer}>
          <ChipList chips={categoryChips} style={styles.categoryChips} />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.cardWrapper}>
            {loading ? (
              <WellBeingServiceCardSkeleton limit={5} />
            ) : (
              cards?.map((card, index) => (
                <WellBeingServiceCard
                  key={card.id}
                  card={card}
                  testID={WELLBEING_SERVICE_CARD(card.title, index.toString())}
                />
              ))
            )}
          </View>
        </View>
        <View style={styles.owl}>
          <TheOwlFenceIcon />
        </View>
      </ScrollView>

      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
      <FirstTimeContentLocationSelection
        isActive={shouldShowFirstTimeModal}
        contentLocation={location?.location}
        contentLocationLabel={location?.locationLabel}
        onChangeContentLocationPress={handleWellbeingLocationPress}
        placement="wellbeing_hub"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  header: {
    paddingTop: Style.adjust(32),
    paddingStart: Style.adjust(24),
    marginBottom: Style.adjust(24),
  },
  categoryChipsContainer: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
  },
  categoryChips: {
    paddingStart: Style.adjust(27),
  },
  wrapper: {
    paddingStart: Style.adjust(24),
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
    marginTop: Style.adjust(10),
    alignItems: "center",
  } as ViewStyle,
  owl: {
    alignItems: "center",
    marginVertical: 40,
  } as ViewStyle,
});

export default WellBeingHub;
