import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, RemoteImage, SecondaryButton, Text } from "@atoms";
import { data, getCardBackgroundColor } from "./challenge-details.helpers";
import styles from "./challenge-details.styles";
import Milestones, { IMilestoneProps } from "./milestones";
import GenericHeadingAbsolute from "@atoms/generic-heading/generic-heading-absolute";
import { Style } from "@styles";

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
  return (
    <>
      <View style={styles.wrapper}>
        <RemoteImage
          uri={imageUri}
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
          <Text bold={true} style={styles.heading}>
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
        />
        {!onPressSetUp ? (
          <Text style={styles.footer}>{data.footer}</Text>
        ) : (
          <SecondaryButton label={data.setUpLabel} onPress={onPressSetUp} wrapperStyle={styles.setUp} />
        )}
        {!error ? null : <Text style={styles.error}>{error}</Text>}
      </View>
      <GenericHeadingAbsolute backgroundColor="transparent" onRightIconPress={onPressClose} />
    </>
  );
}

export default React.memo(ChallengeDetailsScreen);
