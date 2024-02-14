import React, { memo, useMemo } from "react";
import { Image, TextTemplate } from "@atoms";
import { BoxOption } from "@molecules";
import { Colours, Style } from "@styles";
import { StyleSheet, View } from "react-native";
import { ArrowButton } from "@components/molecules/arrow-button";

interface IProps {
  title: string;
  description: string;
  image: {
    uri: string;
  };
  impact: {
    name: string;
    image: {
      uri: string;
    };
    value: string;
    isSurge: boolean;
  };
  onPress: () => void;
}

const ImpactListItem = ({ title, description, image, impact, onPress }: IProps) => {
  const surgeStyle = useMemo(
    () => ({
      textColor: impact.isSurge ? Colours.neutral.white : "#956AFF",
      backgroundColor: impact.isSurge ? "#956AFF" : "#F4F0FF",
    }),
    [impact.isSurge]
  );
  return (
    <BoxOption onPress={onPress} isSelected={false}>
      <View style={styles.wrapper}>
        <View style={styles.image}>
          <Image source={image} width={Style.adjust(88)} height={Style.adjust(88)} />
        </View>
        <View style={styles.details}>
          <TextTemplate type="b2b">{title}</TextTemplate>
          <View style={styles.description}>
            <TextTemplate type="l1">{description}</TextTemplate>
          </View>
          <View style={styles.badgeWrapper}>
            <View style={[styles.badge, { backgroundColor: surgeStyle.backgroundColor }]}>
              <View style={styles.badgeValue}>
                <TextTemplate type="l1b" color={surgeStyle.textColor}>
                  {impact.value}
                </TextTemplate>
              </View>
              <View style={styles.badgeImage}>
                <Image source={impact.image} width={Style.adjust(16)} height={Style.adjust(16)} />
              </View>
              <TextTemplate type="l1b" color={surgeStyle.textColor}>
                {impact.name}
              </TextTemplate>
            </View>
          </View>
        </View>
        <View style={styles.arrow}>
          <ArrowButton color={Colours.primary.p600} />
        </View>
      </View>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
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
  },
  badgeWrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(4),
    alignItems: "center",
  },
  badge: {
    borderRadius: 4,
    flexDirection: "row",
    paddingTop: Style.adjust(4),
    paddingBottom: Style.adjust(4),
    paddingLeft: Style.adjust(7),
    paddingRight: Style.adjust(7),
  },
  badgeValue: {
    marginRight: Style.adjust(3),
  },
  badgeImage: {
    marginRight: Style.adjust(3),
  },
  arrow: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});

export default memo(ImpactListItem);
