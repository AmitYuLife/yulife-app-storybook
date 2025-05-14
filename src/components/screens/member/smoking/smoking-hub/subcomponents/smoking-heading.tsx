import React, { FC, memo, useMemo, useState } from "react";
import { View } from "react-native";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { useDispatch, useSelector } from "react-redux";
import { getUserAvatar } from "@redux/user/user.selectors";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { TextTemplate } from "@atoms";
import { Avatar, Button } from "@molecules";
import { Colours } from "@styles";
import { styles, YUMOJI_AVATAR_SIZE } from "../smoking-hub.styles";
import { SMOKING_HEADER_BUTTON, SMOKING_HEADER_DAYS } from "@ids";
import { Sizes } from "@components/molecules/button/button.types";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

interface Props {
  smokingState: HealthSmokingState;
  navigateToCommitmentScreen: (smokingState: HealthSmokingState) => void;
}

export const SmokingHeading: FC<Props> = memo(({ smokingState, navigateToCommitmentScreen }) => {
  const avatar = useSelector(getUserAvatar);
  const dispatch = useDispatch();
  const [introModalShown, setIntroModalShown] = useState(false);

  const { onHeaderButtonPress, headerButtonSize } = useMemo(() => {
    const buttonSize = (smokingState?.smokingStreakCarousel ? "Narrow" : "Fill") as Sizes;

    if (smokingState?.isActive) {
      const { image: introModalImage, ...introModal } = smokingState?.gameIntroModal || {};
      const gameIntroModal =
        smokingState?.gameIntroModal && !introModalShown
          ? {
              ...introModal,
              image: introModalImage?.image?.uri
                ? {
                    uri: introModalImage.image.uri,
                    width: introModalImage.width,
                    height: introModalImage.height,
                  }
                : undefined,
            }
          : undefined;

      return {
        onHeaderButtonPress: () => {
          dispatch(
            logMixpanelEventActionCreator("button_pressed", {
              name: "distraction_game",
              button_id: "distraction_game",
              location: "smoking_hub",
            })
          );
          setIntroModalShown(true);
          Navigation.push(ROUTES.smoking, {
            component: {
              id: ROUTES.game2048,
              name: ROUTES.game2048,
              passProps: {
                gameIntroModal,
              },
            },
          });
        },
        headerButtonSize: buttonSize,
      };
    }

    return {
      onHeaderButtonPress: () => navigateToCommitmentScreen(smokingState),
      headerButtonSize: buttonSize,
    };
  }, [smokingState, introModalShown, navigateToCommitmentScreen]);

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
            size={headerButtonSize}
            onPress={onHeaderButtonPress}
            translatedLabel={smokingState.headerButtonText}
          />
        </View>
      </View>
      <View style={styles.yumojiHeadContainer}>
        <View style={styles.yumojiHeadInnerBorder}>
          <Avatar
            showEmpty={true}
            size={YUMOJI_AVATAR_SIZE}
            backgroundColor={Colours.neutral.n20}
            uri={avatar?.avatarRemoteFiles?.pngMini}
          />
        </View>
      </View>
    </View>
  );
});
