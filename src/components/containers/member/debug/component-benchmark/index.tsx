import React, { memo, useMemo, useState } from "react";
import { GenericHeadingAbsolute, GenericHeadingPad, Tabs } from "@organisms";
import { Navigation } from "@navigation/main";
import { Box } from "@atoms";
import { BENCHMARK_TESTABLE_COMPONENTS } from "./benchmark-config";
import { ComponentTester } from "./subcomponents/component-tester";

export const ComponentBenchmark = ({ componentId }: { componentId: string }) => {
  const [activeComponent, setActiveComponent] = useState<string>(BENCHMARK_TESTABLE_COMPONENTS[0].name);

  const tabs = useMemo(() => {
    return BENCHMARK_TESTABLE_COMPONENTS.map(({ name }) => ({ name, onPress: () => setActiveComponent(name) }));
  }, []);

  const activeComponentData = useMemo(() => {
    return BENCHMARK_TESTABLE_COMPONENTS.find(({ name }) => name === activeComponent);
  }, [activeComponent]);

  return (
    <>
      <Box flex={1}>
        <GenericHeadingPad />
        <GenericHeadingAbsolute heading={"Benchmark"} onLeftIconPress={() => Navigation.pop(componentId)} />
        <Tabs list={tabs} />
        <ComponentTester {...activeComponentData} />
      </Box>
    </>
  );
};

export default memo(ComponentBenchmark);
