import * as React from "react";
import { Image, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { GenericHeadingAbsolute } from "@organisms";
import assets from "./assets";
import styles from "./info.styles";
import { SmartWatchIcon } from "@atoms/icon/smart-watch-icon";

type Type = "garmin" | "fitbit" | "strava" | "withings" | "otherWearables" | "polar";

export interface InfoModalProps {
  type: Type;
  onPress: () => void;
  heading: string;
  subheading?: string;
  ctaLabel: string;
}

const InfoScreen = ({ type, heading, subheading, ctaLabel, onPress }: InfoModalProps) => {
  const buttonStyle = React.useMemo(() => (type === "otherWearables" ? {} : styles.buttonWrapper), [type]);
  return (
    <>
      <View style={styles.wrapper}>
        {getImage(type)}
        <View style={styles.heading}>
          <TextTemplate type="b2">{heading}</TextTemplate>
        </View>
        {!subheading ? null : <TextTemplate type="b2">{subheading}</TextTemplate>}
        <Button
          testID="info-screen-cta-button"
          wrapperStyle={buttonStyle}
          translatedLabel={ctaLabel}
          onPress={onPress}
        />
      </View>
      <GenericHeadingAbsolute onRightIconPress={onPress} />
    </>
  );
};

export default InfoScreen;

const getImage = (type: Type) => {
  if (type === "otherWearables") {
    return <SmartWatchIcon wrapperStyle={styles.otherWearableWrapper} />;
  }

  return <Image style={styles.image} resizeMethod="scale" source={assets[type]} />;
};
