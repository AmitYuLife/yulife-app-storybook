import React, { memo } from "react";
import { Podium } from "@organisms";
import { Style } from "@styles";
import { Animated, View } from "react-native";
import { LeaderboardNavigation, TouchableOpacityWithDelay, Yumoji } from "@molecules";
import { QuestionOutlineIcon } from "@atoms/icon/question-outline-icon";
import { ITop3, styles } from "./leaderboard.screen";
import { TrophyIcon } from "@atoms/icon/trophy-icon";
import { ISocialGroup } from "@redux/leaderboards/leaderboards.types";
import { LEADERBOARD_INFO_BUTTON } from "@ids";
import { isRTL } from "@locale";

interface IProps {
  showTrophy: boolean;
  ranks: ITop3;
  showDuels: boolean;
  showSearch: boolean;
  onLeftNavigationPress: () => void;
  onDuelPress: () => void;
  onSearchPress: () => void;
  enableAnimatedRays?: boolean;
  onOpenFrames?: () => void;
  onQuestionMarkPress: () => void;
  activeSocialGroup: ISocialGroup;
  navigationDescription: string;
  opacity: Animated.AnimatedInterpolation<string | number>;
}

const LeaderboardListHeaderComponent = ({
  showTrophy,
  ranks,
  showDuels,
  showSearch,
  activeSocialGroup,
  onLeftNavigationPress,
  enableAnimatedRays,
  onDuelPress,
  onOpenFrames,
  onSearchPress,
  navigationDescription,
  onQuestionMarkPress,
  opacity,
}: IProps) => (
  <View style={styles.headerWrapper}>
    <View style={[styles.podiumWrapper]}>
      <Animated.View style={[styles.podium, { opacity }]}>
        <Podium enableAnimatedRays={enableAnimatedRays} />
      </Animated.View>
      <Animated.View style={[styles.avatarsWrapper, { opacity }]}>
        <View style={[styles.avatars, isRTL() ? styles.avatarTop3 : styles.avatarTop2]}>
          {showTrophy || !ranks.top2 ? null : <Yumoji uri={ranks.top2} {...AVATAR_PROPS} />}
        </View>
        <View style={styles.avatars}>
          {showTrophy ? (
            <View style={styles.trophy}>
              <TrophyIcon />
            </View>
          ) : !ranks.top1 ? null : (
            <Yumoji uri={ranks.top1} {...AVATAR_PROPS} />
          )}
        </View>
        <View style={[styles.avatars, isRTL() ? styles.avatarTop2 : styles.avatarTop3]}>
          {showTrophy || !ranks.top3 ? null : <Yumoji uri={ranks.top3} {...AVATAR_PROPS} />}
        </View>
      </Animated.View>
      <View style={styles.navigation}>
        <LeaderboardNavigation
          showDuels={showDuels}
          showSearch={showSearch}
          activeSocialGroup={activeSocialGroup}
          onOpenFrames={onOpenFrames}
          onLeftPress={onLeftNavigationPress}
          onDuelPress={onDuelPress}
          onSearchPress={onSearchPress}
          description={navigationDescription}
        />
      </View>
    </View>
    <TouchableOpacityWithDelay
      style={styles.podiumQuestionMark}
      onPress={onQuestionMarkPress}
      testID={LEADERBOARD_INFO_BUTTON}
    >
      <QuestionOutlineIcon colour="#345E8C" />
    </TouchableOpacityWithDelay>
  </View>
);

const AVATAR_PROPS = {
  width: Style.adjust(72),
  height: Style.adjust(146),
  suppressLoadingUi: true,
};

export default memo(LeaderboardListHeaderComponent);
