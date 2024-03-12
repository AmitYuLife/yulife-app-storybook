import { StyleSheet, View } from "react-native";
import { Stack, TextTemplate } from "@atoms";
import { memo } from "react";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { Button } from "@components/molecules";

interface IChallengesWatchProgressProps {
  onCancel?: () => void;
  onLeftMenuPress?: () => void;
}

const ChallengesWatchProgress = ({ onCancel, onLeftMenuPress }: IChallengesWatchProgressProps) => {
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.content}>
        <Stack gap={60}>
          <TextTemplate type="h1" textAlign="center">
            There is a challenge in progress on your watch!
          </TextTemplate>
          <Button onPress={onCancel} label="Cancel challenge" />
        </Stack>
      </View>
      <TopBarAbsolute type={TOP_BAR_TYPES.FOREST} onPressLeftIcon={onLeftMenuPress} />

      <NavBar activeIndex={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default memo(ChallengesWatchProgress);
