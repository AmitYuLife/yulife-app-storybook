import React, { FC, memo, useCallback } from "react";
import { View } from "react-native";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { useSelector, useDispatch } from "react-redux";
import { getUserAvatar } from "@redux/user/user.selectors";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { startSmokingStreak } from "@redux/health-smoking/health-smoking.actions";
import { TextTemplate } from "@atoms";
import { Avatar, Button } from "@molecules";
import { Colours } from "@styles";
import { YUMOJI_AVATAR_SIZE, styles } from "./smoking.styles";
import { SMOKING_HEADER_BUTTON, SMOKING_HEADER_DAYS } from "@ids";

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
          <View style={styles.headerText} testID={SMOKING_HEADER_DAYS(smokingState.currentStreak)}>
            <TextTemplate type="b1b" textAlign="left" numberOfLines={2}>
              {smokingState.heading}
            </TextTemplate>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            testID={SMOKING_HEADER_BUTTON}
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
