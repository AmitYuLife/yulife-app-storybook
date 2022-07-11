import React, { FC, memo } from "react";
import { View, Image } from "react-native";
import { useSelector } from "react-redux";
import { getShowChestCopy } from "@redux/copy/copy.selectors";
import { getChallengesStatus, getNextLevelAvailableAt } from "@redux/levels/levels.selectors";
import styles from "./yuniversal-quest-screen.styles";
import { NavBar, TopBar } from "@organisms";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";
import media from "@styles/media";
import { YuniversalQuestSvg } from "./yuniversal-quest-svg";
import { LevelBubble } from "./level/level-bubble";
import { IConnectedScreenProps } from "@app/typings";
import { GetQuestMapLevelList_getQuestMapLevelList as QuestMapLevel } from "@graphql/_core/schema";
import { getLevelsProps } from "./yuniversal-quest-screen.helpers";
import { QUESTS_SCREEN_YUNIVERSAL } from "@ids";

const BACKGROUND_IMAGE = require("@assets/yuniversal/yuniversal_quest_map_1.png");
const SHOW_TITLE = Style.DEVICE_HEIGHT >= media.DEVICES.iPhone12.height;

interface IProps extends IConnectedScreenProps {
  componentId: string;
  yuniversalLevel: number;
  yuniversalMap: number;
  levelList: QuestMapLevel[];
}

const _YuniversalQuestsScreen: FC<IProps> = ({
  componentId,
  yuniversalLevel,
  yuniversalMap,
  levelList,
  onLeftMenuPress,
}) => {
  const showChestModalCopy = useSelector(getShowChestCopy);
  const challengesStatus = useSelector(getChallengesStatus);
  const nextLevelAvailableAt = useSelector(getNextLevelAvailableAt);

  const levelMap = getLevelsProps(
    componentId,
    showChestModalCopy,
    challengesStatus,
    yuniversalLevel,
    yuniversalMap,
    levelList,
    nextLevelAvailableAt
  );

  return (
    <View style={styles.container} testID={QUESTS_SCREEN_YUNIVERSAL(yuniversalLevel)}>
      <View style={styles.backgroundImage} />
      <Image resizeMode="cover" style={styles.backgroundImage} source={BACKGROUND_IMAGE} />
      {!levelMap?.length ? null : (
        <YuniversalQuestSvg width={styles.backgroundImage.width} height={styles.backgroundImage.height}>
          {levelMap.map((level) => (
            <LevelBubble {...level} key={level.text} />
          ))}
        </YuniversalQuestSvg>
      )}
      {!SHOW_TITLE ? null : (
        <View style={styles.titleWrapper}>
          <TextTemplate type="b1" color="white" textAlign="center">
            The Yuniversal
          </TextTemplate>
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
