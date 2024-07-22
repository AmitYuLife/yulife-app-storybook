import React, { FC, memo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { styles } from "./smoking.styles";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { Avatar, Button } from "@components/molecules";

interface Props {
  heading: string;
  avatarMiniUrl: string;
}

export const SmokingHeading: FC<Props> = memo(({ heading, avatarMiniUrl }) => {
  return (
    <View>
      <View style={styles.yumojiHeadBorderContainer}>
        <View style={styles.yumojiHeadBorder} />
      </View>
      <View style={styles.headerWrapper}>
        <View style={styles.headerTitle}>
          <View style={styles.headerText}>
            <TextTemplate type="h3" textAlign="left" numberOfLines={2}>
              {heading}
            </TextTemplate>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            testID="smoking-craving-button"
            size={"Fill"}
            onPress={onCravingPress}
            translationKey={"screens.smoking_hub.distraction_game_button_label"}
          />
        </View>
      </View>
      <View style={styles.yumojiHeadContainer}>
        <Avatar uri={avatarMiniUrl} showEmpty={true} size={80} />
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
