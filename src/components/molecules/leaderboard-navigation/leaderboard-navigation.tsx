import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { DropdownSolidIcon } from "@atoms/icon/dropdown-solid-icon";
import { Style } from "@styles";
import { DuelsIcon } from "@atoms/icon/duels-icon";
import { t } from "@locale";
import { DUELS_BUTTON, LEADERBOARD_DROPDOWN, LEADERBOARD_TITLE, LEADERBOARD_TOP_SCREEN, SEARCH_BUTTON } from "@ids";
import { truncate } from "@utils";
import { SearchIcon } from "@atoms/icon/search-icon";
import { ISocialGroup } from "@redux/leaderboards/leaderboards.types";
import TouchableOpacityWithDelay from "../touchable-opacity-delay/touchable-opacity-delay";
import { AvatarFrameIcon } from "@atoms/icon/avatar-frame-icon";

const colour = "#345E8C";

interface IProps {
  onLeftPress: () => void;
  onDuelPress: () => void;
  onSearchPress?: () => void;
  onOpenFrames?: () => void;
  showDuels: boolean;
  showSearch?: boolean;
  activeSocialGroup: ISocialGroup;
  description: string;
}

const LeaderboardNavigation = ({
  onLeftPress,
  onDuelPress,
  onOpenFrames,
  onSearchPress,
  activeSocialGroup,
  showDuels,
  showSearch,
  description,
}: IProps) => (
  <View style={styles.wrapper} testID={LEADERBOARD_TOP_SCREEN}>
    {!activeSocialGroup?.name ? null : (
      <TouchableOpacityWithDelay style={styles.info} onPress={onLeftPress}>
        <View style={styles.wrapper}>
          <TextTemplate type="l1b" color={colour} testID={LEADERBOARD_TITLE(activeSocialGroup.name)}>
            {truncate(activeSocialGroup?.name || "", 16)}
          </TextTemplate>
          <View style={styles.dropdown} testID={LEADERBOARD_DROPDOWN}>
            <DropdownSolidIcon colour={colour} width={8} height={8} />
          </View>
        </View>
        <View>
          <TextTemplate type="l1" color={colour} testID={LEADERBOARD_DROPDOWN}>
            {description}
          </TextTemplate>
        </View>
      </TouchableOpacityWithDelay>
    )}
    <View style={styles.buttonsWrapper}>
      {onOpenFrames ? (
        <TouchableOpacityWithDelay style={styles.search} onPress={onOpenFrames} testID={DUELS_BUTTON}>
          <AvatarFrameIcon />
        </TouchableOpacityWithDelay>
      ) : null}
      {!showSearch ? null : (
        <TouchableOpacityWithDelay style={styles.search} onPress={onSearchPress} testID={SEARCH_BUTTON}>
          <SearchIcon colour={colour} />
        </TouchableOpacityWithDelay>
      )}
      {!showDuels ? null : (
        <TouchableOpacityWithDelay style={styles.duels} onPress={onDuelPress} testID={DUELS_BUTTON}>
          <View style={styles.duelsIcon}>
            <DuelsIcon colour={colour} />
          </View>
          <TextTemplate type="l1b" color={colour}>
            {t("screens.leaderboard.podium.duels_button")}
          </TextTemplate>
        </TouchableOpacityWithDelay>
      )}
    </View>
  </View>
);

// here for now until we refactor Colours
const backgroundColour = "#BBD8F6";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  info: {
    flexDirection: "column",
  },
  dropdown: {
    backgroundColor: backgroundColour,
    borderRadius: 100,
    width: Style.adjust(20),
    height: Style.adjust(20),
    justifyContent: "center",
    alignItems: "center",
    marginStart: Style.adjust(8),
    paddingTop: Style.adjust(2),
  },
  buttonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0,
    gap: Style.adjust(8),
  },
  duels: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: backgroundColour,
    paddingTop: Style.adjust(8),
    paddingBottom: Style.adjust(8),
    paddingStart: Style.adjust(10),
    paddingEnd: Style.adjust(10),
  },
  search: {
    borderRadius: 24,
    backgroundColor: backgroundColour,
    padding: Style.adjust(6),
  },
  duelsIcon: {
    marginEnd: Style.adjust(8),
  },
});

export default memo(LeaderboardNavigation);
