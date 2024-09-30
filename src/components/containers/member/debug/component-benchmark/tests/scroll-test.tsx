import { delay } from "@utils/misc";
import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { FlatList } from "react-native";

export const ScrollTest = memo(
  ({
    props,
    count,
    onFinish,
    Component,
    estimatedItemSize,
  }: {
    props: any;
    count: number;
    Component: any;
    estimatedItemSize: number;
    onFinish: (time: number) => void;
  }) => {
    const startTimeRef = useRef<number>(0);
    const hasFinished = useRef<boolean>(false);
    const scrollRef = useRef<FlatList<typeof Component>>(null);

    useEffect(() => {
      (async () => {
        await delay(1000);
        startTimeRef.current = performance.now();
        scrollRef.current?.scrollToIndex({ index: count - 1, animated: true });
      })();
    }, [count]);

    const data = useMemo(() => Array.from({ length: count }), [count]);

    const onEndReached = useCallback(() => {
      console.log("end reached");
      if (!hasFinished.current) {
        hasFinished.current = true;
        const endTime = performance.now();
        onFinish(endTime - startTimeRef.current);
      }
    }, [onFinish]);

    const renderItem = useCallback(() => <Component {...props} />, [Component, props]);

    return (
      <FlatList
        data={data}
        ref={scrollRef}
        renderItem={renderItem}
        onEndReached={onEndReached}
        keyExtractor={(_, index) => index.toString()}
        getItemLayout={(_, index) => ({
          length: estimatedItemSize,
          offset: estimatedItemSize * index,
          index,
        })}
      />
    );
  }
);
