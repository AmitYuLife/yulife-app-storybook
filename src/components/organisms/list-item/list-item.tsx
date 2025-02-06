import React, { memo, ReactNode, useCallback, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Image, SkeletonLoading, TextTemplate } from "@atoms";
import { Style, Colours, TemplateTextType } from "@styles";
import { LeaderboardPositionIcon } from "@atoms/icon/leaderboard-position-icon";
import Avatar from "@components/molecules/avatar/avatar";
import { TouchableOpacityWithDelay } from "@molecules";
import { AvatarHeadIcon } from "@atoms/icon/avatar-head-icon";
import { DISABLED_USER_REASON, HIGHLIGHTED_LEADERBOARD_NAME, LEADERBOARD_EMPLOYEE_NAME, LEADERBOARD_NAME } from "@ids";
import { IAvatarFrame } from "@redux/leaderboards/leaderboards.types";
import { ListItemRightIcon } from "./list-item-right-icon";

type TypeProps =
  | { type: "leaderboard"; position: number; score: string }
  | { type: "search"; position?: never; score?: never };

interface CommonProps<T> {
  name: string;
  uri: string;
  type: "leaderboard" | "search";
  onPress?: (data?: T) => void;
  data?: T;
  theme?: "active" | "highlighted" | "bold";
  hideAvatar?: boolean;
  isLoading?: boolean;
  frame?: IAvatarFrame;
  showYuCoin?: boolean;
  showNewMedal?: boolean;
  rightIcon?: ReactNode;
  disabled?: boolean;
  disabledReason?: string;
  delay?: number;
}

interface IActiveOrHighlighted {
  colour: string;
  type: TemplateTextType;
  styles: ViewStyle;
}

type IProps<T> = CommonProps<T> & TypeProps;

const POSITION_4 = 4;
const DISABLED_OPACITY = 0.5;

export const ListItem = <T,>({
  name,
  uri,
  hideAvatar,
  type,
  position,
  score,
  onPress,
  isLoading,
  theme,
  data,
  frame,
  showYuCoin,
  showNewMedal,
  rightIcon,
  disabled,
  delay,
  disabledReason,
}: IProps<T>) => {
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

      case "bold": {
        return {
          colour: Colours.sudoku.gridThickColor,
          type: "b2b",
          styles: {},
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

  const leaderboardProps = useMemo(() => {
    if (type === "leaderboard") {
      return {
        color: isActiveOrHighlighted.colour,
        type: isActiveOrHighlighted.type,
        label: score,
      };
    }

    return null;
  }, [type, isActiveOrHighlighted, score]);

  const handleOnPress = useCallback(() => (onPress ? onPress(data) : null), [data, onPress]);

  const nameLoadingStyle = useMemo(
    () => ({
      width: position % 2 ? 160 : 120,
      height: 20,
      borderRadius: 100,
    }),
    [position]
  );

  const disabledStyle = {
    opacity: disabled || disabledReason ? DISABLED_OPACITY : 1,
  };

  if (isLoading) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.avatar}>
          <SkeletonLoading style={styles.loadingPosition} />
        </View>
        {hideAvatar ? null : (
          <View style={styles.avatar}>
            <AvatarHeadIcon colour={Colours.metallic.m100} />
          </View>
        )}
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
      disabled={!onPress || disabled || !!disabledReason}
      onPress={handleOnPress}
      testID={LEADERBOARD_NAME(name, score, position, type)}
      delay={delay}
    >
      <View style={[styles.wrapper, isActiveOrHighlighted.styles]}>
        {!leaderboardProps ? null : (
          <View style={[styles.position, disabledStyle]}>
            {position < POSITION_4 ? (
              <LeaderboardPositionIcon position={position} showNewMedal={showNewMedal} />
            ) : (
              <TextTemplate textAlign="center" color={isActiveOrHighlighted.colour} type={isActiveOrHighlighted.type}>
                {position}
              </TextTemplate>
            )}
          </View>
        )}
        {hideAvatar ? null : (
          <View style={[styles.avatar, disabledStyle]}>
            <Avatar size="small" uri={uri} frame={frame} />
          </View>
        )}
        <View
          style={styles[type]}
          testID={HIGHLIGHTED_LEADERBOARD_NAME(name, score, position, isActiveOrHighlighted.colour)}
        >
          <View style={disabledStyle}>
            <TextTemplate
              color={isActiveOrHighlighted.colour}
              type={isActiveOrHighlighted.type}
              numberOfLines={1}
              testID={LEADERBOARD_EMPLOYEE_NAME(name)}
            >
              {name}
            </TextTemplate>
          </View>
          {disabledReason ? (
            <TextTemplate
              numberOfLines={1}
              type="l2"
              color={Colours.status.wa300}
              testID={DISABLED_USER_REASON(disabledReason)}
            >
              {disabledReason}
            </TextTemplate>
          ) : null}
        </View>
        <View style={[styles.score, disabledStyle]}>
          {rightIcon || <ListItemRightIcon template={leaderboardProps} />}
          {!showYuCoin ? null : (
            <View style={styles.yucoin}>
              <Image
                source={require("@assets/icons/yucoin.png")}
                width={Style.adjust(24)}
                height={Style.adjust(24)}
                suppressLoadingUi={true}
              />
            </View>
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
    flexDirection: "row",
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
  yucoin: {
    marginLeft: Style.adjust(4),
  },
});

export default memo(ListItem);
