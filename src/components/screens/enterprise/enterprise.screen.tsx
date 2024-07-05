import React, { RefObject, memo, useMemo } from "react";
import { ImageSourcePropType, ScrollView, StyleSheet, View } from "react-native";
import ImpactListItem, { IImpactListItem } from "@organisms/impact-list-item/impact-list-item";
import { Style, TOP_BAR } from "@styles";
import { EnterpriseRewardHeader, NavBar, TopBar } from "@organisms";
import { IEnterpriseRewardProgressBar } from "@organisms/enterprise-reward-progress-bar/enterprise-reward-progress-bar";
import { IEnterpriseRewardItem } from "@organisms/enterprise-reward-item/enterprise-reward-item";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { LottieView } from "@molecules";
import Lottie from "lottie-react-native";

interface IProps {
  title: string;
  description: string;
  backgroundImage: ImageSourcePropType;
  impact: {
    title: string;
    description: string;
    items: IImpactListItem[];
  };
  progressStatus: IEnterpriseRewardProgressBar;
  rewards: IEnterpriseRewardItem[];
  onComplete: () => void;
  onLeftMenuPress: () => void;
  lottieRef: RefObject<Lottie>;
  showCoinAnimation: boolean;
}

const EnterpriseScreen = ({
  title,
  description,
  backgroundImage,
  impact,
  progressStatus,
  rewards,
  onLeftMenuPress,
  lottieRef,
  showCoinAnimation,
}: IProps) => {
  const leftIcons = useMemo(
    () => [
      {
        icon: LeftIcon.MENU,
        onPress: onLeftMenuPress,
        style: { marginRight: Style.adjust(16) },
      },
    ],
    [onLeftMenuPress]
  );

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
        <LottieView
          style={styles.lottie}
          source={{ uri: "https://lottie.host/5cee1bea-847e-48c9-859e-79e0f72ebb4b/gZle85SgAu.json" }}
          autoPlay={false}
          loop={false}
          resizeMode="cover"
          ref={lottieRef}
        />
        {/* TODO: Replace with flashlist */}
        <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false}>
          {impact.items.map((item) => (
            <View key={item.title} style={styles.impactItem}>
              <ImpactListItem {...item} showAnimation={showCoinAnimation} />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.topbarWrapper}>
        <TopBar type={"white"} leftIcons={leftIcons} />
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
  },
  impactTitle: {
    marginBottom: Style.adjust(16),
  },
  impactItem: {
    marginBottom: Style.adjust(16),
  },
  contentContainerStyle: {
    paddingTop: Style.adjust(12),
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
    right: Style.adjust(-30),
    top: Style.adjust(-24),
    width: Style.adjust(130),
    height: Style.adjust(130),
  },
});

export default memo(EnterpriseScreen);
