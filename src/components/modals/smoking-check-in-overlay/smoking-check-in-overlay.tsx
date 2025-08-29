import React, { memo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { HeroCalendarIcon } from "@atoms/icon/hero-calendar-icon";
import { ScrollableContentOverlay } from "@components/modals/scrollable-content-overlay/scrollable-content-overlay";
import { Style, StyleSheet } from "@styles";
import { SMOKING_CHECKIN_OVERLAY } from "@ids";

interface IProps {
  title: string;
  failCta: string;
  onPressNo: () => Promise<void>;
  continueCta: string;
  onPressYes: () => void;
}

const SmokingCheckInOverlay = ({ title, failCta, onPressNo, continueCta, onPressYes }: IProps) => {
  return (
    <ScrollableContentOverlay
      HeaderIcon={<HeroCalendarIcon />}
      ctaLabel={continueCta}
      onPressCta={onPressNo}
      ctaDismissLabel={failCta}
      onPressCtaDismiss={onPressYes}
      ctaDismissType="secondary"
    >
      <View style={styles.container} testID={SMOKING_CHECKIN_OVERLAY}>
        <TextTemplate type="h2" textAlign="center">
          {title}
        </TextTemplate>
      </View>
    </ScrollableContentOverlay>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Style.adjust(8),
  },
});

export default memo(SmokingCheckInOverlay);
