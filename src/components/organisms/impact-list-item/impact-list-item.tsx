import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import * as Haptics from "expo-haptics";
import { Image, TextTemplate } from "@atoms";
import { BoxOption } from "@molecules";
import { ImpactBuyButton } from "@organisms";
import { Style } from "@styles";

export interface IImpactListItem {
  id: string;
  title: string;
  description?: string;
  yucoin: number;
  progressValue: number;
  showAnimation?: boolean;
  onSubmit: (impactId: string, amount: number) => void;
  image: {
    uri?: string;
  };
}

const ImpactListItem = ({ id, title, description, image, yucoin, showAnimation, onSubmit }: IImpactListItem) => {
  const handleOnPress = useCallback(async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onSubmit(id, yucoin);
  }, [id, onSubmit, yucoin]);

  return (
    // This is disabled because the onPress itself is inside of the BoxOption and onPress is required on BoxOption
    <BoxOption onPress={null} disabled={true} isSelected={false} wrapperStyle={styles.boxOption}>
      <View style={styles.wrapper}>
        <View style={styles.image}>
          <Image source={image} width={Style.adjust(72)} height={Style.adjust(72)} />
        </View>
        <View style={styles.details}>
          <TextTemplate type="b2b">{title}</TextTemplate>
          {!description ? null : (
            <View style={styles.description}>
              <TextTemplate type="l1">{description}</TextTemplate>
            </View>
          )}
        </View>
        <View style={styles.buttonWrapper}>
          <ImpactBuyButton onPress={handleOnPress} label={`${yucoin}`} showAnimation={showAnimation} />
        </View>
      </View>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  boxOption: {
    overflow: "visible",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginTop: Style.adjust(8),
    marginLeft: Style.adjust(8),
  },
  details: {
    flexDirection: "column",
    marginTop: Style.adjust(16),
    marginLeft: Style.adjust(8),
  },
  description: {
    marginTop: Style.adjust(4),
    marginBottom: Style.adjust(8),
  },
  buttonWrapper: {
    position: "absolute",
    right: Style.adjust(16),
    height: "100%",
    justifyContent: "center",
    top: Style.adjust(15),
  },
});

export default memo(ImpactListItem);
