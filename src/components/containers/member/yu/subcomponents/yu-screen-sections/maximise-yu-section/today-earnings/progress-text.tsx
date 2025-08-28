import { TextTemplate } from "@atoms";
import { Counter } from "@components/molecules";
import { Colours, Style, templateTextStyles } from "@styles";
import { memo, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  progress: {
    current: number;
    max: number;
  };
  animate?: boolean;
};

export const ProgressText = memo(({ progress, animate }: Props) => {
  const [currentValue, setCurrentValue] = useState(progress.current);
  const [animateCounter, setAnimateCounter] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (animate) {
      setCurrentValue(Math.max(0, progress.current - 10)); // do not animate below 0
      setAnimateCounter(true);
      timeout = setTimeout(() => {
        setCurrentValue(progress.current);
      }, 0);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [progress.current, animate]);

  if (!progress?.max) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.currentWrapper}>
        {animateCounter ? (
          <Counter duration={1200} value={currentValue} textStyle={styles.current} />
        ) : (
          <TextTemplate type="h3" color={styles.current.color}>
            {progress.current}
          </TextTemplate>
        )}
      </View>
      <View style={styles.max}>
        <TextTemplate type="b2b">{`/ ${progress.max}`}</TextTemplate>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  currentWrapper: {
    justifyContent: "flex-end",
  },
  current: {
    ...templateTextStyles.h3,
    color: Colours.primary.p600,
  },
  max: {
    justifyContent: "flex-end",
    paddingBottom: Style.adjust(4),
    marginStart: Style.adjust(4),
  },
});
