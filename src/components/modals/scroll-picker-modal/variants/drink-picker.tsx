import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { getFIBState } from "@redux/product/product.selectors";
import ScrollPickerModal from "../scroll-picker-modal";

const dataDrinks = Array.from({ length: 21 }).map((_, i) => ({
  label: `${i} kg`,
  value: i,
}));

const DEFAULT_DRINKS_INDEX = 0;

interface Props {
  onCancel: () => void;
  onConfirm: () => void;
}

export const DrinksPicker = ({ onCancel, onConfirm }: Props) => {
  const dispatch = useDispatch();
  const drinks = useSelector(getFIBState).answers.weeklyAlcoholDrinks;

  const { currentDrinksIndex } = useMemo(() => {
    const _currentDrinksIndex = dataDrinks.findIndex((item) => item.value === parseInt(drinks, 10));

    return {
      currentDrinksIndex: _currentDrinksIndex > -1 ? _currentDrinksIndex : DEFAULT_DRINKS_INDEX,
    };
  }, [drinks]);

  const [drinksIndex, setDrinksIndex] = useState(currentDrinksIndex);

  const handleDrinksChange = useCallback(
    (newIndex: number) => {
      setDrinksIndex(newIndex);
    },
    [setDrinksIndex]
  );

  const handleConfirm = useCallback(() => {
    dispatch(
      updateFIBAnswerValue({
        key: "weeklyAlcoholDrinks",
        value: dataDrinks[drinksIndex].value.toString(),
      })
    );

    onConfirm();
  }, [dispatch, onConfirm, drinksIndex]);

  const activePickers = useMemo(() => {
    return [
      {
        items: dataDrinks,
        onIndexChange: handleDrinksChange,
        defaultIndex: currentDrinksIndex,
      },
    ];
  }, [currentDrinksIndex, handleDrinksChange]);

  return <ScrollPickerModal pickers={activePickers} onConfirm={handleConfirm} onCancel={onCancel} />;
};
