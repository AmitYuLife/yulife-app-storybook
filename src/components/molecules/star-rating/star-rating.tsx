import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

import { Style } from "@styles";
import { StarIcon } from "@atoms/icon/star-icon";
import { TextTemplate } from "@atoms";
import { useScreenReaderChange } from "@hooks";
import { t } from "@locale";

export interface IStarRatingProps {
  totalStars: number;
  activeStars: number;
}

const DISABLED_STAR_COLOR = "#D9D9D9";

const StarRating = memo(({ activeStars, totalStars }: IStarRatingProps) => {
  const isScreenReaderEnabled = useScreenReaderChange();

  return (
    <View style={styles.row}>
      {isScreenReaderEnabled ? (
        <TextTemplate type="b2b">
          {t("screens.challenge_details.accessibility.star_rating", { smart_count: activeStars, activeStars })}
        </TextTemplate>
      ) : (
        <>
          {Array.from({ length: totalStars }).map((_, index) => (
            <View key={index} style={styles.star}>
              <StarIcon color={index >= activeStars ? DISABLED_STAR_COLOR : undefined} />
            </View>
          ))}
        </>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  star: {
    marginRight: Style.adjust(3),
  },
});

export default StarRating;
