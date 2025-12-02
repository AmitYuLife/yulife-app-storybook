import { Box, TextTemplate } from "@atoms";
import { Counter } from "@components/molecules";
import { isRTL } from "@locale";
import { Colours, templateTextStyles, StyleSheet } from "@styles";
import { memo, useEffect, useMemo, useState } from "react";

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

  const maxProps = useMemo(() => buildMaxProps(), []);

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
    <Box flexDirection="row">
      <Box flexDirection="row" dir="ltr">
        <Box justifyContent="flex-end">
          {animateCounter ? (
            <Counter duration={1200} value={currentValue} textStyle={styles.current} />
          ) : (
            <TextTemplate type="h3" color={styles.current.color}>
              {progress.current}
            </TextTemplate>
          )}
        </Box>
        <Box {...maxProps}>
          <TextTemplate type="b2b">{`/ ${progress.max}`}</TextTemplate>
        </Box>
      </Box>
    </Box>
  );
});

const buildMaxProps = () => {
  return {
    justifyContent: "flex-end",
    pb: 4,
    ...(isRTL() ? { mr: 4 } : { ml: 4 }),
  } as const;
};

const styles = StyleSheet.create({
  current: {
    ...templateTextStyles.h3,
    color: Colours.primary.p600,
  },
});
