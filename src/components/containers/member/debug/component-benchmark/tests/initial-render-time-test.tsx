import { memo, useCallback, useEffect } from "react";

export const InitialRenderTimeTest = memo(
  ({
    Component,
    name,
    count,
    props,
    onFinish,
  }: {
    Component: any;
    props: any;
    name: string;
    count: number;
    onFinish: ({ totalTime, averageTime }: { totalTime: number; averageTime: number }) => void;
  }) => {
    const measureRenderTime = useCallback(() => {
      const times: number[] = [];

      for (let i = 0; i < count; i++) {
        const start = performance.now();
        <Component key={i} {...props} />;
        const end = performance.now();

        times.push(end - start);
      }

      return {
        totalTime: times.reduce((acc, curr) => acc + curr, 0),
        averageTime: times.reduce((acc, curr) => acc + curr, 0) / count,
      };
    }, [Component, count, props]);

    useEffect(() => {
      (async () => {
        const results = await measureRenderTime();
        console.log({ results });
        onFinish(results);
      })();
    }, [count, measureRenderTime, name, onFinish, props]);

    return <></>;
  }
);
