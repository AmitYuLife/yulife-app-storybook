import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react-native";
import ScrollPickerModal from "./scroll-picker-modal";

const dataFeet = Array.from({ length: 3 }).map((_, i) => ({
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

const NAME = "ScrollPickerModal";
storiesOf(NAME, module).add("default", () => <Test />);

const DEFAULT_FEET_INDEX = 1;
const DEFAULT_INCH_INDEX = 11;
const DEFAULT_CM_INDEX = 59;

const Test = () => {
  const [ftIndex, setFtIndex] = useState(0);
  const [inchesIndex, setInchIndex] = useState(0);
  const [cmIndex, setCmIndex] = useState(0);
  const [isMetric, setIsMetric] = useState(false);
  const handleHeightFeetChange = (newIndex: number) => {
    setFtIndex(newIndex);
  };

  const handleHeightInchChange = (newIndex: number) => {
    setInchIndex(newIndex);
  };

  const handleHeightCmChange = (newIndex: number) => {
    setCmIndex(newIndex);
  };

  useEffect(() => {
    setFtIndex(DEFAULT_FEET_INDEX);
    setInchIndex(DEFAULT_INCH_INDEX);
    setCmIndex(DEFAULT_CM_INDEX);
  }, [isMetric]);

  const displayArgs = {
    feet: dataFeet[ftIndex].value,
    inches: dataInches[inchesIndex].value,
    isMetric,
    cm: dataCm[cmIndex].value,
  };
  const imperialDisplay = displayHeightInImperial(displayArgs);
  const metricDisplay = displayHeightInMetric(displayArgs);
  const activePickers = isMetric
    ? [
        {
          id: "dataCm",
          items: dataCm,
          onIndexChange: handleHeightCmChange,
          defaultIndex: DEFAULT_CM_INDEX,
        },
      ]
    : [
        {
          id: "dataFeet",
          items: dataFeet,
          onIndexChange: handleHeightFeetChange,
          defaultIndex: DEFAULT_FEET_INDEX,
        },
        {
          id: "dataInches",
          items: dataInches,
          onIndexChange: handleHeightInchChange,
          defaultIndex: DEFAULT_INCH_INDEX,
        },
      ];
  return (
    <ScrollPickerModal
      pickers={activePickers}
      toggle={() => setIsMetric(!isMetric)}
      toggleLabel={isMetric ? "switch to cm" : "switch to ft"}
      onConfirm={() => {
        console.log(`@! Do something with ${isMetric ? metricDisplay : imperialDisplay}`);
        return null;
      }}
      onCancel={() => {
        // e.g. hide modal
        return null;
      }}
    />
  );
};

function displayHeightInImperial({ feet, inches, isMetric, cm }: any) {
  if (!isMetric) {
    return `${feet}'${inches}"`;
  }

  return `${Math.floor(cm / 30.48)}'${Math.floor((cm % 30.48) / 2.54)}"`;
}

function displayHeightInMetric({ feet, inches, isMetric, cm }: any) {
  if (!isMetric) {
    return `${(feet * 30.48 + inches * 2.54).toFixed(1)}cm`;
  }

  return `${cm.toFixed(1)} cm`;
}
