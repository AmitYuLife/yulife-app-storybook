import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { HeroCalendarIcon } from "@atoms/icon/hero-calendar-icon";
import { ScrollableContentOverlay } from "@components/modals/scrollable-content-overlay/scrollable-content-overlay";
import { Style } from "@styles";

interface IProps {
  title: string;
  failCta: string;
  onPressNo: () => Promise<void>;
  continueCta: string;
  onPressYes: () => Promise<void>;
}

const SmokingCheckInOverlay = ({ title, failCta, onPressNo, continueCta, onPressYes }: IProps) => {
  return (
    <ScrollableContentOverlay
      HeaderIcon={<HeroCalendarIcon />}
      ctaLabel={continueCta}
      onPressCta={onPressNo}
      ctaDismissLabel={failCta}
      onPressCtaDismiss={onPressYes}
      ctaDismissType="primary"
    >
      <View style={styles.container}>
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
