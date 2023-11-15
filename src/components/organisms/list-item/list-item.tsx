import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { SkeletonLoading, TextTemplate } from "@atoms";
import { Style, Colours } from "@styles";
import { ArrowIcon } from "@atoms/icon/arrow";
import { LeaderboardPositionIcon } from "@atoms/icon/leaderboard-position-icon";
import Avatar from "@components/molecules/avatar/avatar";
import { TouchableOpacityWithDelay } from "@molecules";
import { ITextTemplateType } from "@atoms/text/text-template";
import { AvatarHeadIcon } from "@atoms/icon/avatar-head-icon";
import { LEADERBOARD_NAME } from "@ids";

type TypeProps =
  | { type: "leaderboard"; position: number; score: string }
  | { type: "search"; position?: never; score?: never };

interface CommonProps<T> {
  name: string;
  uri: string;
  type: "leaderboard" | "search";
  onPress?: (data?: T) => void;
  data?: T;
  theme?: "active" | "highlighted";
  isLoading?: boolean;
}

interface IActiveOrHighlighted {
  colour: string;
  type: ITextTemplateType;
  styles: ViewStyle;
}

type IProps<T> = CommonProps<T> & TypeProps;

const POSITION_4 = 4;

export const ListItem = <T,>({ name, uri, type, position, score, onPress, isLoading, theme, data }: IProps<T>) => {
  const isLeaderboard = useMemo(() => type === "leaderboard", [type]);
  const isActiveOrHighlighted = useMemo((): IActiveOrHighlighted => {
    switch (theme) {
      case "active": {
        return {
          colour: Colours.neutral.white,
          type: "b2b",
          styles: styles.active,
        };
      }

      case "highlighted": {
        return {
          colour: "#464647",
          type: "b2",
          styles: styles.highlighted,
        };
      }

      default: {
        return {
          colour: Colours.sudoku.gridThickColor,
          type: "b2",
          styles: {},
        };
      }
    }
  }, [theme]);

  const handleOnPress = useCallback(() => (onPress ? onPress(data) : null), [data, onPress]);

  const nameLoadingStyle = useMemo(
    () => ({
      width: position % 2 ? 160 : 120,
      height: 20,
      borderRadius: 100,
    }),
    [position]
  );

  if (isLoading) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.avatar}>
          <SkeletonLoading style={styles.loadingPosition} />
        </View>
        <View style={styles.avatar}>
          <AvatarHeadIcon colour={Colours.metallic.m100} />
        </View>
        <View>
          <SkeletonLoading style={nameLoadingStyle} />
        </View>
        <View style={styles.score}>
          <SkeletonLoading style={styles.loadingScore} />
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacityWithDelay
      disabled={!onPress}
      onPress={handleOnPress}
      testID={LEADERBOARD_NAME(name, score, position, type)}
    >
      <View style={[styles.wrapper, isActiveOrHighlighted.styles]}>
        {!isLeaderboard ? null : (
          <View style={styles.position}>
            {position < POSITION_4 ? (
              <LeaderboardPositionIcon position={position} />
            ) : (
              <TextTemplate textAlign="center" color={isActiveOrHighlighted.colour} type={isActiveOrHighlighted.type}>
                {position}
              </TextTemplate>
            )}
          </View>
        )}
        <View style={styles.avatar}>
          <Avatar size="small" uri={uri} />
        </View>
        <View style={styles[type]}>
          <TextTemplate color={isActiveOrHighlighted.colour} type={isActiveOrHighlighted.type} numberOfLines={1}>
            {name}
          </TextTemplate>
        </View>
        <View style={styles.score}>
          {isLeaderboard ? (
            <TextTemplate color={isActiveOrHighlighted.colour} type={isActiveOrHighlighted.type}>
              {score}
            </TextTemplate>
          ) : (
            <ArrowIcon />
          )}
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Style.adjust(2),
    paddingBottom: Style.adjust(3),
    paddingRight: Style.adjust(8),
    marginBottom: Style.adjust(8),
  },
  avatar: {
    marginRight: Style.adjust(9),
  },
  position: {
    alignItems: "center",
    width: Style.adjust(44),
  },
  score: {
    position: "absolute",
    right: 0,
    paddingRight: Style.adjust(8),
  },
  leaderboard: {
    flex: 0.7,
  },
  search: {
    flex: 0.9,
  },
  highlighted: {
    backgroundColor: "#D5ECFF",
    borderRadius: 8,
  },
  active: {
    backgroundColor: "#6AA3DC",
    borderRadius: 8,
    height: Style.adjust(56),
  },
  loadingPosition: {
    width: Style.adjust(20),
    height: Style.adjust(20),
    borderRadius: 100,
  },
  loadingScore: {
    width: Style.adjust(60),
    height: Style.adjust(15),
    borderRadius: 100,
  },
});

export default memo(ListItem);
