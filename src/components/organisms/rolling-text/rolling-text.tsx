import React, { memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import { RollingTextItem } from "@molecules";
import { Stack } from "@atoms";
import { Style } from "@styles";

interface IRollingTextSpinProps {
  previousValue: string | number;
  newValue: string | number;
}

const RollingTextSpin = ({ previousValue, newValue }: IRollingTextSpinProps) => {
  const elements = useMemo(() => {
    const nodes = `${newValue}`.split("");
    const previousNodes = `${previousValue}`.split("");

    return nodes.map((node, index) => {
      return <RollingTextItem oldValue={previousNodes[index]} value={node} key={index} />;
    });
  }, [previousValue, newValue]);

  return (
    <Stack style={styles.container} gap={Style.adjust(0)} direction="row" justifyContent={"center"}>
      {elements}
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: { overflow: "hidden", height: Style.adjust(52) },
});

export default memo(RollingTextSpin);
