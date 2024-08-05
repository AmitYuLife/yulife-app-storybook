import { Stack } from "@atoms";
import { EnterpriseRewardHeader, NavBar } from "@organisms";
import { IEnterpriseRewardItem } from "@organisms/enterprise-reward-item/enterprise-reward-item";
import DonationListItem, { IDonationListItem } from "@organisms/donation-list-item/donation-list-item";
import { Style, TOP_BAR } from "@styles";
import React, { memo } from "react";
import { ImageSourcePropType, ScrollView, StyleSheet, View } from "react-native";
import { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";

interface IProps {
  title: string;
  description: string;
  backgroundImage: ImageSourcePropType;
  donation: {
    title: string;
    description: string;
    items: IDonationListItem[];
  };
  progressStatus: IBattlePassProgressBar;
  rewards: IEnterpriseRewardItem[];
  onComplete: () => void;
  showCoinAnimation: boolean;
}

const EnterpriseScreen = ({
  title,
  description,
  backgroundImage,
  donation,
  progressStatus,
  rewards,
  showCoinAnimation,
}: IProps) => {
  return (
    <View style={styles.wrapper}>
      <EnterpriseRewardHeader
        title={title}
        description={description}
        backgroundImage={backgroundImage}
        step={progressStatus?.step}
        items={rewards}
        progressStatus={progressStatus}
      />
      <View style={styles.container}>
        {/* TODO: Replace with flashlist */}
        <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false}>
          <Stack gap={Style.adjust(20)}>
            {donation.items.map((item) => (
              <DonationListItem {...item} showAnimation={showCoinAnimation} key={item.title} />
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
    marginTop: 30,
  },
  impactTitle: {
    marginBottom: Style.adjust(16),
  },
  impactItem: {
    marginBottom: Style.adjust(16),
  },
  contentContainerStyle: {
    paddingTop: Style.adjust(15),
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

export default memo(EnterpriseScreen);
