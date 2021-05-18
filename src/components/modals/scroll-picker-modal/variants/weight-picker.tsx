import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { getFIBState } from "@redux/product/product.selectors";
import { Weight } from "@redux/product/product.types";
import ScrollPickerModal from "../scroll-picker-modal";

const dataStones = Array.from({ length: 100 }).map((_, i) => ({
  label: `${i + 5} st`,
  value: i + 5,
}));
const dataLbs = Array.from({ length: 14 }).map((_, i) => ({
  label: `${i} lb`,
  value: i,
}));
const dataKg = Array.from({ length: 500 }).map((_, i) => ({
  label: `${i + 30} kg`,
  value: i + 30,
}));

const DEFAULT_STONES_INDEX = 12;
const DEFAULT_LBS_INDEX = 0;
const DEFAULT_KG_INDEX = 80;

interface Props {
  onCancel: () => void;
  onConfirm: () => void;
}

export const WeightPicker = ({ onCancel, onConfirm }: Props) => {
  const dispatch = useDispatch();
  const weight = useSelector(getFIBState).answers.weight;

  const { currentKgIndex, currentStonesIndex, currentLbsIndex } = useMemo(() => {
    const _currentKgIndex = dataKg.findIndex((item) => item.value === parseInt(weight.kg, 10));
    const _currentStonesIndex = dataStones.findIndex((item) => item.value === parseInt(weight.st, 10));
    const _currentLbsIndex = dataLbs.findIndex((item) => item.value === parseInt(weight.lb, 10));

    return {
      currentKgIndex: _currentKgIndex > -1 ? _currentKgIndex : DEFAULT_KG_INDEX,
      currentStonesIndex: _currentStonesIndex > -1 ? _currentStonesIndex : DEFAULT_STONES_INDEX,
      currentLbsIndex: _currentLbsIndex > -1 ? _currentLbsIndex : DEFAULT_LBS_INDEX,
    };
  }, [weight]);

  const [kgIndex, setKgIndex] = useState(currentKgIndex);
  const [stIndex, setStIndex] = useState(currentStonesIndex);
  const [lbIndex, setLbIndex] = useState(currentLbsIndex);
  const [isMetric, setIsMetric] = useState(weight.unit === "kg");

  const handleWeightStonesChange = useCallback(
    (newIndex: number) => {
      setStIndex(newIndex);
    },
    [setStIndex]
  );

  const handleWeightLbsChange = useCallback(
    (newIndex: number) => {
      setLbIndex(newIndex);
    },
    [setLbIndex]
  );

  const handleWeightKgChange = useCallback(
    (newIndex: number) => {
      setKgIndex(newIndex);
    },
    [setKgIndex]
  );

  const handleConfirm = useCallback(() => {
    const metricWeightFormat = {
      kg: dataKg[kgIndex].value.toFixed(0),
      st: "",
      lb: "",
      unit: "kg",
    };

    const imperialWeightFormat = {
      kg: "",
      st: dataStones[stIndex].value.toFixed(0),
      lb: dataLbs[lbIndex].value.toFixed(0),
      unit: "st",
    };

    const updatedWeight = isMetric ? metricWeightFormat : imperialWeightFormat;

    dispatch(
      updateFIBAnswerValue({
        key: "weight",
        value: updatedWeight as Weight,
      })
    );

    onConfirm();
  }, [dispatch, onConfirm, isMetric, stIndex, lbIndex, kgIndex]);

  const activePickers = useMemo(() => {
    return isMetric
      ? [
          {
            items: dataKg,
            onIndexChange: handleWeightKgChange,
            defaultIndex: currentKgIndex,
          },
        ]
      : [
          {
            items: dataStones,
            onIndexChange: handleWeightStonesChange,
            defaultIndex: currentStonesIndex,
          },
          {
            items: dataLbs,
            onIndexChange: handleWeightLbsChange,
            defaultIndex: currentLbsIndex,
          },
        ];
  }, [
    isMetric,
    currentLbsIndex,
    currentStonesIndex,
    currentKgIndex,
    handleWeightLbsChange,
    handleWeightKgChange,
    handleWeightStonesChange,
  ]);

  return (
    <ScrollPickerModal
      pickers={activePickers}
      toggle={() => setIsMetric(!isMetric)}
      toggleLabel={isMetric ? "switch to st" : "switch to kg"}
      onConfirm={handleConfirm}
      onCancel={onCancel}
    />
  );
};
