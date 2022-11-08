import React, { FC, memo, useCallback } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import { getChallengesStatus, getCurrentLevel, getNextLevelAvailableAt } from "@redux/levels/levels.selectors";
import styles from "./yuniversal-quest-screen.styles";
import { NavBar, TopBar } from "@organisms";
import { YuniversalQuestSvg } from "./yuniversal-quest-svg";
import { LevelBubble } from "./level/level-bubble";
import { IConnectedScreenProps } from "@app/typings";
import { GetQuestMap_levels } from "@graphql/_core/schema";
import { getLevelsProps } from "./yuniversal-quest-screen.helpers";
import { QUESTS_SCREEN_YUNIVERSAL } from "@ids";
import { getUserAvatar } from "@redux/user/user.selectors";
import { submitUnityAction } from "@redux/levels/levels.actions";

const BACKGROUND_ANIMATION = require("@assets/yuniversal/yuniversal_quest_map_1.json");

interface IProps extends IConnectedScreenProps {
  componentId: string;
  yuniversalLevel: number;
  yuniversalMap: number;
  levelList: GetQuestMap_levels[];
}

const _YuniversalQuestsScreen: FC<IProps> = ({
  componentId,
  yuniversalLevel,
  yuniversalMap,
  levelList,
  onLeftMenuPress,
}) => {
  const dispatch = useDispatch();
  const challengesStatus = useSelector(getChallengesStatus);
  const nextLevelAvailableAt = useSelector(getNextLevelAvailableAt);
  const currentLevel = useSelector(getCurrentLevel);
  const avatar = useSelector(getUserAvatar);

  const submitUnity = useCallback(
    (levelId: string) => {
      dispatch(submitUnityAction({ levelId }));
    },
    [dispatch]
  );

  const levelMap = getLevelsProps(
    componentId,
    challengesStatus,
    yuniversalLevel,
    yuniversalMap,
    levelList,
    nextLevelAvailableAt,
    currentLevel,
    { uri: avatar?.avatarRemoteFiles?.pngMini },
    submitUnity
  );

  return (
    <View style={styles.container} testID={QUESTS_SCREEN_YUNIVERSAL(yuniversalLevel)}>
      <LottieView
        resizeMode="cover"
        style={styles.backgroundLottie}
        source={BACKGROUND_ANIMATION}
        autoPlay={true}
        loop={true}
      />
      {!levelMap?.length ? null : (
        <View style={styles.levelsWrapper}>
          <YuniversalQuestSvg width={styles.backgroundLottie.width} height={styles.backgroundLottie.height}>
            {levelMap.map((level) => (
              <LevelBubble {...level} key={level.text} />
            ))}
          </YuniversalQuestSvg>
        </View>
      )}
      <View style={styles.topBarWrapper}>
        <TopBar type="white" onPressLeftIcon={onLeftMenuPress} />
      </View>
      <NavBar activeIndex={1} />
    </View>
  );
};

export const YuniversalQuestsScreen = memo(_YuniversalQuestsScreen);
