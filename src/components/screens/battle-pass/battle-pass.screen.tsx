import React, { memo } from "react";
import { ImageSourcePropType, ScrollView, StyleSheet, View } from "react-native";
import { Stack } from "@atoms";
import { BattlePassHeader, NavBar } from "@organisms";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import DonationListItem, { IDonationListItem } from "@organisms/donation-list-item/donation-list-item";
import { Style, TOP_BAR } from "@styles";
import { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";

interface IProps {
  title: string;
  description: string;
  backgroundImage: ImageSourcePropType;
  donationTemplates: IDonationListItem[];
  progressStatus: IBattlePassProgressBar;
  rewards: IBattlePassListItem[];
  onComplete: () => void;
  showCoinAnimation: boolean;
}

const BattlePassScreen = ({
  title,
  description,
  backgroundImage,
  donationTemplates,
  progressStatus,
  rewards,
  showCoinAnimation,
}: IProps) => {
  return (
    <View style={styles.wrapper}>
      <BattlePassHeader
        title={title}
        description={description}
        backgroundImage={backgroundImage}
        step={progressStatus?.step}
        items={rewards}
        progressStatus={progressStatus}
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false}>
          <Stack gap={Style.adjust(20)}>
            {donationTemplates.map((item) => (
              <DonationListItem {...item} showAnimation={showCoinAnimation} key={item.id} />
            ))}
          </Stack>
        </ScrollView>
      </View>
      <NavBar activeIndex={4} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: Style.adjust(16),
    flex: 1,
    paddingBottom: Style.adjust(80),
    marginTop: Style.adjust(30),
  },
  impactTitle: {
    marginBottom: Style.adjust(16),
  },
  impactItem: {
    marginBottom: Style.adjust(16),
  },
  contentContainerStyle: {
    paddingTop: Style.adjust(15),
    paddingBottom: Style.adjust(30),
  },
  actionContainer: {
    paddingHorizontal: Style.adjust(16),
  },
  contentInset: {
    top: 0,
    left: 0,
    bottom: Style.adjust(180),
    right: 0,
  },
  topbarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
  },
  lottie: {
    position: "absolute",
    right: Style.adjust(-15),
    top: Style.adjust(-100),
    width: Style.adjust(130),
    height: Style.adjust(130),
  },
});

export default memo(BattlePassScreen);
