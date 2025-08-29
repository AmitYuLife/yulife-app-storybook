import React, { memo, useCallback, useMemo } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { HealthSmokingOptOutModal } from "@redux/health-smoking/health-smoking.types";
import { Navigation } from "@navigation/main";
import { Image, TextTemplate } from "@atoms";
import { ScrollableContentOverlay } from "@components/modals/scrollable-content-overlay/scrollable-content-overlay";
import { Style, StyleSheet } from "@styles";

interface IProps {
  optOutModal: HealthSmokingOptOutModal;
}

const SmokingOptOut = ({ optOutModal }: IProps) => {
  const { image, title, description, buttonText, buttonAction, backButtonText } = optOutModal;
  const dispatch = useDispatch();
  const handlePress = useCallback(() => {
    Navigation.dismissOverlayWithChild();
    dispatch(buttonAction);
  }, [buttonAction]);

  const HeaderIcon = useMemo(
    () => <Image suppressLoadingUi={true} source={image} width={Style.adjust(140)} height={Style.adjust(140)} />,
    [image]
  );

  return (
    <ScrollableContentOverlay
      HeaderIcon={HeaderIcon}
      ctaLabel={buttonText}
      ctaDismissLabel={backButtonText}
      onPressCta={handlePress}
      onPressCtaDismiss={Navigation.dismissOverlayWithChild}
    >
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <TextTemplate type="h2" textAlign="center">
            {title}
          </TextTemplate>
        </View>
        <TextTemplate type="b2" textAlign="center">
          {description}
        </TextTemplate>
      </View>
    </ScrollableContentOverlay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(24),
  },
  titleWrapper: {
    marginBottom: Style.adjust(24),
    textAlign: "center",
  },
});

export default memo(SmokingOptOut);
