import React, { useCallback, useMemo, useState } from "react";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { getFIBState } from "@redux/product/product.selectors";
import { Height } from "@redux/product/product.types";
import { useDispatch, useSelector } from "react-redux";
import ScrollPickerModal from "../scroll-picker-modal";

const dataFeet = Array.from({ length: 4 }).map((_, i) => ({
  label: `${i + 4} ft`,
  value: i + 4,
}));
const dataInches = Array.from({ length: 12 }).map((_, i) => ({
  label: `${i} in`,
  value: i,
}));
const dataCm = Array.from({ length: 100 }).map((_, i) => ({
  label: `${i + 122} cm`,
  value: i + 122,
}));

const DEFAULT_FEET_INDEX = 1;
const DEFAULT_INCH_INDEX = 11;
const DEFAULT_CM_INDEX = 59;

interface Props {
  onCancel: () => void;
  onConfirm: () => void;
}

export const HeightPicker = ({ onCancel, onConfirm }: Props) => {
  const dispatch = useDispatch();
  const height = useSelector(getFIBState).answers.height;

  const { currentCmIndex, currentFeetIndex, currentInchIndex } = useMemo(() => {
    const _currentCmIndex = dataCm.findIndex((item) => item.value === parseInt(height.cm, 10));
    const _currentFeetIndex = dataFeet.findIndex((item) => item.value === parseInt(height.ft, 10));
    const _currentInchIndex = dataInches.findIndex((item) => item.value === parseInt(height.in, 10));

    return {
      currentCmIndex: _currentCmIndex > -1 ? _currentCmIndex : DEFAULT_CM_INDEX,
      currentFeetIndex: _currentFeetIndex > -1 ? _currentFeetIndex : DEFAULT_FEET_INDEX,
      currentInchIndex: _currentInchIndex > -1 ? _currentInchIndex : DEFAULT_INCH_INDEX,
    };
  }, [height]);

  const [ftIndex, setFtIndex] = useState(currentFeetIndex);
  const [inchesIndex, setInchIndex] = useState(currentInchIndex);
  const [cmIndex, setCmIndex] = useState(currentCmIndex);
  const [isMetric, setIsMetric] = useState(height.unit === "cm");

  const handleHeightFeetChange = useCallback(
    (newIndex: number) => {
      setFtIndex(newIndex);
    },
    [setFtIndex]
  );

  const handleHeightInchChange = useCallback(
    (newIndex: number) => {
      setInchIndex(newIndex);
    },
    [setInchIndex]
  );

  const handleHeightCmChange = useCallback(
    (newIndex: number) => {
      setCmIndex(newIndex);
    },
    [setCmIndex]
  );

  const handleConfirm = useCallback(() => {
    const metricHeightFormat = {
      cm: dataCm[cmIndex].value.toFixed(0),
      in: "",
      ft: "",
      unit: "cm",
    };

    const imperialHeightFormat = {
      cm: "",
      in: dataInches[inchesIndex].value.toFixed(0),
      ft: dataFeet[ftIndex].value.toFixed(0),
      unit: "ft",
    };

    const updatedHeight = isMetric ? metricHeightFormat : imperialHeightFormat;

    dispatch(
      updateFIBAnswerValue({
        key: "height",
        value: updatedHeight as Height,
      })
    );

    onConfirm();
  }, [dispatch, onConfirm, isMetric, cmIndex, inchesIndex, ftIndex]);

  const activePickers = useMemo(() => {
    return isMetric
      ? [
          {
            items: dataCm,
            onIndexChange: handleHeightCmChange,
            defaultIndex: currentCmIndex,
          },
        ]
      : [
          {
            items: dataFeet,
            onIndexChange: handleHeightFeetChange,
            defaultIndex: currentFeetIndex,
          },
          {
            items: dataInches,
            onIndexChange: handleHeightInchChange,
            defaultIndex: currentInchIndex,
          },
        ];
  }, [
    isMetric,
    currentCmIndex,
    currentFeetIndex,
    currentInchIndex,
    handleHeightInchChange,
    handleHeightFeetChange,
    handleHeightCmChange,
  ]);

  return (
    <ScrollPickerModal
      pickers={activePickers}
      toggle={() => setIsMetric(!isMetric)}
      toggleLabel={isMetric ? "switch to ft" : "switch to cm"}
      onConfirm={handleConfirm}
      onCancel={onCancel}
    />
  );
};
