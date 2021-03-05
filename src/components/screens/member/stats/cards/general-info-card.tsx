import { Text } from "@atoms/index";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Circle, Path, Rect } from "react-native-svg";
import NativeSvg from "../../../../molecules/native-svg/native-svg";
import styles from "./general-info-card.styles";
import { STATS_VALUE } from "@ids";

interface IProps {
  title: string;
  titleColor: string;
  value: string;
  unit?: string;
}
const GeneralInfoCard: React.FC<IProps> = ({ titleColor, title, value, unit }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={StyleSheet.flatten([styles.title, { color: titleColor }])}>{title}</Text>
      <View style={styles.valueWrapper}>
        <Text style={styles.value} testID={STATS_VALUE(value)}>
          {value}
        </Text>
        <View>{unit ? <Text style={styles.unit}>{unit}</Text> : null}</View>
      </View>
    </View>
  );
};

export const LoadingGeneralInfoCard: React.FC = () => {
  return (
    <View style={styles.mediumLoadingCard}>
      <NativeSvg
        speed={2}
        width={400}
        height={80}
        viewBox="0 0 400 80"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Path
          d="M6.5,0h299a6,6,0,0,1,6,6h0a6,6,0,0,1-6,6H6.5a6,6,0,0,1-6-6h0A6,6,0,0,1,6.5,0Z"
          transform="translate(-0.5)"
        />
        <Path
          d="M6.5,24h299a6,6,0,0,1,6,6h0a6,6,0,0,1-6,6H6.5a6,6,0,0,1-6-6h0A6,6,0,0,1,6.5,24Z"
          transform="translate(-0.5)"
        />
        <Path
          d="M6.5,48h229a6,6,0,0,1,6,6h0a6,6,0,0,1-6,6H6.5a6,6,0,0,1-6-6h0A6,6,0,0,1,6.5,48Z"
          transform="translate(-0.5)"
        />
      </NativeSvg>
    </View>
  );
};

export const LoadingRecomendationCard: React.FC = () => {
  return (
    <View style={styles.smallLoadingCard}>
      <NativeSvg
        speed={2}
        width={400}
        height={80}
        viewBox="0 0 400 80"
        backgroundColor="#f3f3f3"
        foregroundColor="#fff"
      >
        <Path d="M6,0H196a6,6,0,0,1,6,6h0a6,6,0,0,1-6,6H6A6,6,0,0,1,0,6H0A6,6,0,0,1,6,0Z" />
        <Path d="M6,24h96a6,6,0,0,1,6,6h0a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6H0A6,6,0,0,1,6,24Z" />
      </NativeSvg>
    </View>
  );
};

export const LoadingHeader: React.FC = () => {
  return (
    <View style={styles.headerLoadingCard}>
      <NativeSvg
        speed={2}
        width={400}
        height={40}
        viewBox="0 0 400 40"
        backgroundColor="#f3f3f3"
        foregroundColor="#c2c2c2"
      >
        <Rect x="42.62" y="5" width="221.38" height="22" rx="8" />
        <Circle cx="16" cy="16" r="16" />
      </NativeSvg>
    </View>
  );
};

export default GeneralInfoCard;
