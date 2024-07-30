import React, { FC, memo, useCallback } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { YUMOJI_AVATAR_SIZE, styles } from "./smoking.styles";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { Avatar, Button } from "@components/molecules";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { startSmokingStreak } from "@redux/health-smoking/health-smoking.actions";
import { useSelector } from "react-redux";
import { getUserAvatar } from "@redux/user/user.selectors";
import { useDispatch } from "react-redux";
import { Colours } from "@styles";

interface Props {
  smokingState: HealthSmokingState;
}

export const SmokingHeading: FC<Props> = memo(({ smokingState }) => {
  const dispatch = useDispatch();
  const avatar = useSelector(getUserAvatar);

  const onStartStreak = useCallback(() => {
    dispatch(startSmokingStreak());
  }, []);

  // TODO: open commitment screen instead of starting streak
  const onHeaderButtonPress = smokingState?.isActive ? onCravingPress : onStartStreak;

  return (
    <View>
      <View style={styles.yumojiHeadOuterBorder} />
      <View style={styles.headerWrapper}>
        <View style={styles.headerTitle}>
          <View style={styles.headerText}>
            <TextTemplate type="b1b" textAlign="left" numberOfLines={2}>
              {smokingState.heading}
            </TextTemplate>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            testID="smoking-header-button"
            size="Narrow"
            onPress={onHeaderButtonPress}
            translatedLabel={smokingState.headerButtonText}
          />
        </View>
      </View>
      <View style={styles.yumojiHeadContainer}>
        <View style={styles.yumojiHeadInnerBorder}>
          <Avatar
            uri={avatar?.avatarRemoteFiles?.pngMini}
            showEmpty={true}
            size={YUMOJI_AVATAR_SIZE}
            backgroundColor={Colours.neutral.n20}
          />
        </View>
      </View>
    </View>
  );
});

const onCravingPress = () =>
  Navigation.push(ROUTES.smoking, {
    component: {
      id: ROUTES.debugPlayground2048Selector,
      name: ROUTES.debugPlayground2048Selector,
    },
  });
