import { delay } from "@utils/misc";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import { PropUpdateContainer } from "../subcomponents/prop-update-container";

export const ChildrenUpdateTest = ({
  getProps,
  onFinish,
  iterations,
  Component,
}: {
  Component: any;
  iterations: number;
  getProps: (iteration: number) => any;
  onFinish: ({ totalTime, averageTime }: { totalTime: number; averageTime: number }) => void;
}) => {
  const startTimeRef = useRef<number>(0);
  const resultsRef = useRef<any[]>([]);
  const [iterationNumber, setIterationNumber] = useState(0);

  useEffect(() => {
    (async () => {
      await delay(1000);
      resultsRef.current = [];
      setIterationNumber(1);

      startTimeRef.current = performance.now();
    })();
  }, []);

  const onRender = useCallback(() => {
    if (iterationNumber <= 0) {
      return;
    }

    const currentTime = performance.now();
    const timeElapsed = currentTime - startTimeRef.current;
    resultsRef.current.push(timeElapsed);
    startTimeRef.current = performance.now();

    if (iterationNumber < iterations) {
      setTimeout(() => {
        setIterationNumber((it) => it + 1);
      }, 0);

      return;
    }

    const totalTime = resultsRef.current.reduce((acc, curr) => acc + curr, 0);
    const averageTime = totalTime / iterations;

    onFinish({ totalTime, averageTime });
  }, [iterationNumber, iterations, onFinish]);

  const props = useMemo(() => getProps(0), [getProps]);

  const children = useMemo(() => {
    return <View key={iterationNumber} />;
  }, [iterationNumber]);

  return (
    <PropUpdateContainer onRender={onRender}>
      <Component props={props}>{children}</Component>
    </PropUpdateContainer>
  );
};
