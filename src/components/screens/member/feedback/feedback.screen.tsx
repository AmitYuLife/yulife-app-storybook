import React from "react";
import { View } from "react-native";
import { Heading, Pad, Text } from "@atoms";
import styles from "./feedback.styles";
import StarRating from "./star-rating";
import { Button, CentredScreen, LinkButton } from "@molecules";
import { t } from "@locale";

import { StyleSheet } from "@styles";
interface IProps {
  isSubmitting: boolean;
  onCancel: () => void;
  onRatingSelect: (rating: number) => void;
  onSubmit: () => void;
  rating: number;
}

const FeedbackScreen = ({ isSubmitting, onCancel, onRatingSelect, onSubmit, rating }: IProps) => (
  <View style={StyleSheet.absoluteFill}>
    <CentredScreen style={styles.centredScreen}>
      <Heading size="large" label={t("screens.feedback.heading")} />
      <Text>{t("screens.feedback.subheading")}</Text>
      <Pad height={42} />
      <StarRating onSelect={onRatingSelect} rating={rating} />
      <Pad height={22} />
      <Button
        isLoading={isSubmitting}
        disabled={isSubmitting}
        size="Small"
        translationKey={isSubmitting ? "labels.cta.loading" : "labels.cta.submit"}
        onPress={onSubmit}
      />
      <LinkButton translationKey="labels.cta.not_now" onPress={onCancel} />
    </CentredScreen>
  </View>
);

export default FeedbackScreen;
