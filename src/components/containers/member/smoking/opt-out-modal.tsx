import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { GetHealthSmokingStateQuery } from "@graphql/__generated";
import { VoidFunction } from "@utils";
import { useDispatch } from "react-redux";
import { ScrollableContentOverlay } from "@components/modals/scrollable-content-overlay/scrollable-content-overlay";

interface IProps {
  optOutModal: GetHealthSmokingStateQuery["getHealthSmokingState"]["optOutModal"];
  dismissOverlay: VoidFunction;
}

const OptOutModal = ({ optOutModal, dismissOverlay }: IProps) => {
  const { image, title, description, buttonText, buttonAction, backButtonText } = optOutModal;
  const dispatch = useDispatch();
  const handlePress = useCallback(() => {
    dismissOverlay();
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
      onPressCtaDismiss={dismissOverlay}
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

export default memo(OptOutModal);
