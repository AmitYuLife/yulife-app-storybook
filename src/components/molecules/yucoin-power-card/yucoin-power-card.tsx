import React, { memo, useCallback, useMemo, useState } from "react";
import Svg, { G, Rect, Path, Defs, LinearGradient, Stop, Text, ForeignObject } from "react-native-svg";
import { Colours, Style, StyleSheet } from "@styles";
import { useTheme } from "@modules/themes/hooks/useTheme";
import { InfoIcon } from "@atoms/icon/info-icon";
import { TextTemplate, YuCoinMiniSvg } from "@atoms";
import { t } from "@locale";
import { showTooltipPopupRelativeToPoint } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { LayoutChangeEvent, View } from "react-native";
import { SecondaryButton } from "@molecules";
import { Navigation } from "@navigation/main";
import { addCommasToNumber } from "@utils";
import { EARN_RATE } from "@ids";
import { MobileGameTheme } from "@app/modules/themes/types";

interface IProps {
  isPoweredUp?: boolean;
  yuCoinPower: number;
  yuCoinAmount: number;
}

const getColours = (primary: MobileGameTheme["colors"]["primary"]) => ({
  default: [
    "#EDB720",
    "#EDB720",
    "#EDB720",
    "#F8CB31",
    Colours.neutral.white,
    "#FFEE47",
    "#FFF59A",
    "#FFF69F",
    "#FFEE47",
    "#FFE24A",
    "#FFEA7A",
    "#FFF48E",
    "#FFED44",
    "#FFF48E",
    Colours.neutral.white,
    "#DB8200",
    primary.p600Shadow,
    primary.p400,
    "#464647",
  ],
  selected: [
    primary.p600Shadow,
    primary.p600,
    "#EDB720",
    "#F8CB31",
    Colours.neutral.white,
    primary.p400,
    primary.p400,
    primary.p400,
    primary.p400,
    primary.p400,
    primary.p400,
    "#FFF48E",
    "#FFED44",
    "#FFF48E",
    Colours.neutral.white,
    primary.p600,
    Colours.neutral.white,
    Colours.neutral.white,
    Colours.neutral.white,
  ],
});

const INFO_ICON_MEASURES = {
  x: 183,
  y: 57,
  width: 12,
  height: 12,
};
const YUCOIN_POWER_HEIGHT = Style.adjust(90);

const YuCoinPowerCard = ({ isPoweredUp, yuCoinPower = 0, yuCoinAmount }: IProps) => {
  const [measures, setMeasures] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const colours = useMemo(() => getColours(theme.colors.primary), [theme.colors.primary]);
  const selectedColours = useMemo(() => (isPoweredUp ? colours.selected : colours.default), [isPoweredUp, colours]);

  const onLayout = useCallback(({ nativeEvent }: LayoutChangeEvent) => {
    const offset = 5;
    const x = nativeEvent.layout.x + INFO_ICON_MEASURES.x + INFO_ICON_MEASURES.width - offset;
    const y = nativeEvent.layout.y + INFO_ICON_MEASURES.y + INFO_ICON_MEASURES.height + offset;
    setMeasures({ x, y });
  }, []);

  const showToolTip = useCallback(
    () =>
      showTooltipPopupRelativeToPoint({
        x: measures.x,
        y: measures.y + YUCOIN_POWER_HEIGHT,
        beakPosition: "topCenter",
        children: (
          <View style={styles.toolTipWrapper}>
            <TextTemplate type="b2b">{t("yucoin_power.tool_tip.title")}</TextTemplate>
            <View style={styles.toolTipDescription}>
              <TextTemplate type="l2">{t("yucoin_power.tool_tip.description")}</TextTemplate>
            </View>
            <SecondaryButton
              size="Narrow"
              translationKey="labels.cta.cool"
              onPress={() => Navigation.dismissAllOverlays()}
            />
          </View>
        ),
      }),
    [measures]
  );

  return (
    <View onLayout={onLayout}>
      <Svg width={Style.adjust(327)} height={YUCOIN_POWER_HEIGHT} fill="none" viewBox="0 0 327 90">
        <Rect width={327} height={88} y={2} fill={selectedColours[0]} rx={24} />
        <Rect width={327} height={88} fill="url(#a)" rx={24} />
        <Path fill="url(#b)" d="M24 0h280v88H57L24 0Z" />
        <Path fill={selectedColours[1]} d="M157 19h1v50h-1z" opacity={0.2} />
        <Path
          fill={selectedColours[2]}
          d="M47.765 74C63.358 74 76 61.464 76 46S63.358 18 47.765 18C32.17 18 19.529 30.536 19.529 46s12.642 28 28.236 28Z"
        />
        <Path
          fill="url(#c)"
          d="M47.765 72C63.358 72 76 59.464 76 44S63.358 16 47.765 16C32.17 16 19.529 28.536 19.529 44s12.642 28 28.236 28Z"
        />
        <Path
          fill={selectedColours[3]}
          d="M47.764 22.459a29.35 29.35 0 0 1 18.447 6.477 23.952 23.952 0 0 0-18.447-8.624 23.93 23.93 0 0 0-18.447 8.633 29.358 29.358 0 0 1 18.447-6.486Z"
        />
        <Path
          fill="url(#d)"
          d="M47.764 65.541a29.35 29.35 0 0 0 18.447-6.477 23.93 23.93 0 0 1-18.447 8.633 23.93 23.93 0 0 1-18.447-8.633 29.404 29.404 0 0 0 18.447 6.477Z"
        />
        <Path
          fill={selectedColours[4]}
          d="m23.192 23 1.598 5.346 5.328 1.781-5.328 1.527L23.192 37l-1.865-5.346L16 30.127l5.327-1.781L23.192 23ZM59.302 58.875l.8 2.673 2.663.89-2.664.764-.799 2.673-.932-2.673-2.664-.763 2.664-.891.932-2.673Z"
        />
        <G>
          <Text
            y={55}
            x={48}
            fontSize={28}
            fontFamily={Style.FONT_FAMILY_PRIMARY_BOLD}
            fontWeight="bold"
            textAnchor="middle"
            letterSpacing={1}
            fill={selectedColours[15]}
            testID={EARN_RATE(yuCoinPower)}
          >
            {yuCoinPower}
          </Text>
          <Text
            y={40}
            x={84}
            fontSize={16}
            fontFamily={Style.FONT_FAMILY_PRIMARY_BOLD}
            fontWeight="bold"
            letterSpacing={0.4}
            fill={selectedColours[16]}
          >
            {t("yucoin_power.yucoin")}
          </Text>
          <Text
            y={58}
            x={84}
            fontSize={16}
            fontFamily={Style.FONT_FAMILY_PRIMARY}
            letterSpacing={0.4}
            fill={selectedColours[16]}
          >
            {t("yucoin_power.power")}
          </Text>
          <Text
            y={44}
            x={230}
            fontSize={28}
            fontFamily={Style.FONT_FAMILY_PRIMARY_BOLD}
            letterSpacing={1}
            fontWeight="bold"
            fill={selectedColours[16]}
            textAnchor="middle"
          >
            {addCommasToNumber(yuCoinAmount)}
          </Text>
          <ForeignObject y={20} x={287}>
            <YuCoinMiniSvg size={24} hasShadow={true} />
          </ForeignObject>
        </G>
        <Rect x={176} y={50} width={24} height={24} onPress={showToolTip} />
        <ForeignObject y={INFO_ICON_MEASURES.y} x={INFO_ICON_MEASURES.x}>
          <InfoIcon colour={selectedColours[17]} width={INFO_ICON_MEASURES.width} height={INFO_ICON_MEASURES.height} />
        </ForeignObject>
        <Text
          y={66}
          x={199}
          fontSize={10}
          letterSpacing={0.4}
          fontFamily={Style.FONT_FAMILY_PRIMARY_BOLD}
          fontWeight="bold"
          fill={selectedColours[18]}
        >
          {t("yucoin_power.description")}
        </Text>

        <Defs>
          <LinearGradient id="a" x1={643.5} x2={-15.168} y1={-115.946} y2={-34.163} gradientUnits="userSpaceOnUse">
            <Stop offset={0.323} stopColor={selectedColours[5]} />
            <Stop offset={0.56} stopColor={selectedColours[6]} />
            <Stop offset={0.927} stopColor={selectedColours[7]} />
            <Stop offset={1} stopColor={selectedColours[8]} />
          </LinearGradient>
          <LinearGradient id="b" x1={24} x2={586.557} y1={41} y2={84.569} gradientUnits="userSpaceOnUse">
            <Stop stopColor={selectedColours[9]} />
            <Stop offset={0.438} stopColor={selectedColours[10]} stopOpacity={0} />
          </LinearGradient>
          <LinearGradient id="c" x1={47.104} x2={48.415} y1={15.481} y2={72.833} gradientUnits="userSpaceOnUse">
            <Stop stopColor={selectedColours[11]} />
            <Stop offset={1} stopColor={selectedColours[12]} />
          </LinearGradient>
          <LinearGradient id="d" x1={5920.2} x2={5926.93} y1={2417.78} y2={635.677} gradientUnits="userSpaceOnUse">
            <Stop stopColor={selectedColours[13]} />
            <Stop offset={1} stopColor={selectedColours[14]} stopOpacity={0.4} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  toolTipWrapper: {
    width: Style.adjust(224),
    height: Style.adjust(201),
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  toolTipDescription: {
    marginTop: 4,
    marginBottom: 16,
  },
});

export default memo(YuCoinPowerCard);
