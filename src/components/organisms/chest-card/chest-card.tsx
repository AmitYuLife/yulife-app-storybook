import { Image, TextTemplate, TooltipIcon } from "@atoms";
import { Style } from "@styles";
import React, { FC, memo, useMemo, useRef } from "react";
import { View } from "react-native";
import styles from "./chest-card.styles";
import { ShineSvg } from "./shine-svg";
import { StarsSvg } from "./stars-svg";

interface IProps {
  description: string;
  backgroundColour: string;
  shadowColour: string;
  starColour?: string;
  textColour: string;
  hasTooltip: boolean;
  icon: {
    id: string;
    uri?: string;
  };
}

const ChestCard: FC<IProps> = ({
  description,
  backgroundColour,
  shadowColour,
  starColour,
  textColour,
  icon,
  hasTooltip,
}) => {
  const tooltipIconRef = useRef<View>(null);

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
      <View style={styles.shine}>
        <ShineSvg />
      </View>
      {!hasTooltip ? null : (
        <View ref={tooltipIconRef} style={styles.tooltipIcon} collapsable={false}>
          <TooltipIcon />
        </View>
      )}
    </View>
  );
};

export default memo(ChestCard);
