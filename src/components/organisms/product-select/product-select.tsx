import React, { memo, useCallback, useMemo } from "react";
import { PowerCoin, Image, TextTemplate, Source } from "@atoms";
import { View, ViewStyle } from "react-native";
import { BoxOption } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { CheckBoxType } from "@components/molecules/check-box/check-box-type";

interface IProductSelectProps {
  id: string;
  title: string;
  image: Source;
  description: string;
  yuCoinPower: number;
  isSelected: boolean;
  backgroundColor?: string;
  onPress: (productId: string) => void;
}

const ProductSelect = ({
  id,
  title,
  isSelected,
  description,
  image,
  onPress,
  yuCoinPower,
  backgroundColor = "#00C0F3",
}: IProductSelectProps) => {
  const handleOnPress = useCallback(() => {
    onPress(id);
  }, [onPress, id]);

  const selectedStyle = useMemo(() => (isSelected ? styles.checked : {}), [isSelected]);

  const iconStyle: ViewStyle = useMemo(() => ({ ...styles.icon, ...{ backgroundColor } }), [backgroundColor]);

  return (
    <BoxOption
      onPress={handleOnPress}
      isSelected={isSelected}
      selectedStyle={selectedStyle}
      innerHeight={Style.adjust(80)}
      wrapperStyle={styles.wrapper}
    >
      <View style={styles.container}>
        <View style={iconStyle}>
          <Image width={Style.adjust(56)} source={image} />
          <View style={styles.coin}>
            <PowerCoin yucoin={`+${yuCoinPower}`} />
          </View>
        </View>
        <View style={styles.info}>
          <TextTemplate type="b1b">{title}</TextTemplate>
          <View style={styles.description}>
            <TextTemplate type="l1" color={Colours.primary.p600}>
              {description}
            </TextTemplate>
          </View>
        </View>

        <View style={styles.checkBox}>
          <CheckBoxType type={"cubic"} checked={isSelected} strokeColor={Colours.neutral.n400} />
        </View>
      </View>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: Style.adjust(8),
    paddingTop: Style.adjust(8),
    paddingBottom: Style.adjust(8),
  },
  checked: {
    backgroundColor: "#FFF2F8",
    borderColor: "#F43E8E",
    borderWidth: 1,
  },
  icon: {
    borderRadius: 8,
    padding: Style.adjust(4),
  },
  info: {
    marginStart: Style.adjust(16),
  },
  description: {
    marginTop: Style.adjust(4),
  },
  checkBox: {
    position: "absolute",
    end: Style.adjust(25),
  },
  coin: {
    position: "absolute",
    start: -4,
    top: -4,
  },
});

export default memo(ProductSelect);
