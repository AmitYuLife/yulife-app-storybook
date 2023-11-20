import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { CloseSvg, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Button, LinkButton, TouchableOpacityWithDelay } from "@components/molecules";
import { Colours } from "@styles";
import { QuestDetailModalProps } from "./quest-detail-modal.types";
import LinearGradient from "react-native-linear-gradient";
import { getConfigByType } from "./__helpers/get-config-by-type";
import { useMemo } from "react";
import { gradient } from "./quest-detail-modal.config";
import { questDetailModalStyles, BOTTOM_GRADIENT_BASE_HEIGHT, BUTTON_HEIGHT } from "./quest-detail-modal.styles";

export const QuestDetailModal = (props: QuestDetailModalProps) => {
  const { type, onPressCta, onPressCtaDismiss, onPressClose } = props;

  const calculated = useMemo(() => {
    const bottomFillerHeight = BOTTOM_GRADIENT_BASE_HEIGHT + (onPressCtaDismiss ? BUTTON_HEIGHT : 0);

    return {
      scrollviewBottomPadStyle: {
        height: bottomFillerHeight,
      },
      heading: getConfigByType(props).heading,
      HeaderIcon: getConfigByType(props).headerIcon,
    };
  }, [onPressCtaDismiss, type]);

  return (
    <View style={questDetailModalStyles.bottomWrapper}>
      <View style={questDetailModalStyles.overshootCushion}>
        <View style={questDetailModalStyles.safeAreaView}>
          <View style={questDetailModalStyles.innerWrapper}>
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
              <View style={questDetailModalStyles.topPad} />
              {!calculated.heading ? null : (
                <View style={questDetailModalStyles.textWrapper}>
                  <TextTemplate textAlign="center" type="h2">
                    {calculated.heading}
                  </TextTemplate>
                </View>
              )}
              <View style={calculated.scrollviewBottomPadStyle} />
            </ScrollView>
            <SafeAreaView style={questDetailModalStyles.buttonAbsolute}>
              <View style={questDetailModalStyles.bottomFadeWrapper}>
                <LinearGradient
                  colors={gradient.top.colors}
                  start={gradient.top.start}
                  end={gradient.top.end}
                  locations={gradient.top.locations}
                  style={StyleSheet.absoluteFillObject}
                />
              </View>
              <View style={questDetailModalStyles.buttonWrapper}>
                <Button size="Fill" label={t("labels.cta.got_it")} onPress={onPressCta} />
              </View>
              {!onPressCtaDismiss ? null : (
                <View style={questDetailModalStyles.buttonWrapper}>
                  <LinkButton label={t("labels.cta.not_now")} onPress={onPressCta} />
                </View>
              )}
            </SafeAreaView>
          </View>
        </View>
        <View style={questDetailModalStyles.topFadeWrapper}>
          <LinearGradient
            colors={gradient.bottom.colors}
            start={gradient.bottom.start}
            end={gradient.bottom.end}
            locations={gradient.bottom.locations}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
        {!calculated.HeaderIcon ? null : (
          <View style={questDetailModalStyles.imageWrapper}>
            <calculated.HeaderIcon style={questDetailModalStyles.image} />
          </View>
        )}
        <TouchableOpacityWithDelay onPress={onPressClose} style={questDetailModalStyles.closeButtonWrapper}>
          <CloseSvg stroke={Colours.neutral.n800} accessible={false} />
        </TouchableOpacityWithDelay>
      </View>
    </View>
  );
};
