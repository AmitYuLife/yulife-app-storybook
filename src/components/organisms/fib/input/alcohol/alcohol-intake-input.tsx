import React from "react";
import { connect, ConnectedProps } from "react-redux";
import AlcoholBottle from "./alcohol-bottle";
import AlcoholBottleGreyscale from "./alcohol-bottle-greyscale";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles/index";
import { SliderInput } from "./slider";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { ALCOHOL_DRINK_LIMIT } from "./alcohol.common";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";

type Props = ConnectedProps<typeof redux>;

const _AlcoholIntakeInput = (props: Props) => {
  const { weeklyAlcohol, updateWeeklyAlcohol } = props;
  const displayValue = weeklyAlcohol;
  const sliderPercentageFilled = (displayValue / ALCOHOL_DRINK_LIMIT) * 100;

  function handleChange(val: number) {
    return updateWeeklyAlcohol(Math.round(val));
  }

  const dynamicStyles = StyleSheet.create({
    colourfulBottle: {
      height: `${sliderPercentageFilled}%`,
    } as ViewStyle,
  });

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.bottleContainer}>
          <View style={styles.absoluteBottom}>
            <AlcoholBottleGreyscale />
          </View>
          <View style={dynamicStyles.colourfulBottle}>
            <View style={styles.absoluteBottom}>
              <AlcoholBottle percentageVisible={sliderPercentageFilled} />
            </View>
          </View>
        </View>
        <View style={styles.sliderContainer}>
          <SliderInput value={displayValue} onValueChange={handleChange} />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  weeklyAlcohol: getFIBState(state).answers.weeklyAlcoholDrinks as number,
});

const mapDispatchToProps = {
  updateWeeklyAlcohol: (value: number) => updateFIBAnswerValue({ key: "weeklyAlcoholDrinks", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const AlcoholIntakeInput = redux(_AlcoholIntakeInput);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
  },
  bottleContainer: {
    height: Style.adjust(221),
    justifyContent: "flex-end",
  } as ViewStyle,
  absoluteBottom: {
    position: "absolute",
    bottom: 0,
  } as ViewStyle,
  sliderContainer: {
    width: 200,
    transform: [{ rotate: "270deg" }, { translateX: -90 }, { translateY: 20 }],
    height: 42,
  } as ViewStyle,
});
