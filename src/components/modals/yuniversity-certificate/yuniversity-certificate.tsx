import React, { useRef, useCallback, ComponentProps, memo } from "react";
import { StyleSheet, View, ViewStyle, ScrollView, Platform } from "react-native";
import { Style } from "@styles";
import { Navigation } from "@navigation/main";
import ViewShot from "react-native-view-shot";
import { MODALS } from "@navigation/constants";
import { SecondaryButton } from "@molecules";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { useBackHandler, useSaveImage } from "@hooks";
import media from "@styles/media";
import { Certificate } from "@organisms";
import { CPD_CERTIFICATE, CPD_SAVE_BUTTON } from "@ids";

type YuniversityCertificateModalProps = ComponentProps<typeof Certificate>;

const YuniversityCertificateModal = (props: YuniversityCertificateModalProps) => {
  useBackHandler(dismissOverlay);

  const viewShotRef = useRef<ViewShot>();
  const { ready, saveImage } = useSaveImage();

  const takeScreenshot = useCallback(async () => {
    const uri = await viewShotRef?.current?.capture();
    if (uri) {
      saveImage(uri);
    }
  }, [saveImage]);

  return (
    <GenericOverlay onClose={dismissOverlay}>
      <ScrollView
        testID={CPD_CERTIFICATE}
        style={styles.wrapper}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <ViewShot ref={viewShotRef}>
          <Certificate {...props} />
        </ViewShot>
        <SecondaryButton
          testID={CPD_SAVE_BUTTON}
          wrapperStyle={styles.buttonWrapper}
          translationKey="save_image.save_button"
          onPress={takeScreenshot}
          disabled={!ready}
        />
        <View style={styles.bottomPad} />
      </ScrollView>
    </GenericOverlay>
  );
};

const BOTTOM_PADDING = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: Style.adjust(140),
    },
  ],
  Style.adjust(100)
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Style.adjust(16),
  } as ViewStyle,
  scroll: {
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  bottomPad: {
    height: BOTTOM_PADDING,
  } as ViewStyle,
  disclaimer: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  buttonWrapper: {
    marginTop: Style.adjust(20),
  } as ViewStyle,
});

export default memo(YuniversityCertificateModal);

function dismissOverlay() {
  Navigation.pop(MODALS.yuniversityCertificate);
  return true;
}
