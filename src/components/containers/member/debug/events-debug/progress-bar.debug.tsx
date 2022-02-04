import React, { useState, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import useInterval from "@use-it/interval";
import { ProgressBar } from "@atoms";
import { Style } from "@styles";
import WrapperDebug from "../wrapper.debug";

const ProgressBarDebug = () => {
  const [current, setCurrent] = useState(0);
  const milestones = useMemo(() => [60, 80, 100], []);

  useInterval(() => {
    setCurrent((current) => {
      if (current === 100) {
        return 0;
      }

      return current + 2.5;
    });
  }, 125);

  return (
    <WrapperDebug>
      <View style={styles.wrapper}>
        <ProgressBar current={0} max={100} milestones={milestones} style={styles.progressBar} />
        <ProgressBar current={60} max={100} milestones={milestones} style={styles.progressBar} />
        <ProgressBar current={85} max={100} milestones={milestones} style={styles.progressBar} />
        <ProgressBar current={100} max={100} milestones={milestones} style={styles.progressBar} />
        <ProgressBar current={current} max={100} milestones={milestones} style={styles.progressBar} />
        <ProgressBar current={0} max={100} milestones={milestones} style={styles.progressBar} type={"compact"} />
        <ProgressBar current={60} max={100} milestones={milestones} style={styles.progressBar} type={"compact"} />
        <ProgressBar current={85} max={100} milestones={milestones} style={styles.progressBar} type={"compact"} />
        <ProgressBar current={100} max={100} milestones={milestones} style={styles.progressBar} type={"compact"} />
        <ProgressBar current={current} max={100} milestones={milestones} style={styles.progressBar} type={"compact"} />
      </View>
    </WrapperDebug>
  );
};

export default ProgressBarDebug;

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(30),
  },
  progressBar: {
    marginBottom: Style.adjust(30),
  },
});
