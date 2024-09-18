import React, { memo, useCallback, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { GenericFullScreenLoading, GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { BACKGROUND_IMAGE, YUMOJI_AVATAR_SIZE, styles } from "./smoking-commitment.styles";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { VoidFunction } from "@utils";
import { Avatar, Button, SmokingChips } from "@molecules";
import { useDispatch, useSelector } from "react-redux";
import { startSmokingStreak } from "@redux/health-smoking/health-smoking.actions";
import { Image, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Colours, Style } from "@styles";
import { getUserAvatar } from "@redux/user/user.selectors";
import { CheckIcon } from "@atoms/icon/check";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

interface ISmokingStreakLapsedProps {
  smokingState: HealthSmokingState;
  onClose: VoidFunction;
}

const SmokingStreakCommitment = ({ smokingState, onClose }: ISmokingStreakLapsedProps) => {
  const dispatch = useDispatch();
  const avatar = useSelector(getUserAvatar);

  const onSubmit = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
        name: "submit_smoking_commitment",
        button_id: "submit_smoking_commitment",
        location: "smoking_commitment",
      })
    );
    dispatch(startSmokingStreak());
    onClose();
  }, []);

  const smokingChipValues = useMemo(() => smokingState.reasons.map((reason) => reason.label), [smokingState.reasons]);

  if (!smokingState) {
    return <GenericFullScreenLoading onRightIconPress={onClose} />;
  }

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.backgroundImage}>
        <Image source={BACKGROUND_IMAGE} width={Style.DEVICE_WIDTH} />
      </View>
      <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Avatar
                uri={avatar?.avatarRemoteFiles?.pngMini}
                showEmpty={true}
                size={YUMOJI_AVATAR_SIZE}
                backgroundColor={Colours.neutral.n20}
              />
            </View>
          </View>
          <TextTemplate type="h3" textAlign="center">
            {t("screens.smoking_commitment.title")}
          </TextTemplate>
          <View style={styles.textBody}>
            <TextTemplate type="b2" textAlign="center">
              {t("screens.smoking_commitment.text_1")}
            </TextTemplate>
            <TextTemplate type="b2" textAlign="center">
              {t("screens.smoking_commitment.text_2")}
            </TextTemplate>
          </View>
          <View style={styles.row}>
            <CheckIcon size={Style.adjust(24)} strokeWidth={Style.adjust(0.6)} stroke={Colours.primary.p600} />
            <View style={styles.flex}>
              <View>
                <TextTemplate type="b2" textAlign="left">
                  {t("screens.smoking_commitment.why")}
                </TextTemplate>
              </View>
              <SmokingChips values={smokingChipValues} backgroundColor={Colours.secondary.s10S1} />
            </View>
          </View>
          <View style={styles.row}>
            <CheckIcon size={Style.adjust(24)} strokeWidth={Style.adjust(0.6)} stroke={Colours.primary.p600} />
            <TextTemplate type="b2" textAlign="left">
              {t("screens.smoking_commitment.saved", { totalSaved: smokingState.totalSaved.value })}
            </TextTemplate>
          </View>
          <View style={styles.row}>
            <CheckIcon size={Style.adjust(24)} strokeWidth={Style.adjust(0.6)} stroke={Colours.primary.p600} />
            <TextTemplate type="b2" textAlign="left">
              {t("screens.smoking_commitment.avoided", { totalAvoided: smokingState.totalAvoided.value })}
            </TextTemplate>
          </View>
        </View>
        <View style={styles.bottomPad} />
      </ScrollView>
      <View style={styles.buttonSection}>
        <Button
          testID="smoking-lapsed-next-button"
          translationKey={"screens.smoking_commitment.cta"}
          onPress={onSubmit}
          size="Fill"
        />
        <Button
          testID="smoking-lapsed-next-button"
          translationKey={"screens.smoking_commitment.cancel"}
          onPress={onClose}
          size="Fill"
          textColor={Colours.neutral.n800}
          backgroundColor={Colours.neutral.white}
          shadowColor={"#BFBFBF"}
        />
      </View>
      <GenericHeadingAbsolute
        logo="yulife"
        onRightIconPress={onClose}
        rightIcon="CLOSE"
        backgroundColor="transparent"
      />
    </View>
  );
};

export default memo(SmokingStreakCommitment);
