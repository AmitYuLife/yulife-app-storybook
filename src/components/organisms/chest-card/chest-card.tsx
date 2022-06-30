import React, { memo, FC, useRef, useCallback, useMemo } from "react";
import { View } from "react-native";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { Image, TextTemplate, TooltipIcon } from "@atoms";
import { PressableWithDelay } from "@molecules";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import InfoMessage from "@organisms/info-message/info-message";
import { Style } from "@styles";
import styles from "./chest-card.styles";
import { StarsSvg } from "./stars-svg";

interface IProps {
  description: string;
  backgroundColour: string;
  shadowColour: string;
  starColour: string;
  textColour: string;
  icon: {
    id: string;
    uri: string;
  };
  tooltip?: {
    title: string;
    description: string;
    cta: string;
  };
}

const ChestCard: FC<IProps> = ({
  description,
  backgroundColour,
  shadowColour,
  starColour,
  textColour,
  icon,
  tooltip,
}) => {
  const tooltipIconRef = useRef<View>();

  const onClose = useCallback(() => Navigation.dismissOverlay(MODALS.blurredOverlay), []);

  const openPopUp = useCallback(() => {
    showTooltipPopupRelativeToView({
      viewRef: tooltipIconRef,
      beakPosition: "autoVertical",
      children: (
        <InfoMessage title={tooltip?.title} text={tooltip?.description} onPress={onClose} buttonLabel={tooltip?.cta} />
      ),
    });
  }, [tooltipIconRef, tooltip, onClose]);

  const cardOuterStyle = useMemo(() => [styles.cardOuter, { backgroundColor: shadowColour }], [shadowColour]);
  const cardInnerStyle = useMemo(() => [styles.cardInner, { backgroundColor: backgroundColour }], [backgroundColour]);

  return (
    <View key={description} style={cardOuterStyle}>
      <View style={cardInnerStyle}>
        {!starColour ? null : (
          <View style={styles.stars}>
            <StarsSvg colour={starColour} />
          </View>
        )}
        <View style={styles.icon}>
          <Image width={Style.adjust(60)} source={icon} />
        </View>
        <TextTemplate color={textColour} type="l1" textAlign="center">
          {description}
        </TextTemplate>
      </View>
      <View ref={tooltipIconRef} style={styles.tooltipIcon}>
        <PressableWithDelay onPress={openPopUp}>
          <TooltipIcon />
        </PressableWithDelay>
      </View>
    </View>
  );
};

export default memo(ChestCard);
