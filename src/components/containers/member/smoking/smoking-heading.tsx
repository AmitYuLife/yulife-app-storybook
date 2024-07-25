import React, { FC, memo, useCallback } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { styles } from "./smoking.styles";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { Avatar, Button } from "@components/molecules";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { startSmokingStreak } from "@redux/health-smoking/health-smoking.actions";
import { useSelector } from "react-redux";
import { getUserAvatar } from "@redux/user/user.selectors";
import { useDispatch } from "react-redux";

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
      <View style={styles.yumojiHeadBorderContainer}>
        <View style={styles.yumojiHeadBorder} />
      </View>
      <View style={styles.headerWrapper}>
        <View style={styles.headerTitle}>
          <View style={styles.headerText}>
            <TextTemplate type="h3" textAlign="left" numberOfLines={2}>
              {smokingState.heading}
            </TextTemplate>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            testID="smoking-header-button"
            size={"Fill"}
            onPress={onHeaderButtonPress}
            translatedLabel={smokingState.headerButtonText}
          />
        </View>
      </View>
      <View style={styles.yumojiHeadContainer}>
        <Avatar uri={avatar?.avatarRemoteFiles?.pngMini} showEmpty={true} size={80} />
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
