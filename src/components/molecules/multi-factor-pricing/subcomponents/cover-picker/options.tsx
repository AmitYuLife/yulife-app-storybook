import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { BoxOption, PackageType } from "@molecules";
import { CoverType } from "@graphql/__generated";
import { Colours, Style } from "@styles";

interface IOption {
  value: number;
  coverType: CoverType;
  heading: string;
  subheading: string;
}

type IActiveCover = Pick<IOption, "coverType" | "value">;

interface IOptionsProps {
  options: IOption[];
  onPickCover: (picked: IActiveCover) => () => void;
  activeValue: number;
}

export const Options = ({ options, onPickCover, activeValue }: IOptionsProps) => (
  <View style={boxOptionStyles.wrapper}>
    {options.map((option) => (
      <Option key={option.value} {...option} onPickCover={onPickCover} activeValue={activeValue} />
    ))}
  </View>
);

const Option = ({
  value,
  coverType,
  heading,
  subheading,
  activeValue,
  onPickCover,
}: IOption & { activeValue: number; onPickCover: (activeCover: IActiveCover) => () => void }) => {
  const isSelected = activeValue === value;
  const selectedStyle = mapCoverToStyle(coverType);

  return (
    <BoxOption
      selectedStyle={selectedStyle}
      onPress={onPickCover({ coverType, value })}
      isSelected={isSelected}
      innerHeight={Style.adjust(76)}
      wrapperStyle={boxOptionStyles.boxWrapper}
    >
      <View style={boxOptionStyles.boxChildWrapper}>
        <TextTemplate color={selectedStyle.color} type="b2b">
          {heading}
        </TextTemplate>
        {!subheading ? null : (
          <TextTemplate color={selectedStyle.color} type="l2">
            {subheading}
          </TextTemplate>
        )}
        <View style={boxOptionStyles.packageTypeWrapper}>
          <PackageType minWidth={0} type={coverType} />
        </View>
      </View>
    </BoxOption>
  );
};

const mapCoverToStyle = (coverType: CoverType) => {
  if (coverType === CoverType.Epic) {
    return {
      borderColor: Colours.products.fib.epic,
      backgroundColor: Colours.products.fib.epicLight,
      color: Colours.products.fib.epic,
    };
  }

  if (coverType === CoverType.Rare) {
    return {
      borderColor: Colours.products.fib.rare,
      backgroundColor: Colours.products.fib.rareLight,
      color: Colours.products.fib.rare,
    };
  }

  if (coverType === CoverType.Common) {
    return {
      borderColor: Colours.products.fib.common,
      backgroundColor: Colours.products.fib.commonLight,
      color: Colours.products.fib.common,
    };
  }

  return {};
};

const boxOptionStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(16),
    justifyContent: "center",
  } as ViewStyle,
  boxWrapper: {
    flex: 1,
    marginHorizontal: Style.adjust(8),
    maxWidth: Style.adjust(80),
  } as ViewStyle,
  boxChildWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Style.adjust(16),
    borderRadius: 16,
  } as ViewStyle,
  packageTypeWrapper: {} as ViewStyle,
});
