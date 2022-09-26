import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image, Text } from "@atoms";
import { Button, SecondaryButton } from "@molecules";
import { data, getCardBackgroundColor } from "./challenge-details.helpers";
import styles from "./challenge-details.styles";
import Milestones, { IMilestoneProps } from "./milestones";
import { GenericHeadingAbsolute } from "@organisms";
import { Style } from "@styles";
import { useBackHandler } from "@hooks";
import { CHALLENGE_DETAILS_SCREEN, TAKE_CHALLENGE_BUTTON, SET_UP_BUTTON, CHALLENGE_TYPE } from "@ids";

interface IOwnProps {
  heading: string;
  currentWorld?: number;
  isLoading?: boolean;
  error?: string;
  onPressClose: () => void;
  onPressCta: () => void;
  onPressSetUp?: () => void;
  imageUri: string;
}

type Props = IOwnProps & IMilestoneProps;

function ChallengeDetailsScreen({
  heading,
  currentWorld = 0,
  error = null,
  isLoading = false,
  milestones,
  onPressClose,
  onPressCta,
  onPressSetUp = null,
  imageUri,
}: Props) {
  useBackHandler(() => {
    onPressClose();
    return true;
  });

  return (
    <>
      <View style={styles.wrapper} testID={CHALLENGE_DETAILS_SCREEN}>
        <Image
          source={{ uri: imageUri }}
          width={Style.adjust(235)}
          height={Style.adjust(141)}
          theme="light"
          resizeMode="contain"
        />
        <View
          style={StyleSheet.flatten([
            styles.contentWrapper,
            {
              backgroundColor: getCardBackgroundColor(currentWorld),
            },
          ])}
        >
          <Text bold={true} style={styles.heading} testID={CHALLENGE_TYPE(heading)}>
            {heading}
          </Text>
          <Milestones milestones={milestones} />
        </View>
        <Button
          disabled={isLoading}
          isLoading={isLoading}
          label={isLoading ? data.loading : data.ctaLabel}
          onPress={onPressCta}
          wrapperStyle={styles.ctaButton}
          testID={TAKE_CHALLENGE_BUTTON(data.ctaLabel)}
        />
        {!onPressSetUp ? (
          <Text style={styles.footer}>{data.footer}</Text>
        ) : (
          <SecondaryButton
            label={data.setUpLabel}
            onPress={onPressSetUp}
            wrapperStyle={styles.setUp}
            testID={SET_UP_BUTTON(data.setUpLabel)}
          />
        )}
        {!error ? null : <Text style={styles.error}>{error}</Text>}
      </View>
      <GenericHeadingAbsolute backgroundColor="transparent" onLeftIconPress={onPressClose} />
    </>
  );
}

export default React.memo(ChallengeDetailsScreen);
